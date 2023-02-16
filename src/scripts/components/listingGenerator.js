import Base from "./_base";
class ListingGenerator extends Base {
  constructor(el) {
    super(el);
    this.log = "Start finoz/listingGenerator";
    this.init();

    this.data = {};
  }

  async init() {
    this.data = await this.getData();
    this.setData();
    this.render();
  }

  async getData() {
    return await fetch(this.$options.api).then((response) => response.json());
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
      console.log(mkp);
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
        markup += ` data-${field}="${data[field]}"`;
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

export default ListingGenerator;
