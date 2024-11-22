export default () => ({});
module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'dffwydeim',
          api_key: '611531695861756',
          api_secret: 'nqOHSyfRtyLl-CL-YXZuThoEz1w',
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });