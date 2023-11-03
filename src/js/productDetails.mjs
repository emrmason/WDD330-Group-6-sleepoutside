import { getLocalStorage, setLocalStorage } from "./utils.mjs"
import { findProductById } from "./externalServices.mjs";

 let product = {};

export default async function productDetails(productId){
  product = await findProductById(productId)
  if(product) {
    successRender(product);
  }
   renderProductDetails();
   document.getElementById("addToCart").addEventListener("click", addToCart);

};

function addToCart() {
   if (!getLocalStorage("so-cart")) { // why is this throwing an error? What argument should be here? 11.3.23
     setLocalStorage("so-cart", []);
   }
   let cartProduct = getLocalStorage("so-cart");
   cartProduct.push(product);
   setLocalStorage("so-cart", cartProduct);
 };


function renderProductDetails() {
   document.getElementById("productName").innerText = product.Brand.Name; 
   document.getElementById("noBrandName").innerText = product.NameWithoutBrand;
   document.getElementById("productImg").src = product.Images.PrimaryLarge;
   document.getElementById("productImg").alt = product.Name;
   document.getElementById("productPrice").innerText = "$" + product.FinalPrice;
   document.getElementById("productColor").innerText = product.Colors[0].ColorName;
   document.getElementById("shortDescription").innerHTML = product.DescriptionHtmlSimple;
   document.getElementById("addToCart").dataset.id = product.Id;
};

function successRender(result) {
  if(result) {
    console.log("Successful render");
    renderProductDetails(product);
    document.getElementById("addToCart").style.display = "block";
  } else {  
    console.log("Error, products not rendered.");
    document.getElementById("productName").insertAdjacentHTML("afterbegin", "Error: Product not found.");
    document.getElementById("addToCart").style.display = "none";
  }

}


