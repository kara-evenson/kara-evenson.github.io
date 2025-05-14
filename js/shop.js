"use strict";

const getElement = (selector) => document.querySelector(selector);

const domain = "data";
const url = `${domain}/products.json`;
let products = [];
let cart = [];
let totalPrice = 0;

fetch(url)
    .then(response => {return response.json()})
    .then(json =>{
        products = json;
        console.log("Products loaded:", products);
        setUpCartButtons();
    })
    .catch(error => {
        console.error("Fetch failed:", error);
    });

const setUpCartButtons = () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", addToOrder);
    });
}

const addToOrder = (event) => {
    event.preventDefault();
    const button = event.target;
    const productId = parseInt(button.getAttribute("data-id"));

    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push({ name: product.name, price: product.price });
        totalPrice += product.price;
        getElement("#cart-total").textContent = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"}).format(totalPrice);
    }
    else {
        alert("Product not found");
    }
}

const checkoutOrder = (event) => {
    event.preventDefault();

    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("totalPrice", totalPrice.toString(2));

    let form = getElement("#checkout-cart");
    const checkout = form.querySelector("#checkout");

    form.requestSubmit(checkout);

}

document.addEventListener("DOMContentLoaded", () => {
    sessionStorage.removeItem("cart");
    sessionStorage.removeItem("totalPrice");
    getElement("#checkout").addEventListener("click", checkoutOrder);
});