let globalIsSubmitted = false

function signup(isSubmitted = false) {

	let fullName = document.getElementById('signup-full-name').value
	let email = document.getElementById('signup-email').value
	let passwordval = document.getElementById('signup-password').value
	let conpssval = document.getElementById('signup-confirm-password').value
	let error = false

	


	if (isSubmitted) {
		globalIsSubmitted = true
		document.getElementById('final-invalid-feedback').style.display = 'block'
		document.getElementById('final-valid-feedback').style.display = 'none'
	}
	if (globalIsSubmitted) {
		if (fullName && email && (passwordval === conpssval)) {
			error = false
		} else {
			error = true
		}
		if (!error && isSubmitted) {

			document.getElementById('final-valid-feedback').style.display = 'block'
			document.getElementById('final-invalid-feedback').style.display = 'none'
			document.getElementById('signup-form').reset()

		}
	}

	localStorage.setItem('fullname', fullName)
	localStorage.setItem('setemail', email)
	localStorage.setItem('setpassword', passwordval)


}







const signuppage = () => {
	document.getElementById('signup-form').style.display = 'block'
	document.getElementById('profile-form').style.display = 'none'
}
const profilepage = () => {

	document.getElementById('signup-form').style.display = 'none'
	document.getElementById('profile-form').style.display = 'profile'
}
