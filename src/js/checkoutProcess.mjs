import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function packageItems(items) {
    const simplify = items.map((item)=> {
        return {
            id: item.Id,
            name: item.Name,
            price: item.FinalPrice,
            quantity: 1,
        };
    });
    return simplify;
}

function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
    convertedJSON = {};

    formData.forEach(function(value, key){
        convertedJSON[key] = value;
    });
    return convertedJSON;
}

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
        const summaryElement = document.querySelector(this.selector + " #cartTotal");
        const itemNumElement = document.querySelector(this.selector + " #num-items");
        itemNumElement.innerText = this.list.length;
        const amounts = this.list.map((item) => item.FinalPrice);
        this.itemTotal = amounts.reduce((sum, item) => sum + item);
        summaryElement.innerText = "$" + this.itemTotal;
    },
    calculateOrderTotal: function() {
        this.shipping = 10 + (2 * this.list.length + 1);
        this.tax = (this.itemTotal * 0.06).toFixed(2);
        this.orderTotal = (
            parseFloat(this.shipping) + 
            parseFloat(this.tax) +
            parseFloat(this.itemTotal)
        ).toFixed(2);
        this.displayOrderTotals();
    },
    displayOrderTotals: function() {
        const shipping = document.querySelector(this.selector + " #shipping");
        const tax = document.querySelector(this.selector + " #tax");
        const orderTotal = document.querySelector(this.selector + " #orderTotal");
        shipping.innerText = "$" + this.shipping;
        tax.innerText = "$" + this.tax;
        orderTotal.innerText = "$" + this.orderTotal;

    },
    async checkout(form) {
        const json = formDataToJSON(form);
        json.orderDate = new Date;
        json.orderTotal = this.orderTotal;
        json.tax = this.tax;
        json.shipping = this.shipping;
        json.items = packageItems(this.list);
        console.log(json);
        try {
            setLocalStorage('so-cart', []);
            location.assign("/checkout/success.html");
            const res = await this.checkout(json);
            console.log(res);
        } catch (err) {
            // removeAllAlerts();
            for(let message in err.message) {
                alertMessage(err.message[message]);
            }
            console.log(err);
        }
    },
    };

export default checkoutProcess;