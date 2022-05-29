const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopoLogy: true,
    })
    .then((data) => {
      console.log("Mongodb connected with server: ${data.connection.host}");
    });
};

module.exports = connectDatabase;
