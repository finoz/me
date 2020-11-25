const home = {
	altLetters:{
		'i': ["1","|","!","🧨"],
		'o': ["ø","0","•","☀️"]
	},
	init: function() {
		this.splitLetters()
	},
	splitLetters: function() {
		let fnz = document.querySelector('.page-title');
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
		this.handleLetterTimer('i');
		setTimeout(() => {
			this.handleLetterTimer('o')
		},1000);
	},
	handleLetterTimer: function(letter) {
		let interval = setInterval(() => {
			this.switchLetter(letter)
		},2000);
	},
	switchLetter: function(letter) {
		let letterArray = this.altLetters[letter];
		let rand = Math.floor(Math.random(4)*100);
		let index = rand % letterArray.length;
		let html = document.querySelector(`[data-letter="${letter}"]`);
		html.innerText = letterArray[index];

	}
};

export {home as default};
