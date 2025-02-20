module.exports = ({ env }) => ({
  tinymce: {
    enabled: true
  },
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 250 * 1024 * 1024,
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
});