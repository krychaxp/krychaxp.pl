import nc from 'next-connect';
import { useIp } from 'src/middlewares/useIp';
import axios from 'axios';
import { sendEmail } from 'src/utils/sendEmail';

export default nc()
  .use(useIp)
  .post(async (req, res) => {
    try {
      const { email, name, recaptcha, text } = req.body;
      if (!email || !name || !recaptcha || !text) return res.status(400).end();
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${recaptcha}`;
      const response = await axios.get(url);
      if (response.data.success !== true) return res.status(403).end();
      const options = {
        subject: 'Wiadomość ze strony krychaxp.pl',
        text: `Imię i nazwisko: ${name}
Email: ${email}
Treść wiadomości:

${text}

-----------------------------------------------------------
Time:${new Date()}
IP:${req.clientIp}
UserAgent:${req.headers['user-agent']}
  `,
      };
      await sendEmail(options);
      return res.end();
    } catch (e) {
      return res.status(500).end();
    }
  });
