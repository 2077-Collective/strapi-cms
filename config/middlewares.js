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
      formLimit: '256mb',
      jsonLimit: '256mb',
      textLimit: '256mb',
      formidable: {
        maxFileSize: 200 * 1024 * 1024,
      },
    },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,  
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:", "'unsafe-inline'"],
          "connect-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "blob:", "*.strapi.io", "https:"],
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
            "http:",
            "https:",
            "*.cloudinary.com",
            "*"
          ],
          "media-src": ["'self'", "data:", "blob:", "https:", "*"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "https:"
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:", "data:"],
          "frame-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];