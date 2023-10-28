import { getLocalStorage, setLocalStorage } from "./utils.mjs"
import { findProductById } from "./productData.mjs";

 let product = {};

export default async function productDetails(productId){
   // use findProductById to get the details for the current product. findProductById will return a promise (product will = the promise)! use await or .then() to process it
  product = await findProductById(productId);
  successRender(product);
  //   document.getElementByID("addToCart").addEventListener("click", addToCart); //Redundant, if successRender works. 
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
   document.getElementById("productImg").src = product.Images.PrimaryLarge;
   document.getElementById("productImg").alt = product.Name;
   document.getElementById("productPrice").innerText = product.FinalPrice;
   document.getElementById("productColor").innerText = product.Colors[0].ColorName;
   document.getElementById("shortDescription").innerHTML = product.DescriptionHtmlSimple;
   document.getElementById("addToCart").dataset.id = product.Id;
};

function successRender(result) {
  if(result) {
    // console.log("Successful render");
    renderProductDetails(product);
    document.getElementById("addToCart").style.display = "block";
    document.getElementByID("addToCart").addEventListener("click", addToCart); //Add to Cart Button still not working for me. ??
  } else {  
    // console.log("Error, products not rendered.");
    document.getElementById("productName").insertAdjacentHTML("afterbegin", "Error: Product not found.");
    document.getElementById("addToCart").style.display = "none";
  }

}


