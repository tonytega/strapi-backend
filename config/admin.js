module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','vcMetV4+063a15MFKA+P3g=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','PATJmt5bhYnqVSF4ZydbEg=='),
  },
});
