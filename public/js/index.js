const login = async (event) => {
    event.preventDefault();

    const fName = document.getElementsByName('first-name').value.trim();
    const lName = document.getElementsByName('last-name').value.trim();
    const email = document.getElementsByName('email').value.trim();
    const password = document.getElementsByName('password').value.trim();

    if (email && password && lName && fName) {
        const newUser = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (newUser.ok) {
            document.location.replace('/');
        } else {
            alert('Log in failed, please try again')
        }
    }
};


