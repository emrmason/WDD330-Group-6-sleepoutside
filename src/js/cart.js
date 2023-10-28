import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));// error: cartItems.map is not a function... 
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryLarge}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

function displayTotal(getLocalStorage) {
  let total = 0;
  const cartItems = getLocalStorage("so-cart");  // I have questions about this part- do I need to map out the items, to be able to access the FinalPrice?
  if(cartItems != 0) {
    for(i = 0; i < cartItems.length; i++) {
      total += item.FinalPrice;
      return total
    }
    document.getElementByClassName(".cart-footer").style.display = "block";
    document.querySelector(".cart-total").innerHTML= `Total Cost: ${total}`;
  }
}

loadHeaderFooter();
