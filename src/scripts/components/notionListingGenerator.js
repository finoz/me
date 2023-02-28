import ListingGenerator from "./listingGenerator";
export default class NotionListingGenerator extends ListingGenerator {
  constructor(el) {
    super(el);
    this.log = "Start finoz/notionListingGenerator";
  }

  init() {
    this.setData();
  }

  async setData() {
    let data = await this.getData();
    console.log(data);
  }
  async getData() {
    let baseurl = "http://localhost:3000";
    return await fetch(`${baseurl}/rcp/`).then((res) => res.json());
  }
}
