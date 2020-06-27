module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
          "uri": `mongodb+srv://${mongoDB_name}:${process.env.MongoDB_password}@cluster0-snmef.mongodb.net/${process.env.MongoDB_database}?retryWrites=true&w=majority`
      },
      options: {
        ssl: true
      },
    },
  },
});
