const form = document.getElementById('contactForm');

const messageDiv = document.getElementById('message');


form.addEventListener('submit', (e) => {

  e.preventDefault();

  const name = document.getElementById('name').value;

  const email = document.getElementById('email').value;

  const message = document.getElementById('message').value;


  if (name && email && message) {

    messageDiv.textContent = 'Thank you for your message!:)';

    form.reset();

  } else {

    messageDiv.textContent = 'Please make sure all fields are filled out.';
    

  }
 
});
