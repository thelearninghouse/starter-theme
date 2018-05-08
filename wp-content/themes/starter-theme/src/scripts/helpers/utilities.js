document.addEventListener("DOMContentLoaded", function() {
	const FormSelects = document.querySelectorAll('.requestinfo select')
	for (var select of FormSelects) {
		select.classList.remove('error')
	}
});
