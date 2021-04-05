import nc from "next-connect";
import { useIp } from "src/middlewares/useIp";

export default nc()
  .use(useIp)
  .get(async (req, res) => {
    res.redirect(`ip/${req.clientIp}`);
  });