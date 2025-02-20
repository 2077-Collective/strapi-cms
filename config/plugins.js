// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'local',
//       providerOptions: {
//         sizeLimit: 100 * 1024 * 1024, // 100mb
//       },
//       breakpoints: {
//         xlarge: 1920,
//         large: 1000,
//         medium: 750,
//         small: 500,
//       },
//       processor: {
//         sharp: false,
//         jimp: true
//       }
//     },
//   },
//   tinymce: {
//     enabled: true
//   }
// });
module.exports = ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024,
      provider: 'local',
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
      breakpoints: false
    },
  },
  tinymce: {
    enabled: true
  }
});