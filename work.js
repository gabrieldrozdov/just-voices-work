// Work data
const workData = {
	"budweiser-lizards": {
		"url": "https://vimeo.com/312797893",
		"embed": `<div style="padding:75% 0 0 0;position:static;"><iframe src="https://player.vimeo.com/video/312797893?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Budweiser | Those Frogs Are Gonna Pay"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
	},
	"budweiser-superbowl-spot": {
		"url": "https://www.youtube.com/watch?v=yZ4NAgPG61I&pp=ygURYnVkd2VpemVyIGxpemFyZHM%3D",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/yZ4NAgPG61I?si=mSoQ-hoRnw53mKvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"cox-communications": {
		"url": "https://www.ispot.tv/ad/bH_t/cox-connect2compete-bring-homework-home",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/bH_t" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"country-crock": {
		"url": "https://youtu.be/W2EOcLoBqRc",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/W2EOcLoBqRc?si=LJowgslIxDzHjZa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"progressive-tv-experts": {
		"url": "https://www.ispot.tv/ad/wFlA/progressive-experts",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/wFlA" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"progressive-tv-bundles": {
		"url": "https://www.youtube.com/watch?v=6ZFCjIlknFY",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/6ZFCjIlknFY?si=3-kpejuAulvxKtBd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"progressive-tv-cant-sleep": {
		"url": "https://www.ispot.tv/ad/5kIm/progressive-cant-sleep",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/5kIm" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	// "progressive-tv-progressive-park": {
	// 	"url": "https://youtu.be/iRyhqj0tO_8",
	// 	"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/iRyhqj0tO_8?si=W3FpKo42lot5IToG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	// },
	// "progressive-a-pet-too-far": {
	// 	"url": "https://www.youtube.com/watch?v=5ZKBTEDills&pp=ygUncHJvZ3Jlc3NpdmUgdHYgY29tbWVyY2lhbCBhIHBldCB0b28gZmFy",
	// 	"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/5ZKBTEDills?si=zJsxI97fAENu5Gqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	// },
	"progressive-the-upper-hands": {
		"url": "https://www.ispot.tv/ad/nmSa/progressive-home-quote-explorer-the-upper-hands",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/nmSa" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"coors-pure": {
		"url": "https://www.youtube.com/watch?v=FImVnvHU8VE",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/FImVnvHU8VE?si=bKUM2Lz7TF5jGyhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"toyota-camry": {
		"url": "https://www.ispot.tv/ad/q7tL/2021-toyota-camry-alibi-t2",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/q7tL" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"toyota-rav4-book-club": {
		"url": "https://youtu.be/o6p1AjR7tw0",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/o6p1AjR7tw0?si=puB32Oq5K9kKbBDC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"toyota-corolla-third-wheel": {
		"url": "https://video.adsoftheworld.com/trvlzrlvq2qa73wef9r56kl1dtc9.mp4",
		"embed": `<iframe src="https://video.adsoftheworld.com/trvlzrlvq2qa73wef9r56kl1dtc9.mp4"></iframe>`
	},
	"jp-morgan-wealth-management": {
		"url": "https://www.ispot.tv/ad/Oetp/j-p-morgan-wealth-management-your-definition-song-by-aloe-blacc",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/Oetp" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"baskin-robbins-creature-creations": {
		"url": "https://www.youtube.com/watch?v=tJnyNT3BSJo",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/tJnyNT3BSJo?si=UF_e7nQWZDvcPsL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	// "baskin-robbins-cappuccino-blast": {
	// 	"url": "https://www.facebook.com/watch/?v=1033405330743856",
	// 	"embed": `<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FbaskinrobbinsUS%2Fvideos%2F1033405330743856%2F&show_text=false&width=380&t=0" width="380" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`
	// },
	// "baskin-robbins-iced-tea-freeze": {
	// 	"url": "https://www.facebook.com/watch/?v=357460599230173",
	// 	"embed": `<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FbaskinrobbinsUS%2Fvideos%2F357460599230173%2F&show_text=false&width=380&t=0" width="380" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`
	// },
	"bounty-quicker-picker-upper-pirate": {
		"url": "https://www.ispot.tv/ad/du9u/bounty-pirate",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/du9u" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"bounty-quicker-picker-upper-chopsticks": {
		"url": "https://www.ispot.tv/ad/np2G/bounty-chopsticks",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/np2G" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"vicks-zzzquil-pure-zzzs": {
		"url": "https://www.ispot.tv/ad/ZCUf/vicks-zzzquil-pure-zzzs-liquid-melatonin-sleep-aid-unique-botanical-blend",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/ZCUf" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"cover-girl-clean-collection": {
		"url": "https://www.youtube.com/watch?v=TiKQIBBya54",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/TiKQIBBya54?si=jnqvofC9AZg_xZvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"essentia-it-might-as-well-be-you": {
		"url": "https://www.ispot.tv/ad/IcZT/essentia-water-someone-is-going-to-featuring-patrick-mahomes-ii",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/IcZT" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"mgm-park-hotel-las-vegas": {
		"url": "https://www.youtube.com/watch?v=MgC99zIn3vk",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/MgC99zIn3vk?si=juzPmKW_MHC8VMvS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"deslym-the-joy-of-not-coughing": {
		"url": "https://www.ispot.tv/ad/w_nT/delsym-12-hour-cough-relief-this-is-charlie-not-coughing",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/w_nT" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"ihop-addams-family": {
		"url": "https://vimeo.com/417363862",
		"embed": `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/417363862?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Addams Family | IHOP"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
	},
	"carls-jr-pig": {
		"url": "https://www.ispot.tv/ad/IxQi/carls-jr-bacon-truffle-angus-burger-pig",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/IxQi" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"carls-jr-typo": {
		"url": "https://www.ispot.tv/ad/o2jE/carls-jr-guacamole-double-cheeseburger-typo",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/o2jE" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>
		`
	},
	"tv-publix-supermarket-the-flame": {
		"url": "https://www.youtube.com/watch?v=HrkSCyfvOMg",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/HrkSCyfvOMg?si=OtdKiWANirLh48VF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"ore-ida-sunrisa": {
		"url": "https://www.youtube.com/watch?v=CQAoc0HntTM",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/CQAoc0HntTM?si=8fwluufB0HyLrZeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"cvs-pharmacy-long-receipt-short-story": {
		"url": "https://www.youtube.com/watch?v=ndkuK1ooUj0",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/ndkuK1ooUj0?si=lPNz28MTaoGcmX5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"jw-marriot-jw-treatment": {
		"url": "https://www.youtube.com/watch?v=3Ot1MwiP9B8",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/3Ot1MwiP9B8?si=QYaGox2X9gxzS3EI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"blue-apron": {
		"url": "https://www.ispot.tv/ad/AQYd/blue-apron-a-better-food-system",
		"embed": `<div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;"><iframe src="https://www.ispot.tv/share/AQYd" style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>`
	},
	"disneys-little-einsteins": {
		"url": "https://www.youtube.com/watch?v=XPMzSYzKImM",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/XPMzSYzKImM?si=84cLmGx-TeN-64_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"progressive-radio-2024-dream-come-true-colonial": {
		"url": "https://www.youtube.com/watch?v=sN5RKniJxfI",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/sN5RKniJxfI?si=dZUIH2eMvyRy-yXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"progressive-radio-2024-dream-come-true-walk-up": {
		"url": "https://www.youtube.com/watch?v=ejZROy-gc7E",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/ejZROy-gc7E?si=IINB3glS2V6yjV6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"progressive-radio-2024-what-do-they-have-in-common-fireworks": {
		"url": "https://www.youtube.com/watch?v=Dt4YQk7dr0Q",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/Dt4YQk7dr0Q?si=TUZs9RtVZZEg6Y3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	// "progressive-radio-mercury-award-winner-2022-great-protection-bad-timing": {
	// 	"url": "https://www.radiomercuryawards.com/audio2022/13269.mp3",
	// 	"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/XPMzSYzKImM?si=84cLmGx-TeN-64_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	// },
	"xfinity-radio": {
		"url": "https://www.youtube.com/watch?v=JGJIGj9MIrg",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/JGJIGj9MIrg?si=GsHPSwfM34ROgra5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"documentary-what-she-said-the-art-of-pauline-kael": {
		"url": "https://www.youtube.com/watch?v=mZnZYGQbCmo",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/mZnZYGQbCmo?si=yccIvpOkz2HMfYuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"documentary-out-of-ireland-paul-wagner-films": {
		"url": "https://www.youtube.com/watch?v=pbujqRpZoec",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/pbujqRpZoec?si=0p-nja9HsA5YfTB7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	// "harry-grows-up-a-short-film-by-mark-nickelsburg": {
	// 	"url": "https://vimeopro.com/marknickelsburg/harry/video/47026125",
	// 	"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/XPMzSYzKImM?si=84cLmGx-TeN-64_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	// },
	"world-of-warcraft-cataclysm": {
		"url": "https://www.youtube.com/watch?v=MKoEwxd9YqA",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/MKoEwxd9YqA?si=Age9qiGNNUn8Ea4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	},
	"far-cry-4": {
		"url": "https://www.youtube.com/watch?v=7F4xH2hqbeM",
		"embed": `<iframe width="560" height="315" src="https://www.youtube.com/embed/7F4xH2hqbeM?si=O6izcugyuJwLkewv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
	}
}

// Update mouse position
let mousePos = [0.5, 0.5];
window.addEventListener('mousemove', (e) => {
	// mousePos = [e.clientX/window.innerWidth, e.clientY/window.innerHeight];
})

// Random clip paths for thumbnails
function initializeClipPaths() {
	for (let workItemThumbnail of document.querySelectorAll('.work-item-preview-thumbnail')) {
		workItemThumbnail.style.clipPath = `polygon(${Math.random()*10}% ${Math.random()*10}%, ${100-Math.random()*10}% ${Math.random()*10}%, ${100-Math.random()*10}% ${100-Math.random()*10}%, ${Math.random()*10}% ${100-Math.random()*10}%)`;
	}
}
initializeClipPaths();

// Random skews for titles
function initializeTitles() {
	for (let workItemPreviewTitleBackground of document.querySelectorAll('.work-item-preview-title-background')) {
		workItemPreviewTitleBackground.style.transform = `skewY(${Math.random()*3-1.5}deg) skewX(${Math.random()*8-4}deg)`;
	}
}
initializeTitles();

// Work item observer for transition in
const callback = new IntersectionObserver((entries, observer) => {
	
	// Loop the entries
	let delay = 0;
	entries.forEach(entry => {

		// Check if the element is intersecting with the viewport
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.dataset.active = 1;
			}, Math.random()*250)
			delay++;
			
			// Stop observing element
			callback.unobserve(entry.target);

		} else {
			// Unused
		}
	});
});

// Animate work title positions on hover
let titlePositions = [];
let thumbnailPositions = [];
function calcMousePos(e, elmnt) { // percentage mousepos inside of work item
	const rect = elmnt.getBoundingClientRect();
	const x = (e.clientX - rect.left) / rect.width;
	const y = (e.clientY - rect.top) / rect.height;
	mousePos = [x, y];
}
let workItemIndex = 0;
for (let workItem of document.querySelectorAll('.work-item')) {
	workItem.dataset.index = workItemIndex;
	titlePositions.push([0.5, 0.5]);
	thumbnailPositions.push([0.5, 0.5]);
	workItem.dataset.move = 0;
	workItem.addEventListener('mouseenter', (e) => {
		calcMousePos(e, workItem);
		workItem.dataset.move = 1;
	})
	workItem.addEventListener('mouseleave', (e) => {
		calcMousePos(e, workItem);
		workItem.dataset.move = 0;
	})
	workItem.addEventListener('mousemove', (e) => {
		calcMousePos(e, workItem);
	})
	setTimeout(() => {
		callback.observe(workItem);
	}, 100)
	workItemIndex++;
}
function animateWorkItems() {
	let i=0;
	for (let workItem of document.querySelectorAll('.work-item')) {
		let mouse = mousePos;
		if (parseInt(workItem.dataset.move) == 0) {
			mouse = [0.5, 0.5];
		}

		// Animate thumbnail
		const workItemPreviewThumbnail = workItem.querySelector('.work-item-preview-thumbnail');
		let thumbnailPos = thumbnailPositions[i];
		let thumbnailDelta = [thumbnailPos[0] - mouse[0], thumbnailPos[1] - mouse[1]];
		let thumbnailPosX = thumbnailPos[0] - thumbnailDelta[0]/40;
		let thumbnailPosY = thumbnailPos[1] - thumbnailDelta[1]/40;
		thumbnailPos = [
			thumbnailPosX < .501 && thumbnailPosX > .499 ? .5 : thumbnailPosX,
			thumbnailPosY < .501 && thumbnailPosY > .499 ? .5 : thumbnailPosY
		];
		workItemPreviewThumbnail.style.transform = `rotateY(${thumbnailPos[0]*20-10}deg) rotateX(${-(thumbnailPos[1]*20-10)}deg) translateX(${thumbnailPos[0]*40-20}%) translateY(${thumbnailPos[1]*1-.5}rem)`;
		thumbnailPositions[i] = thumbnailPos;

		// Animate title
		const workItemPreviewTitle = workItem.querySelector('.work-item-preview-title');
		let titlePos = titlePositions[i];
		let titleDelta = [titlePos[0] - mouse[0], titlePos[1] - mouse[1]];
		let titlePosX = titlePos[0] - thumbnailDelta[0]/40;
		let titlePosY = titlePos[1] - thumbnailDelta[1]/40;
		titlePos = [
			titlePosX < .501 && titlePosX > .499 ? .5 : titlePosX,
			titlePosY < .501 && titlePosY > .499 ? .5 : titlePosY
		];
		workItemPreviewTitle.style.transform = `rotateY(${titlePos[0]*10-5}deg) rotateX(${-(titlePos[1]*10-5)}deg) translateX(${titlePos[0]*10-5}%) translateY(${titlePos[1]*1-.5}rem)`;
		titlePositions[i] = titlePos;

		i++;
	}
	requestAnimationFrame(animateWorkItems);
}
animateWorkItems();

// Lightbox
let unloadLightbox;
for (let workItem of document.querySelectorAll('.work-item')) {
	workItem.addEventListener('click', () => {
		clearTimeout(unloadLightbox);
		openLightbox(workItem.dataset.key);
	})
}
function openLightbox(workItemKey) {
	const workItem = document.querySelector(`.work-item[data-key="${workItemKey}"]`);
	const lightbox = document.querySelector('.work-lightbox');
	lightbox.dataset.active = 1;
	lightbox.dataset.key = workItem.dataset.key;
	const lightboxMediaContent = document.querySelector('.work-lightbox-media-content');
	lightboxMediaContent.innerHTML = workData[workItemKey]['embed'];
	const lightboxTitle = document.querySelector('.work-lightbox-title');
	const workItemTitle = workItem.querySelector('.work-item-preview-title');
	lightboxTitle.innerText = workItemTitle.innerText;
	lightboxTitle.href = workData[workItemKey]['url'];
}
function lightboxClose() {
	const lightbox = document.querySelector('.work-lightbox');
	lightbox.dataset.active = 0;
	const lightboxMediaContent = document.querySelector('.work-lightbox-media-content');
	unloadLightbox = setTimeout(() => {
		lightboxMediaContent.innerHTML = '';
	}, 250)
}
function lightboxPrev() {
	const lightbox = document.querySelector('.work-lightbox');
	let key = lightbox.dataset.key;
	let index = Object.keys(workData).indexOf(key);
	index--;
	if (index < 0) {
		index = Object.keys(workData).length-1;
	}
	openLightbox(Object.keys(workData)[index]);
}
function lightboxNext() {
	const lightbox = document.querySelector('.work-lightbox');
	let key = lightbox.dataset.key;
	let index = Object.keys(workData).indexOf(key);
	index++;
	if (index >= Object.keys(workData).length) {
		index = 0;
	}
	openLightbox(Object.keys(workData)[index]);
}

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