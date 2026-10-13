import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Loader2, LogOut, RefreshCw, Inbox, Lock } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/ui/input";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function formatApiErrorDetail(detail) {
  if (detail == null) return "Something went wrong. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail))
    return detail
      .map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e)))
      .filter(Boolean)
      .join(" ");
  if (detail && typeof detail.msg === "string") return detail.msg;
  return String(detail);
}

const formatDate = (iso) =>
  new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

export default function AdminPage() {
  const [user, setUser] = useState(null); // null = checking, false = logged out
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [enquiries, setEnquiries] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  const loadEnquiries = useCallback(async () => {
    setLoadingList(true);
    try {
      const { data } = await axios.get(`${API}/admin/enquiries`);
      setEnquiries(data);
    } catch (e) {
      if (e.response?.status === 401) setUser(false);
    } finally {
      setLoadingList(false);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/auth/me`)
      .then(({ data }) => setUser(data))
      .catch(() => setUser(false));
  }, []);

  useEffect(() => {
    if (user) loadEnquiries();
  }, [user, loadEnquiries]);

  const submitLogin = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      setUser(data);
    } catch (err) {
      setError(formatApiErrorDetail(err.response?.data?.detail) || err.message);
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    await axios.post(`${API}/auth/logout`).catch(() => {});
    setUser(false);
    setEnquiries([]);
  };

  return (
    <div className="min-h-screen bg-sand font-sans text-ink antialiased">
      <div className="grain" aria-hidden="true" />
      <header className="border-b border-stone-200 bg-sand/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-5xl items-center justify-between px-5 sm:px-8">
          <Logo />
          {user && (
            <button
              type="button"
              onClick={logout}
              data-testid="admin-logout-btn"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-terra hover:text-terra"
            >
              <LogOut className="h-3.5 w-3.5" />
              Log out
            </button>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8" data-testid="admin-page">
        {user === null ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-6 w-6 animate-spin text-terra" />
          </div>
        ) : user === false ? (
          <div className="mx-auto max-w-md">
            <form
              onSubmit={submitLogin}
              data-testid="admin-login-form"
              className="rounded-[26px] border border-stone-200 bg-white p-8 shadow-[0_24px_60px_-30px_rgba(74,58,42,0.35)] sm:p-10"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-terra">
                <Lock className="h-5 w-5" />
              </span>
              <h1 className="mt-4 font-serif text-3xl font-semibold text-ink">
                Admin Sign In
              </h1>
              <p className="mt-2 text-sm text-stone-600">
                Private area — enquiry inbox for Avora Homes.
              </p>
              <div className="mt-6 space-y-4">
                <Input
                  required
                  type="email"
                  placeholder="Admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="admin-email-input"
                  className="h-12 rounded-xl border-stone-200 bg-sand/60"
                />
                <Input
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="admin-password-input"
                  className="h-12 rounded-xl border-stone-200 bg-sand/60"
                />
              </div>
              {error && (
                <p
                  className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                  data-testid="admin-login-error"
                >
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={busy}
                data-testid="admin-login-submit-btn"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-sand transition-colors hover:bg-terra disabled:opacity-60"
              >
                {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                {busy ? "Signing in…" : "Sign In"}
              </button>
            </form>
          </div>
        ) : (
          <div data-testid="admin-dashboard">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">
                  <span className="h-px w-10 bg-terra" />
                  Enquiry Inbox
                </p>
                <h1 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                  Customer Enquiries
                </h1>
                <p className="mt-2 text-sm text-stone-600">
                  Signed in as {user.email} ·{" "}
                  <span data-testid="admin-enquiry-count">
                    {enquiries.length}{" "}
                    {enquiries.length === 1 ? "enquiry" : "enquiries"}
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={loadEnquiries}
                disabled={loadingList}
                data-testid="admin-refresh-btn"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-terra hover:text-terra disabled:opacity-60"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${loadingList ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>

            {loadingList && enquiries.length === 0 ? (
              <div className="flex justify-center py-24">
                <Loader2 className="h-6 w-6 animate-spin text-terra" />
              </div>
            ) : enquiries.length === 0 ? (
              <div
                className="mt-10 rounded-[22px] border border-dashed border-stone-300 bg-white/40 py-20 text-center"
                data-testid="admin-empty-state"
              >
                <Inbox className="mx-auto h-8 w-8 text-stone-400" />
                <p className="mt-4 font-serif text-2xl text-ink">No enquiries yet.</p>
                <p className="mt-2 text-sm text-stone-500">
                  New submissions from the website form will appear here.
                </p>
              </div>
            ) : (
              <div className="mt-8 space-y-4" data-testid="admin-enquiry-list">
                {enquiries.map((enq) => (
                  <article
                    key={enq.id}
                    data-testid={`admin-enquiry-${enq.id}`}
                    className="rounded-[18px] border border-stone-200 bg-white p-6 shadow-[0_12px_32px_-24px_rgba(74,58,42,0.35)]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-serif text-xl font-semibold text-ink">
                          {enq.name}
                        </h2>
                        <p className="mt-0.5 text-xs text-stone-500">
                          {formatDate(enq.created_at)}
                        </p>
                      </div>
                      <span className="rounded-full bg-cream px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-clay">
                        {enq.product_interest}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                      <p className="text-stone-600">
                        <span className="font-semibold text-ink">Phone:</span>{" "}
                        <a
                          href={`https://wa.me/${enq.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-terra underline-offset-2 hover:underline"
                        >
                          {enq.phone}
                        </a>
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold text-ink">City:</span>{" "}
                        {enq.city || "—"}
                      </p>
                    </div>
                    {enq.message && (
                      <p className="mt-3 rounded-xl bg-sand/70 px-4 py-3 text-sm leading-relaxed text-stone-700">
                        {enq.message}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
