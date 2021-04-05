import nc from "next-connect";
import axios from "axios";
import pretty from "pretty";

export default nc().get(async (req, res) => {
  try {
    const [canBePreety] = req.query.url;
    const isPretty = canBePreety == "pretty";
    const websiteUrl = req.url.replace(/\/api\/url\/(pretty\/)?/, "http://");
    new URL(websiteUrl);
    const { data } = await axios.get(websiteUrl);
    if (typeof data === "object") {
      return res.json(JSON.stringify(data, null, 2));
    }
    res.setHeader("Content-type", "text/plain;charset=utf-8");
    return res.send(isPretty ? pretty(data) : data);
  } catch (e) {
    return res.status(400).send(e?.response?.data || "Not Found");
  }
});
