import utils from './utils';
import Animations from './animations';
import '../scss/main.scss';

class Setup {
	constructor(){
		this.log = 'Are you ready for this?';
	};
	init() {
		let header = document.getElementsByClassName('site-header')[0];
		utils.anchorHandler(header);

		window.addEventListener('scroll', ()=> {
			utils.scrollHandler(header);
		});

		utils.toggleMenu();
		utils.autocloseMenu();

		let animations = new Animations();
		animations.init();
	}
}
//export {Setup as default};

let setup = new Setup();
//setup.init();
