import nc from 'next-connect';
import axios from 'axios';
import { isV4Format } from 'ip';

export default nc().get(async (req, res) => {
  const { ip } = req.query;
  if (!isV4Format(ip)) {
    return res.status(400).send('Invalid IP');
  }
  try {
    const requests = [process.env.IP_SOURCE_URL_1 + ip, process.env.IP_SOURCE_URL_3 + ip].map((v) => axios.get(v));
    const obj = await Promise.all(requests);
    const result = obj.reduce((a, b) => ({ ...a, ...b.data }), {});
    delete result.geoplugin_credit;
    return res.json(JSON.stringify(result, null, 2));
  } catch (error) {
    res.status(500).end();
  }
});
