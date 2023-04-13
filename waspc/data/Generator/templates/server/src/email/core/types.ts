{{={= =}=}}
export type EmailProvider = SMTPEmailProvider | SendGridProvider | MailgunEmailProvider;

export type SMTPEmailProvider = {
  type: "smtp";
  host: string;
  port: number;
  username: string;
  password: string;
};

export type SendGridProvider = {
  type: "sendgrid";
  apiKey: string;
};

export type MailgunEmailProvider = {
  type: "mailgun";
  apiKey: string;
  domain: string;
};

export type EmailSender = {
  send: (email: Email) => Promise<SentMessageInfo>;
};

export type SentMessageInfo = any;

export type Email = {
  {=# isDefaultFromFieldDefined =}
  from?: EmailFromField;
  {=/ isDefaultFromFieldDefined =}
  {=^ isDefaultFromFieldDefined =}
  from: EmailFromField;
  {=/ isDefaultFromFieldDefined =}
  to: string;
  subject: string;
  text: string;
  html: string;
};

export type EmailFromField = {
  name?: string;
  email: string;
}