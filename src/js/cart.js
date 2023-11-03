import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
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

// function displayTotal() {
//   let total = 0;
//   const items = getLocalStorage("so-cart");
//   if(items.length != 0){
//     for(i = 0; i < items.length; i++) {
//       total += items.FinalPrice;
//       return total
//     }
//     document.getElementByClassName(".cart-footer").style.display = "block";
//     document.querySelector(".cart-total").innerHTML= `Total Cost: ${total}`;
//   } else {
//     return
//   }
// }

loadHeaderFooter();
