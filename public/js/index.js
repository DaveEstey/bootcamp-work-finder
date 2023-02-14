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



// Log in form handler
const login = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


    if (email && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/jobs');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', login);


