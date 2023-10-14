import { getParam, loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const prodID = getParam("product");
productDetails(prodID);

// console.log(findProductById(prodID));

let button = document.getElementById("addToCart");
button.addEventListener("click", () => {
  let icon = document.getElementById("backpack");
  icon.setAttribute("class", "shake");
  setTimeout(() => {
    icon.removeAttribute("class", "shake");
  }, 350);
});

loadHeaderFooter();
