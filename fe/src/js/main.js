import utils from './utils';
import home from './home';
//import Animations from './animations';
import NaifSlider from './components/naifSlider';
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

		this.initComponents();
		this.switchPage();
	}

	initComponents() {
		let naifSlider = new NaifSlider;
		naifSlider.init();
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
