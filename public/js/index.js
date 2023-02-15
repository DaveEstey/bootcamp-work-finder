const { response } = require("express");

const signUp = async (event) => {
    event.preventDefault();

    const fName = document.querySelector('#first-name').value.trim();
    const lName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password && lName && fName) {
        const newUser = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ email, password, fName, lName }),
            headers: { 'Content-Type': 'application/json' },

        });
        console.log("new user added" + newUser)
        if (newUser.ok) {
            document.location.replace('/');

        } else {
            alert('Sign up failed, please try again!')
        }
    }
};

// document.querySelector('#sign-up').addEventListener('click', signUp);





