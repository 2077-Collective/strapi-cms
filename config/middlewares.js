module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '50mb', // Increase form payload size limit
      jsonLimit: '50mb', // Increase JSON payload size limit
      textLimit: '50mb', // Increase text payload size limit
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // Increase file size limit (e.g., 200MB)
      },
    },
  },
<<<<<<< HEAD
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,  
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "blob:", "*.strapi.io"],
          "img-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "data:",
            "blob:",
            "dl.airtable.com",
            "strapi.io",
            "s3.amazonaws.com",
            "cdn.jsdelivr.net",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
=======
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
>>>>>>> b14e4271080edaad35aee0b149f95f115be44650
