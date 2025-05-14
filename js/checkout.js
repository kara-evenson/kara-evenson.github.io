"use strict";
const getElement = (selector) => document.querySelector(selector);

const cart = sessionStorage.getItem("cart");


const displayOrder = () => {
    let cartDisplay = getElement("#order-items");
    let orderTotal = getElement("#order-total");

    if(cart !== null){
        const order = JSON.parse(cart);
        let total = 0;

        order.forEach(product=> {
            let li = document.createElement("li");
            li.textContent = `${product.name} - $${parseFloat(product.price).toFixed(2)}`;
            cartDisplay.appendChild(li);

            total += parseFloat(product.price);
        });

        orderTotal.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(total);
    }
    else{
        cartDisplay.textContent = "No items in cart."
        orderTotal.textContent = "0.00";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    displayOrder();
});