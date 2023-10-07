import { getData } from "./productData.mjs";

export default async function productList(selector, category = "tents") {
// get the element we will insert the list into from the selector
 let sel = document.querySelector(selector);
// get the list of products
 const products = await getData();
//  console.log(products);
// render out the product list to the element
    renderProducts(products, sel);
};

function renderProducts(products, selector) {
    const htmlProducts = products.map(createCard);
    selector.insertAdjacentHTML('afterbegin', htmlProducts.join(""));
  }

function createCard(product){
    return `<li class="product-card">
            <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a>
      </li>`
};

productList(".product-list", "tents");