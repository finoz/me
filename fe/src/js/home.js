import utils from "./utils";

const home = {
	/* global vars */
	altLetters:{
		'i': ["1","|","ℹ","☇","♜","⚚","!","🧨","🐛","⚡","🍄","🌡️","🪄","🪕"],
		'o': ["ø","⚈","0","☉","☮","⚛","☸","☹","•","☀️","🙊","🐷","📦","🏈"]
	},
	fnzGoing: false,
	fnzCounter: 0,

	/* functions */
	init: function() {
		this.finozListener();
		this.handleBackground();
	},
	finozListener: function() {
		let fnz = document.querySelector('.page-title');
		this.splitLetters(fnz);
		fnz.addEventListener('click',() => {
			this.switchLetter('i');
			this.switchLetter('o');
			this.fnzCounter ++;
			this.handleComment();
		});
	},
	splitLetters: function(fnz) {
		let newFnz = fnz.innerText
						.split("")
						.map((letter) => {
							if(letter === 'i' || letter === 'o'){
								letter = `<span data-letter="${letter}">${letter}</span>`;
							}
							return letter;
						})
						.join('');
		fnz.innerHTML = newFnz;
	},
	handleLetterTimer: function(letter) {
		let interval= setInterval(() => {
			this.switchLetter(letter);
		},500);
	},
	switchLetter: function(letter) {
		let letterArray = this.altLetters[letter];
		let rand = Math.floor(Math.random(4)*100);
		let index = rand % letterArray.length;
		let html = document.querySelector(`[data-letter="${letter}"]`);
		html.innerText = letterArray[index];
	},
	handleComment: function() {
		let dialog = document.querySelector('.page-subtitle');
		switch (this.fnzCounter) {
			case 10:
				dialog.innerText = '...ehm...';
				break;
			case 25:
				dialog.innerText = '...la smetti?';
				break;
			case 50:
				dialog.innerText = 'Davvero non hai di meglio da fare?';
				break;
			case 75:
				dialog.innerText = '...';
				break;
			default:
			//
		}
	},
	handleBackground: function() {
		if(utils.isMobileDevice()){
			return;
		}
		let hue = 0;
		let saturation = 100;
		let lightness = 50;
		let w = document.body.offsetWidth;
		let h = document.body.offsetHeight;
		let cleanedConsole = false;
		window.addEventListener('mousemove', (e) => {
			hue = Math.floor(e.x / w * 360);
			saturation = Math.abs(Math.floor(e.y / h * 100) - 100);
			if(e.altKey) {
				lightness = Math.abs(Math.floor(e.y / h * 100) - 100);
				if(!cleanedConsole) {
					console.clear();
					cleanedConsole = true;
				}
			}
			document.body.style.backgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`;
		});
		console.log('%c push [⌥ / alt] to change lightness','color:blue;background-color:#bada55');
	}
};

export {home as default};
