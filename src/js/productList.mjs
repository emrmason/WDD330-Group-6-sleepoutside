import { getData } from "./productData.mjs";
export default async function productList(selector, category = "tents"){
    let sel = document.querySelector(selector);
    let products = await getData();
    renderProducts(sel, products);

}

function createCard(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Image}"
        alt="${product.NameWithoutBrand}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a
    >
  </li>`
}

function renderProducts(selector, products){
    const HTMLProducts = products.map(createCard);
    selector.insertAdjacentHTML("afterbegin", HTMLProducts.join(""));
}

// productList(".product-list", "tents");

// card.clear??  Make a new function in utils.js called renderListWithTemplate and export it.

// It should take 5 arguments: templateFn, parentElement, list, position, and clear.
