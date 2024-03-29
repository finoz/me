import utils from 'design/src/js/utils';
import home from './home';
import '../scss/main.scss';
class Setup {
	constructor(){
		this.log = 'Are you ready for this?';
	};
	init() {
		utils.anchorHandler('.header');

		window.addEventListener('scroll', ()=> {
			utils.scrollHandler(document.querySelector('.header'));
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
