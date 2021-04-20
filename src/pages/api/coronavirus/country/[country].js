import nc from "next-connect";
import axios from "axios";
export default nc().get(async (req, res) => {
  const { country } = req.query;
  const { data } = await axios.get(
    `https://api.covid19api.com/total/dayone/country/${country}`
  );
  res.json(data);
});
