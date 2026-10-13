# Auth Testing Playbook — Avora Homes

## Step 1: MongoDB Verification
```
mongosh
use test_database
db.users.find({role: "admin"}).pretty()
db.users.findOne({role: "admin"}, {password_hash: 1})
```
Verify: bcrypt hash starts with `$2b$`; unique index on users.email; index on login_attempts.identifier.

## Step 2: API Testing
```
curl -c cookies.txt -X POST <API>/api/auth/login -H "Content-Type: application/json" -d '{"email":"admin@avorahomes.in","password":"Avora@2026"}'
cat cookies.txt
curl -b cookies.txt <API>/api/auth/me
curl -b cookies.txt <API>/api/admin/enquiries
curl <API>/api/admin/enquiries   # expect 401
```
Login returns the admin user and sets the `access_token` httpOnly cookie (12h expiry). `/me` and `/admin/enquiries` succeed with the cookie; without it they return 401.

## Step 3: Brute force
5 failed logins for the admin email → 429 for 15 minutes (login_attempts collection). Successful login clears the counter.
