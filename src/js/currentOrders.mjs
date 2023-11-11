import { findProductById, retrieveOrders } from "./externalServices.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
export { currentOrders };

export default async function currentOrders(selector, token) {
    try {
        const orders= await retrieveOrders(token);
        const parent= document.querySelector("#current-order-cards");
        parent.innerHTML= orders.map(orderTemplate).join("");
    } catch (err) {
        console.log(err);
    }
}

function orderTemplate(order) {
    return `<li class="order-card">
        <h2 class="order-number">${order.Name}</h2>
        <p class="order-items"> Number of Items: ${order.items.length}</p>
        <p class="order-quantity">qty: 1</p>
        <p class="cart-card__price">$${order.total}</p>
        </li>`; 

}