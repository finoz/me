import "../scss/main.scss";
import "what-input";

class Setup {
  constructor() {
    this.log = "Start finoz/me";
  }

  listenForComponents() {
    let components = document.querySelectorAll("[data-component]");
    components.forEach(async (el) => {
      await import(`COMPONENTS/${el.dataset.component}`)
        .then((module) => {
          let componentClass = module.default;
          new componentClass(el);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  init() {
    console.log(this.log);
    this.listenForComponents();
  }
}

let setup = new Setup();
setup.init();