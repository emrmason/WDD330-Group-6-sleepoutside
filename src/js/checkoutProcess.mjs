import { getLocalStorage } from "./utils.mjs";

const checkoutProcess = {
    key: "",
    selector: "",
    list: [],
    itemTotal: 0,
    shipping: 0,
    tax: 0,
    orderTotal: 0,
    init: function(key, selector) {
        this.key = key;
        this.selector = selector;
        this.list = getLocalStorage(key);
        this.calculateItemSummary();
    },

    calculateItemSummary: function() {

    },
    calculateOrderTotal: function() {

    },
    displayOrderTotals: function() {

    }
}

export default checkoutProcess;