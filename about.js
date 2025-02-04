// Page transitions
function pageTransition(url) {
	const body = document.querySelector('body');
	body.dataset.transition = 1;
	setTimeout(() => {
		window.location.href = url;
	}, 500)
}
for (let navLink of document.querySelectorAll('.nav a')) {
	navLink.addEventListener('click', (e) => {
		e.preventDefault();
		pageTransition(navLink.href);
	})
}