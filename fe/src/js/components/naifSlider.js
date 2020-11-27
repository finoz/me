class NaifSlider {

	constructor(){
		this.log = 'naifSlider.js ON';
	};

	init() {
		let sliders = document.querySelectorAll('[data-component="naifSlider"]');
		sliders.forEach((slider) => {
			console.log("fai lo slider come per yoonik");
		})
	}
};

export {NaifSlider as default};