"use strict";

const getElement = (selector) => document.querySelector(selector);

const fieldsets = document.querySelectorAll(".product-details");
fieldsets.forEach(fieldset => fieldset.style.display = "none");

let contact = getElement("#contact_name");
let email = getElement("#email"); 
let phone = getElement("#phone");

const getDetails = () => {
    const product = getElement("#product").value;
    
    switch (product) {
        case "choice":
            getElement("#quilt-details").style.display = "none";
            getElement("#other-details").style.display = "none";
            break;
        case "quilt":
            getElement("#quilt-details").style.display = "block";
            getElement("#other-details").style.display = "none";
            break;
        case "potholder":
            getElement("#other-details").style.display = "block";
            getElement("#quilt-details").style.display = "none";
            break;
        case "bowlholder":
            getElement("#other-details").style.display = "block";
            getElement("#quilt-details").style.display = "none";
            break;
        case "babyburpcloth":
            getElement("#other-details").style.display = "block";
            getElement("#quilt-details").style.display = "none";
        break;
        case "placemat":
            getElement("#other-details").style.display = "block";
            getElement("#quilt-details").style.display = "none";
        break;
        case "table-runner":
            getElement("#other-details").style.display = "block";
            getElement("#quilt-details").style.display = "none";
        break;
    }
}

const sendRequest = () => {
    if (validateInputs()) {
        getElement("#contact-info").style.display = "none";
        getElement("#other-details").style.display = "none";
        getElement("#quilt-details").style.display = "none";
        getElement("#open").style.display = "none";
        getElement("#request").style.display = "none";
        getElement("#successMessage").textContent = ("Thanks for your interest in a custom order. Either Katy or Kara will contact you shortly with more detail and an initial quote for your requested items.");
    }
}

const validateInputs = () => {
    let emailValue = email.value;
    console.log(emailValue);
    let contactValue = contact.value;
    console.log(contactValue);
    let phoneValue = phone.value;
    console.log(phoneValue);
    let isValid = true;

    try{
        emailValue = checkIfFilled(emailValue, "email");
        emailValue = isValidEmail(emailValue);
        email.nextElementSibling.textContent = "";
    }
    catch(error){
        email.nextElementSibling.textContent = error.message;
        isValid = false;
    }
    try{
        contactValue = checkIfFilled(contactValue, "name");
        contact.nextElementSibling.textContent = "";
        }
    catch(error){
        contact.nextElementSibling.textContent = error.message;
        isValid = false;
    }
    try{
        phoneValue = checkIfFilled(phoneValue, "phone");
        phone.nextElementSibling.textContent = "";
    }
    catch(error){
        phone.nextElementSibling.textContent = error.message;
        isValid = false;
    }

    return isValid;
}

const checkIfFilled = (text, name) => {
    if(!text){
         switch(name){
             case "email":
                 throw new Error ("Please enter your email.");
             case "name":
                 throw new Error ("Please enter your name.");
             case "phone":
                 throw new Error ("Please enter a phone number.");
         }
    }
     return text;
 };

const isValidEmail = (email) => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    if (!emailPattern.test(email)){
        throw new Error ("Invalid Email");
    }
    return email;
}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#product").addEventListener("change", getDetails);
    getElement("#submit_request").addEventListener("click", sendRequest);
});
