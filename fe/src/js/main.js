import utils from './utils';
import home from './home';
//import Animations from './animations';
import '../scss/main.scss';

class Setup {
	constructor(){
		this.log = 'Are you ready for this?';
	};
	init() {
		let header = document.getElementsByClassName('header')[0];
		utils.anchorHandler(header);

		window.addEventListener('scroll', ()=> {
			utils.scrollHandler(header);
		});

		utils.toggleMenu();
		utils.autocloseMenu();

		this.switchPage();
	}
	
	switchPage() {
		switch (document.body.dataset.page) {
			case 'home':
				home.init();
				break;
			default:
				//
		}
	}
}
let setup = new Setup();
setup.init();
