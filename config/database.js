module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
          "uri": env('MongoDB_URI')
      },
      options: {
        ssl: true
      },
    },
  },
});
