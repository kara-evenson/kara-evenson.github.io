"use strict";

const getElement = (selector) => document.querySelector(selector);

let contact = getElement("#contact_name");
let email = getElement("#email"); 
let phone = getElement("#phone");

const sendMessage = () => {
        if (validateInputs()) {
            getElement("#successMessage").textContent = ("Message Sent! Someone will be in contact with you ASAP.");
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
                 throw new Error ("Please enter a phone number");
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
   getElement("#submit_button").addEventListener("click", sendMessage); 
});
