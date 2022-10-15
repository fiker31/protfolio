// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

export default function handler(req, res) {
  if (req.method == "POST") {
    const data = JSON.parse(req.body);
    if (
      /^[a-zA-Z]{0,}$/g.test(data.name) &&
      /^[a-zA-Z0-9]{3,}\@[a-z]{1,}\.[a-z]{2,}$/g.test(data.email) &&
      /^[a-zA-Z0-9@,'.\\;\"()]{2,}$/g.test(data.message)
    ) {
      if (!fs.existsSync("messages.json")) {
        fs.writeFileSync("messages.json", JSON.stringify([]));
      }
      let d = JSON.parse(fs.readFileSync("messages.json").toString());
      fs.writeFileSync("messages.json", JSON.stringify([...d, data]));
      res.status(200).json({ success: true, data: d });
    }
    //console.log(req);
    //fs.appendFileSync("messages", JSON.stringify(req.body));
    res.status(200).json({ success: false });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
