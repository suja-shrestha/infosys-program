const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.addEventListener('DOMContentLoaded', (event) => {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});

	const signUpForm = document.querySelector('.sign-up-container form');
	const signInForm = document.querySelector('.sign-in-container form');

	signUpForm.addEventListener('submit', function(event) {
		event.preventDefault();
		if (validateSignUpForm()) {
			window.location.href = 'index.html'; 
		} else {
			alert('Please fill in all the details.');
		}
	});

	signInForm.addEventListener('submit', function(event) {
		event.preventDefault();
		if (validateSignInForm()) {
			window.location.href = 'index.html'; 
		} else {
			alert('Please fill in all the details.');
		}
	});

	function validateSignUpForm() {
		const name = signUpForm.querySelector('input[type="text"]').value.trim();
		const email = signUpForm.querySelector('input[type="email"]').value.trim();
		const password = signUpForm.querySelector('input[type="password"]').value.trim();

		return name !== '' && email !== '' && password !== '';
	}

	function validateSignInForm() {
		const email = signInForm.querySelector('input[type="email"]').value.trim();
		const password = signInForm.querySelector('input[type="password"]').value.trim();

		return email !== '' && password !== '';
	}
});
