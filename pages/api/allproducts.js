// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "node:fs";

export default async function handler(req, res) {
  const dist = await fs.promises.readdir("data");
  let allproducts = await fs.promises.readFile(`data/${dist[0]}`, "utf-8");
  allproducts = allproducts.split(`\r\n`);
  allproducts.pop();
  res.status(200).json(allproducts);
}
