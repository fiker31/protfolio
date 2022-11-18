// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");

export default function handler(req, res) {
  if (req.method == "POST") {
    if (
      /^[a-zA-Z]{0,}$/g.test(req.body.name) &&
      /^[a-zA-Z0-9]{3,}\@[a-z]{1,}\.[a-z]{2,}$/g.test(req.body.email) &&
      /^[a-zA-Z0-9@,\'.\\;\"() ]{2,}$/g.test(req.body.message)
    ) {
      if (!fs.existsSync("messages.json")) {
        fs.writeFileSync("messages.json", JSON.stringify([]));
      }
      let d = JSON.parse(fs.readFileSync("messages.json").toString());
      fs.writeFileSync("messages.json", JSON.stringify([...d, req.body]));

      res.status(200).json({ success: true, data: req.body });
    } else
      res.status(200).json({ success: false, message: "Invalid input data" });
  } else res.status(405).json({ error: "Method Not Allowed" });
}
