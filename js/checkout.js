"use strict";
const getElement = (selector) => document.querySelector(selector);

const cart = sessionStorage.getItem("cart");
let totalPrice = sessionStorage.getItem("totalPrice");


const displayOrder = () => {
    let cartDisplay = getElement("#order-items");
    let orderTotal = getElement("#order-total");

    if(totalPrice !== null){
    orderTotal.textContent = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(totalPrice);
    }
    else{
        cartDisplay.textContent = "No items in cart."
    }

    if(cart !== null){
        cart.forEach(item => {
            let product = JSON.parse(item);
            let li = document.createElement("li");
            li.textContent = `${product.name} - $${product.price}`;
            cartDisplay.appendChild(li);
        });
    }
    else{
        cartDisplay.textContent = "No items in cart."
    }
}


document.addEventListener("DOMContentLoaded", () => {
    displayOrder();
});