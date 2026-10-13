const WA_NUMBER = "917061712908";

const inr = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

const build = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const waOrderLink = (product, qty = 1) =>
  build(
    `Hello Avora Homes! I would like to order the *${product.name}* (Price: ${inr(
      product.price
    )}, Finish: ${product.finish}). Quantity: ${qty}. Please share payment & delivery details.`
  );

export const waQuestionLink = (product) =>
  build(
    `Hi Avora Homes, I have a question about *${product.name}* (Price: ${inr(
      product.price
    )}). Could you share custom size / care options?`
  );

export const waGeneralLink = () =>
  build(
    "Hello Avora Homes, I would like to enquire about your sculptural cement pots and designer vases collection."
  );

export const waLookLink = (lookName) =>
  build(
    `Hi Avora Homes! I loved the *${lookName}* styling idea on your site. Can you help me recreate this look?`
  );

export const formatINR = inr;
