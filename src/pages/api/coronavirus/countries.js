import nc from "next-connect";
import axios from "axios";
export default nc().get(async (req, res) => {
  const { data } = await axios.get("https://api.covid19api.com/countries");
  res.json(data);
});
