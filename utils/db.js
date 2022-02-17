const mongoose = require("mongoose");

const DB = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost/miniproject', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = DB;