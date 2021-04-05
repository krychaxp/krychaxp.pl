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

// const express = require("express");
// const app = express();
// const axios = require("axios");
// const pretty = require("pretty");
// const { ahref } = require("../../../assets/utils");

// const getUrl = (canPretty) => async (req, res) => {
//   try {
//     const url = req.url.replace(/\/(pretty\/)?/, "");
//     new URL(url);
//     const { data } = await axios.get(url);
//     if (typeof data === "object") {
//       return res.type("text").send(JSON.stringify(data, null, 2));
//     } else {
//       return res.type("text").send(canPretty ? pretty(data) : data);
//     }
//   } catch (e) {
//     return res
//       .type("text")
//       .send(e.response && e.response.data ? e.response.data : "Not Found");
//   }
// };

// app.route("/").get((req, res) => {
//   res.type("html").send(`<div style="font-family:Consolas">
//   It works like view-source (always return 200 status code)<br>
//     ${ahref("/api/url/http://google.com", "/api/url/{WEB_URL}")}
//     ${ahref("/api/url/pretty/http://google.com", "/api/url/pretty/{WEB_URL}")}
//     </div>`);
// });

// app.get(/pretty\/(.*)/, getUrl(true));

// app.get(/\/(.*)/, getUrl());

// module.exports = app;
