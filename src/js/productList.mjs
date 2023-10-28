import { getProductsByCategory } from "./externalServices.mjs";
import { renderListWithTemplate, getParam } from "./utils.mjs";


export default async function productList(selector, category) {
// get the element we will insert the list into from the selector
 category= getParam("category");

 let sel = document.querySelector(selector);
// get the list of products
 const products = await getProductsByCategory(category);
//  console.log(products);
// render out the product list to the element
    renderListWithTemplate(createCard, sel, products);
    document.querySelector(".title").innerHTML = category;
};

function renderProducts(products, selector) {
    const htmlProducts = products.map(createCard);
    selector.insertAdjacentHTML('afterbegin', htmlProducts.join(""));
  }

function createCard(product){
    return `<li class="product-card">
            <a href="../product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Images.PrimaryMedium}"
        alt="${product.NameWithoutBrand}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a>
      </li>`
};

