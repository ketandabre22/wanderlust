const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../model/listing.js");

const mongo_db = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

async function main() {
  await mongoose.connect(mongo_db);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);
  console.log("Database initialized with sample data!");
};

initDB();
