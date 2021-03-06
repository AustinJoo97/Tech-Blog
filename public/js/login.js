document.addEventListener("DOMContentLoaded", function(){
  const loginFormHandler = async (event) => {
      event.preventDefault();

      const username = document.querySelector('#username-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();

      if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/');
        } else {
          document.location.replace('/login');
        }
      }
  };
    
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } 
    }
  };
    
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
});