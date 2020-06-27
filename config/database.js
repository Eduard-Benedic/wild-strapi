module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
          "uri": `${process.env.MongoDB_URI}`
      },
      options: {
        ssl: true
      },
    },
  },
});
