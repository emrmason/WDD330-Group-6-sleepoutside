import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document.querySelector("#zip").addEventListener("blur",

checkoutProcess.calculateOrderTotal.bind(checkoutProcess)
);

document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    checkoutProcess.checkout(document.forms["checkout"]);
});
