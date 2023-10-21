import { getLocalStorage, setLocalStorage } from "./utils.mjs"
import { findProductById } from "./productData.mjs";

 let product = {};

export default async function productDetails(productId){
   // use findProductById to get the details for the current product. findProductById will return a promise (product will = the promise)! use await or .then() to process it
  product = await findProductById(productId)
  if(product) {
    successRender(product);
    //document.getElementById("addToCart").addEventListener("click", addToCart());
  } else {
    failRender(product);
  }
   // Potential code based on the above promise... 
   // once we have the product details we can render out the HTML
  //  renderProductDetails(); 

};

function addToCart() {
   if (!getLocalStorage("so-cart")) {
     setLocalStorage("so-cart", []);
   }
   let cartProduct = getLocalStorage("so-cart");
   cartProduct.push(product); // error: cartProduct.push is not a function...
   setLocalStorage("so-cart", cartProduct);
 };


function renderProductDetails() {
   document.getElementById("productName").innerText = product.Brand.Name; 
   document.getElementById("noBrandName").innerText = product.NameWithoutBrand;
   document.getElementById("productImg").src = product.Image;
   document.getElementById("productPrice").innerText = product.FinalPrice;
   document.getElementById("productColor").innerText = product.Colors[0].ColorName;
   document.getElementById("shortDescription").innerHTML = product.DescriptionHtmlSimple;
   document.getElementById("addToCart").dataset.id = product.Id;
};
function successRender(result) {
  console.log("Successful render of Product Details.");
  renderProductDetails(product)
  document.getElementById("addToCart").style.display = "block";
  document.getElementById("addToCart").addEventListener("click", addToCart());

}
function failRender(result) {
  console.log("Error, products not rendered.");
  document.getElementById("productName").insertAdjacentHTML("afterbegin", "Error: Product not found.");
  document.getElementById("addToCart").style.display = "none";
}