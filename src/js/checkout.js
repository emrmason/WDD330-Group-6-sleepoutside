import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document.querySelector("#zip").addEventListener(
  "blur",

  checkoutProcess.calculateOrderTotal.bind(checkoutProcess)
);

document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();
  let myForm = document.forms[0];
  console.log[myForm];
  let checkValidity = myForm.checkValidity();
  myForm.reportValidity();
  if (checkValidity) {
    console.log(document.forms["checkout"]);
    checkoutProcess.checkout(document.forms["checkout"]);
  }
});
