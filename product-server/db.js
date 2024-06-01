// Import the mongoose library
const mongoose = require("mongoose");

// Get the MongoDB URI
const MONGODB_URI = "mongodb://127.0.0.1:27017/produits";

// Connect to MongoDB using the URI
mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 60000,
  })
  .then(() => `console.log(MongoDB connected to MONGODB`) // Log successful connection
  .catch((err) => {
    console.error(
      `Failed to connected to MongoDb uri ${MONGODB_URI} -  ${err.message}` // Log connection failure
    );
    console.error(err);
  });

// Export the mongoose object
module.exports = mongoose;
