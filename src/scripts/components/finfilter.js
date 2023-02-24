import Base from "./_base";
export default class Finfilter extends Base {
  constructor(el) {
    super(el);
    this.log = "Start finoz/finfilter";
    this.input = this.$el.querySelector("input");
    this.reset = this.$el.querySelector('button[type="reset"]');
    this.styleId = "finfilter";
    this.refs = this.$options.targetref.split(",").map((ref) => "data-" + ref);
    this.init();
  }

  init() {
    this.setFilterStyleTag();
    this.searchListener();
  }

  searchListener() {
    let filterstyle = "";
    let style = document.getElementById(this.styleId);
    if (style) {
      this.input.addEventListener("input", (e) => {
        if (e.target.value.length < 1) {
          filterstyle = "";
        } else {
          let string = e.target.value.toLowerCase();
          filterstyle = this.$options.target;
          this.refs.forEach((ref) => {
            filterstyle += `:not([${ref}*="${string}"])`;
          });
          filterstyle += "{display:none;}";
        }
        console.log(filterstyle);
        style.innerHTML = filterstyle;
      });
    }
    this.toolbar.addEventListener("reset", (e) => {
      style.innerHTML = "";
    });
  }

  setFilterStyleTag() {
    const style = document.createElement("style");
    style.id = "finfilter";
    document.body.appendChild(style);
  }
}
