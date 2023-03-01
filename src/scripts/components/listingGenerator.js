import Base from "./_base";
export default class ListingGenerator extends Base {
  constructor(el) {
    super(el);
    this.log = "Start finoz/listingGenerator";
    this.data = {};
    this.api = this.setApi();
    this.init();
  }

  setApi() {
    return this.$options.api;
  }

  async init() {
    this.data = await this.getData();
    this.setData();
    this.render();
  }

  async getData() {
    return await fetch(this.api).then((response) => response.json());
  }

  setData() {
    if (
      this.$options.number &&
      this.$options.number > 0 &&
      this.$options.number < this.data.length
    ) {
      this.data = this.data.slice(0, this.$options.number);
    }
  }

  render() {
    this.data.forEach((item) => {
      let mkp = this.buildItem(item);
      this.$el.insertAdjacentHTML("beforeend", mkp);
    });
  }

  buildItem(data) {
    let markup = "";
    let itemclass = this.$options.itemclass ? this.$options.itemclass : "item";
    let fields = this.$options.itemfields
      ? this.$options.itemfields.split(",")
      : [];
    markup += `<article`;
    fields.forEach((field) => {
      if (data[field]) {
        let str = data[field];
        str = str.toString().toLowerCase();
        markup += ` data-${field}="${str}"`;
      }
    });
    markup += ` class="${itemclass}">`;
    fields.forEach((field) => {
      if (data[field]) {
        markup += `<div class="${itemclass}-${field}">${data[field]}</div>`;
      }
    });
    markup += `</article>`;
    return markup;
  }
}
