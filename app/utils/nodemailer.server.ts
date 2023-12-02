import NodeMailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const { MAILTRAP_API_TOKEN: API_TOKEN, SENDER_EMAIL } = process.env;

if (!API_TOKEN || !SENDER_EMAIL) {
  throw new Error("Missing MAILTRAP_API_TOKEN or SENDER_EMAIL");
}

const transport = NodeMailer.createTransport(
  MailtrapTransport({
    token: API_TOKEN,
  }),
);

type User = {
  firstName: string;
  token: string;
  email: string;
};

type SendEmailVerification = {
  user: User;
  text: string;
  subject: string;
  template: string | (({ user }: { user: User }) => string);
};

export function sendMail({
  user,
  text,
  subject,
  template,
}: SendEmailVerification) {
  return transport.sendMail({
    text: text,
    to: {
      address: user.email,
      name: user.firstName,
    },
    from: {
      address: SENDER_EMAIL as string,
      name: "CASBytes",
    },
    subject: subject,
    html: typeof template === "function" ? template({ user }) : template,
  });
}
