import utils from './utils';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

class animations {

	constructor(){
		this.log = 'animations.js ON';
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.defaults({
			markers: {startColor: "green", endColor: "red", fontSize: "18px", indent: 10}
		});
	};

	init() {
		/* https://greensock.com/docs/v3/Plugins/ScrollTrigger */
		this.cardMove();
		this.imgMove();
		this.bulletMove();
		this.formMove();
		/* if(utils.getWindowSize().vw >= iltema_data.breakpoints.md){

		} */
	}

	imgMove(){
		let imgs = [...document.getElementsByClassName('media-text-figure')];
		if(!imgs){
			return;
		}
		imgs.forEach((img, i)=>{
			gsap.timeline({
				scrollTrigger: {
					trigger: img,
					start: "10% bottom",
					end: "top top",
					scrub: true,
					pin: false,
					markers: false
				}
			}).from(img, {y: '100px', ease:"power2.inOut"});
		});
	}

	cardMove(){
		gsap.timeline({
			scrollTrigger: {
				trigger: '.card-list',
				start: "10% bottom",
				end: "center center",
				scrub: true,
				pin: false,
				markers: false
			}
		}).staggerFrom('.card-list .card', 5, {x: '20%', alpha: 0, ease:"power2.inOut", stagger: 5});
	}

	bulletMove(){
		let blocks = ['.compare-block-positive','.compare-block-negative'];
		blocks.forEach((block,i)=>{
			gsap.timeline({
				scrollTrigger: {
					trigger: block,
					start: "10% 70%",
					end: "center center",
					scrub: true,
					pin: false,
					markers: false
				}
			}).staggerFrom(block+' li', 5, {x: '5%', alpha: 0, ease:"power2.inOut", stagger: 1});
		})
	}

	formMove(){
		gsap.timeline({
			scrollTrigger: {
				trigger: '.lead-form',
				start: "10% bottom",
				end: "bottom bottom",
				scrub: true,
				pin: false,
				markers: false
			}
		}).from('.lead-form', {y: '50px', alpha: 0, ease:"power2.inOut"});
	}
};

export {animations as default};
