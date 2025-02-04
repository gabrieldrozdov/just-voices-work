let waves = [];
let maxWaveSize;
let originX, originY;
let soundActive = false;
let sampler;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	// canvas.parent('logo');
	noFill();

	// Set the initial origin point (center of the canvas)
	originX = width / 2;
	originY = height / 2;

	maxWaveSize = dist(0, 0, width, height); // Maximum possible radius
}

function draw() {
	background(10);
	fixPosition();

	// Add new waves over time
	if (frameCount % 30 === 0) {
		waves.push(new Wave());
	}

	// Update and draw each wave
	for (let i = waves.length - 1; i >= 0; i--) {
		waves[i].update();
		waves[i].display();

		// Remove waves that are no longer visible
		if (waves[i].radius > maxWaveSize) {
			waves.splice(i, 1);
		}
	}
}

// Only do mouse interaction when mouse on screen and moving
// var mouseVisible = false;
var mouseMoving = false;
var mouseMoveTimeout;
document.querySelector('.home').addEventListener('mousemove', () => {
	clearTimeout(mouseMoveTimeout);
	mouseMoving = true;
	mouseMoveTimeout = setTimeout(() => {mouseMoving = false}, 100);
})
// document.querySelector('.home').addEventListener('mouseenter', () => {
// 	mouseVisible = true;
// })
// document.querySelector('.home').addEventListener('mouseleave', () => {
// 	mouseVisible = false;
// })

// Color palette
const waveColors = [[0, 38, 69], [231, 44, 86], [163, 198, 177]];

// Wave class
class Wave {
	constructor() {
		this.radius = windowWidth/100;
		this.offset = random(1000); // For different wiggly patterns
		this.strength = random(10, 30);
		this.speed = 4; // Speed of expansion
		this.strokeWeight = 4 + Math.random(); // Random stroke weight
		this.red = 255;
		this.green = 255;
		this.blue = 255;
		this.alpha = 20 + random(0, 20);
		this.alphaTarget = this.alpha;
		this.pulse = false;
		this.rippleStrength = 0; // Ripple strength (interaction)
	}

	update() {
		this.radius += this.speed; // Expand the wave

		// Check if mouse is near the wave edge
		let d = dist(mouseX, mouseY, originX, originY);
		if (abs(d - this.radius) < 15 && this.rippleStrength < 5 && mouseMoving || this.pulse) {
			this.pulse = false;
			this.rippleStrength = 20; // Trigger ripple effect
			this.red = 193 + random(-20, 20);
			this.green = 45 + random(-20, 20);
			this.blue = 96 + random(-20, 20);
			this.alpha = 255;

			// Play a sound
			if (soundActive) {
				const notes = ['C', 'D', 'E', "F", 'G', 'A', 'B'];
				const note = `${notes[Math.floor(Math.random()*notes.length)]}${Math.round(Math.random()+1)}`;
				sampler.triggerAttackRelease(note, "8n");
			}
		} else {
			this.rippleStrength = max(0, this.rippleStrength - 1); // Gradually decay ripple

			// Gradually decay color
			this.red = min(255, this.red + 10);
			this.green = min(200, this.green + 10);
			this.blue = min(200, this.blue + 10);
			this.alpha = max(this.alphaTarget, this.alpha - 10);
		}
	}

	display() {
		stroke(this.red, this.green, this.blue, this.alpha);
		strokeWeight(this.strokeWeight);
		beginShape();

		// Create a circular shape with a wiggly edge
		for (let angle = 0; angle < TWO_PI; angle += radians(5)) {
			let xoff = cos(angle) + this.offset;
			let yoff = sin(angle) + this.offset;

			// Add ripple effect to the wiggle
			let wiggle = map(noise(xoff, yoff, this.radius * 0.01), 0, 1, -this.strength, this.strength);
			let ripple = this.rippleStrength * sin(frameCount * 0.2 + angle * 5); // Ripple effect
			let r = this.radius + wiggle + ripple;

			let x = originX + r * cos(angle); // Use originX
			let y = originY + r * sin(angle); // Use originY
			vertex(x, y);
		}

		endShape(CLOSE);
	}
}

function fixPosition() {
	const logoImage = document.querySelector('.logo-image');
	const rect = logoImage.getBoundingClientRect();
	originX = rect.left + rect.width / 2;
	originY = rect.top + rect.height / 2;
}

// Fix size and position on window resize
function windowResized() {
	fixPosition();
	resizeCanvas(windowWidth, windowHeight);
}

// When clicking on logo photo
function pulseAll() {
	if (!soundActive) {
		// Create sampler
		sampler = new Tone.Sampler({
			urls: {
			  'C2': 'c2.mp3'
			},
			release: 1,
			volume: -10,
			baseUrl: "assets/sounds/"
		}).toDestination();

		// Play sounds
		setTimeout(() => {
			soundActive = true;
			let delay = 0;
			for (let i=waves.length-1; i>=0; i--) {
				let wave = waves[i];
				setTimeout(() => {
					wave.pulse = true;
				}, delay*50)
				delay++;
			}
		}, 100)

		// Notice
		const homeNotice = document.querySelector('.home-notice');
		homeNotice.dataset.active = 1;
		setTimeout(() => {
			homeNotice.dataset.active = 0;
		}, 1500)
	} else {
		let delay = 0;
		for (let i=waves.length-1; i>=0; i--) {
			let wave = waves[i];
			setTimeout(() => {
				wave.pulse = true;
			}, delay*50)
			delay++;
		}
	}
}