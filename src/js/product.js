import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  if (!getLocalStorage("so-cart")) {
    setLocalStorage("so-cart", []);
  }
  let cartProduct = getLocalStorage("so-cart");
  cartProduct.push(product);
  setLocalStorage("so-cart", cartProduct);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
