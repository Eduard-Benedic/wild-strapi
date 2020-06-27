module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
          "uri": "mongodb+srv://eduard:3dLIaPIdB3n3d1c@cluster0-snmef.mongodb.net/wild?retryWrites=true&w=majority"
      },
      options: {
        ssl: true
      },
    },
  },
});
