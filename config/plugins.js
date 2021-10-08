module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'develop01@webdigitalark.com',
      defaultReplyTo: 'develop01@webdigitalark.com',
    },
  },
  // ...
});
