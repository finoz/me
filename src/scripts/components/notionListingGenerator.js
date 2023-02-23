import K from "../constants/keys";
import { Client } from "@notionhq/client";
import ListingGenerator from "./listingGenerator";
export default class NotionListingGenerator extends ListingGenerator {
  constructor(el) {
    super(el);
    this.log = "Start finoz/notionListingGenerator";
  }

  init() {
    console.log(K);
    this.setNotionAndData();
  }

  async setNotionAndData() {
    this.notion = await this.getNotion();
    this.data = await this.getData();
  }

  async getNotion() {
    return new Client({
      auth: K.NOTION.RCP.TOKEN,
    });
  }

  async getData() {
    const response = await this.notion.databases.query({
      database_id: K.NOTION.RCP.DATABASE_ID,
    });
    return response.results;
  }
}
