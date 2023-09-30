import { getLocalStorage, setLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import productDetails from "./productDetails.mjs";

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

const prodID = getParam('product');
productDetails(prodID);

console.log(findProductById(prodID));


// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
