const WA_NUMBER = "917061712908";

const inr = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

const build = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const waOrderLink = (product, qty = 1) =>
  build(
    `Hello PachAmrit! I would like to order the *${product.name}* (Price: ${inr(
      product.price
    )}, Pack: ${product.dimensions}). Quantity: ${qty}. Please share payment & delivery details.`
  );

export const waQuestionLink = (product) =>
  build(
    `Hi PachAmrit, I have a question about the *${product.name}* (Price: ${inr(
      product.price
    )}). Could you tell me more?`
  );

export const waGeneralLink = () =>
  build(
    "Hello PachAmrit! I'd like to know more about your digestive churan packs for bloating and digestion."
  );

export const waLookLink = (lookName) =>
  build(
    `Hi PachAmrit! I have a question about *${lookName}*. Can you help?`
  );

export const formatINR = inr;
