import Base from "./_base";
export default class FinozVariation extends Base {
  constructor(el) {
    super(el);
    this.finozArray = [];
    this.iArray = ["a"];
    this.oArray = [];
    this.log = "Start finoz/finozVariation";

    this.setArrays();
    document.addEventListener("finoz:change", (e) => {
      this.doIt();
    });
  }

  doIt() {
    const iRandom = Math.floor(Math.random() * this.iArray.length);
    const oRandom = Math.floor(Math.random() * this.oArray.length);
    this.finozArray[1] = this.iArray[iRandom];
    this.finozArray[3] = this.oArray[oRandom];
    let newString = this.finozArray.join("");
    this.$el.innerHTML = newString;
  }

  setArrays() {
    this.finozArray = this.$el.innerHTML.split("");
    this.iArray = [
      "🪕",
      "🖍️",
      "📍",
      "🔧",
      "⚡",
      "🍌",
      "🌶️",
      "🥕",
      "💈",
      "❗",
      "ℐ",
      "ℹ",
      "♩",
      "♼",
      "i",
      "1",
    ];
    this.oArray = [
      "📦",
      "🗿",
      "📀",
      "🪀",
      "⏲️",
      "🙃",
      "🦄",
      "🐽",
      "🏵️",
      "🌍",
      "🌞",
      "⭕",
      "o",
      "0",
    ];
  }
}
