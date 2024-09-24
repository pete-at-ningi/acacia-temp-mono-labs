import Mailgun from 'mailgun-js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, phone } = req.body;
    try {
      await Mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: 'email.ningi.io',
        host: 'api.eu.mailgun.net',
      })
        .messages()
        .send({
          from: 'noreply@email.ningi.io', // Customize or use environment variable
          to: 'pete@ningi.co.uk',
          subject: `Acacia Wealth: New message from ${name}`,
          html: `<p>You have received a new message from ${name} (${email}):</p><p>Message: ${message}</p><p>Phone: ${phone}</p><p>Email: ${email}</p>`,
        });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
