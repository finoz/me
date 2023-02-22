import Base from "./_base";
export default class EventTrigger extends Base {
  constructor(el) {
    super(el);
    this.log = "Start finoz/eventTrigger";
    this.init();
  }

  init() {
    this.$el.addEventListener("click", (e) => {
      e.preventDefault();
      this.callTheEvent();
    });
  }
  callTheEvent() {
    document.dispatchEvent(
      /*
       * l'oggetto nell'evento deve essere passato come parametro della chiave detail, che è una chiave default
       */
      new CustomEvent(this.$options.event, { detail: {} })
    );
  }
}
