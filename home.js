// Update mouse position
const home = document.querySelector('.home');
let mousePos = [0.5, 0.5];
home.addEventListener('mousemove', (e) => {
	mousePos = [e.clientX/window.innerWidth, e.clientY/window.innerHeight];
})

// Logo mouse-responsive animation
let logoImagePos = [0.5, 0.5];
let logoJustVoicesPos = [0.5, 0.5];
let logoCastingPos = [0.5, 0.5];
let logoSloganPos = [0.5, 0.5];
function animateLogo() {

	// Logo image
	const logoImage = document.querySelector('.logo-image');
	let deltaLogoImage = [logoImagePos[0] - mousePos[0], logoImagePos[1] - mousePos[1]];
	logoImagePos = [logoImagePos[0] - deltaLogoImage[0]/20, logoImagePos[1] - deltaLogoImage[1]/20];
	logoImage.style.transform = `rotateY(${logoImagePos[0]*80-40}deg) rotateX(${-(logoImagePos[1]*20-10)}deg) translateX(${logoImagePos[0]*100-50}%) translateY(${logoImagePos[1]*1-.5}rem)`;

	// Logo "just voices"
	const logoJustVoices = document.querySelector('.logo-just-voices');
	let deltaLogoJustVoices = [logoJustVoicesPos[0] - mousePos[0], logoJustVoicesPos[1] - mousePos[1]];
	logoJustVoicesPos = [logoJustVoicesPos[0] - deltaLogoJustVoices[0]/40, logoJustVoicesPos[1] - deltaLogoJustVoices[1]/40];
	logoJustVoices.style.transform = `rotateY(${logoJustVoicesPos[0]*60-30}deg) rotateX(${-(logoJustVoicesPos[1]*20-10)}deg) translateX(${logoJustVoicesPos[0]*50-25}%) translateY(${logoJustVoicesPos[1]*1-.5}rem)`;

	// Logo "casting"
	const logoCasting = document.querySelector('.logo-casting');
	let deltaLogoCasting = [logoCastingPos[0] - mousePos[0], logoCastingPos[1] - mousePos[1]];
	logoCastingPos = [logoCastingPos[0] - deltaLogoCasting[0]/60, logoCastingPos[1] - deltaLogoCasting[1]/60];
	logoCasting.style.transform = `rotateY(${logoCastingPos[0]*40-20}deg) rotateX(${-(logoCastingPos[1]*20-10)}deg) translateX(${logoCastingPos[0]*40-20}%) translateY(${logoCastingPos[1]*1-.5}rem)`;

	// Logo slogan
	const logoSlogan = document.querySelector('.logo-slogan');
	let deltaLogoSlogan = [logoSloganPos[0] - mousePos[0], logoSloganPos[1] - mousePos[1]];
	logoSloganPos = [logoSloganPos[0] - deltaLogoSlogan[0]/80, logoSloganPos[1] - deltaLogoSlogan[1]/80];
	logoSlogan.style.transform = `rotateY(${logoSloganPos[0]*20-10}deg) rotateX(${-(logoSloganPos[1]*20-10)}deg) translateX(${logoSloganPos[0]*30-15}%) translateY(${logoSloganPos[1]*1-.5}rem)`;

	requestAnimationFrame(animateLogo);
}
animateLogo();

function animateLogoJustVoices() {
	const logoJustVoicesText = document.querySelector('.logo-just-voices-text');
	let temp = '';
	let i = 0;
	for (let letter of logoJustVoicesText.innerText) {
		if (letter == " ") {
			letter = "&nbsp;";
		}
		temp += `<span style="animation: logo-just-voices-text-in 1s ${i*.05}s forwards cubic-bezier(0.22, 1, 0.36, 1);">${letter}</span>`;
		i++;
	}
	logoJustVoicesText.innerHTML = temp;
	logoJustVoicesText.style.opacity = 1;
}
// setTimeout(animateLogoJustVoices, 800);


// Animate home link left
const homeLinkLeft = document.querySelector('.home-link-left');
let homeLinkLeftActive = false;
homeLinkLeft.addEventListener('mouseenter', (e) => {
	homeLinkLeftActive = true;
})
homeLinkLeft.addEventListener('mouseleave', (e) => {
	homeLinkLeftActive = false;
})

let homeLinkLeftPos = [0.5, 0.5];
function animateMainLinkWork() {
	if (window.innerWidth > 1000) {
		const homeLinkText = homeLinkLeft.querySelector('.home-link-text');
		let delta = [homeLinkLeftPos[0] - mousePos[0], homeLinkLeftPos[1] - mousePos[1]];
		if (!homeLinkLeftActive) {
			delta = [homeLinkLeftPos[0] - 0.5, homeLinkLeftPos[1] - 0.5];
		}
		homeLinkLeftPos = [homeLinkLeftPos[0] - delta[0]/20, homeLinkLeftPos[1] - delta[1]/20];
		homeLinkText.style.transform = `translateY(${homeLinkLeftPos[1]*100-50}vh) skewY(${homeLinkLeftPos[1]*30-15}deg)`;
	}
	requestAnimationFrame(animateMainLinkWork);
}
animateMainLinkWork();

// Animate home link right
const homeLinkRight = document.querySelector('.home-link-right');
let homeLinkRightActive = false;
homeLinkRight.addEventListener('mouseenter', (e) => {
	homeLinkRightActive = true;
})
homeLinkRight.addEventListener('mouseleave', (e) => {
	homeLinkRightActive = false;
})

let homeLinkRightPos = [0.5, 0.5];
function animateMainLinkAbout() {
	if (window.innerWidth > 1000) {
		const homeLinkText = homeLinkRight.querySelector('.home-link-text');
		let delta = [homeLinkRightPos[0] - mousePos[0], homeLinkRightPos[1] - mousePos[1]];
		if (!homeLinkRightActive) {
			delta = [homeLinkRightPos[0] - 0.5, homeLinkRightPos[1] - 0.5];
		}
		homeLinkRightPos = [homeLinkRightPos[0] - delta[0]/20, homeLinkRightPos[1] - delta[1]/20];
		homeLinkText.style.transform = `translateY(${homeLinkRightPos[1]*100-50}vh) skewY(${homeLinkRightPos[1]*-30+15}deg)`;
	}
	requestAnimationFrame(animateMainLinkAbout);
}
animateMainLinkAbout();

// Page transitions
function homeTransition(url) {
	const body = document.querySelector('body');
	body.dataset.transition = 1;
	setTimeout(() => {
		window.location.href = url;
	}, 500)
}
function initializeHomeTransitions() {
	const linkLeft = document.querySelector('.home-link-left');
	const linkRight = document.querySelector('.home-link-right');
	const marquee = document.querySelector('.home-marquee');
	linkLeft.addEventListener('click', (e) => {
		e.preventDefault();
		homeTransition(linkLeft.href);
	})
	linkRight.addEventListener('click', (e) => {
		e.preventDefault();
		homeTransition(linkRight.href);
	})
	marquee.addEventListener('click', (e) => {
		e.preventDefault();
		homeTransition(marquee.href);
	})
}
initializeHomeTransitions();