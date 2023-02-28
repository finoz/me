const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");

const { Client, APIErrorCode } = require("@notionhq/client");

dotenv.config();
const server = express();
server.use(cors());
const notion = new Client({
  auth: process.env.NOTION_RCP_TOKEN,
});

server.get("/rcp/", async function (req, res) {
  const rcpDb = await notion.databases.query({
    database_id: process.env.NOTION_RCP_DATABASE_ID,
  });
  res.send(rcpDb);
});

server.get("/rcp/:id", async function (req, res) {
  const rcpHeadings = await notion.pages.retrieve({
    page_id: req.params.id,
  });
  const rcpContent = await notion.blocks.children.list({
    block_id: req.params.id,
    page_size: 100,
  });
  const rcpData = {
    properties: rcpHeadings,
    content: rcpContent,
  };
  res.send(rcpData);
});

server.listen(process.env.PORT);
