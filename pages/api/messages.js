// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  if (fs.existsSync("messages.json")) {
    res
      .status(200)
      .json({ data: JSON.parse(fs.readFileSync("messages.json").toString()) });
  }

  res.status(404).json();
}
