module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  // Add the build configuration
  build: {
    config: {
      plugins: {
        vite: {
          build: {
            rollupOptions: {
              external: [
                '@strapi/design-system/v2',
                '@strapi/design-system',
                '@strapi/icons',
                '@strapi/helper-plugin'
              ]
            }
          },
          resolve: {
            alias: {
              '@strapi/design-system/v2': '@strapi/design-system',
              '@strapi/design-system': '@strapi/design-system'
            }
          }
        }
      }
    }
  }
});