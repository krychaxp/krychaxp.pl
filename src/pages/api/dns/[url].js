import nc from 'next-connect';
import dnsInfo from 'dns-info';

export default nc().get((req, res) => {
  const { url } = req.query;
  const options = {
    domain: url,
    timeout: 10000,
  };
  dnsInfo(options)
    .then((info) => {
      res.json(JSON.stringify(info, null, 2));
    })
    .catch((e) => {
      res.status(408).json({ error: e });
    });
});
