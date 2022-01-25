const mongoose = require("mongoose");

const connectToDatabase = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected to MongoAtlas");
  } catch (error) {
    console.log("There has been an error: ", error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
