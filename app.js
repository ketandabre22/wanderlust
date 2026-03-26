const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_db = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require('./model/listing');


main().then(() => {
      console.log('Database connection successful');
}).catch(err => {
      console.error('Database connection error:', err);
}
);




app.get('/', (req, res) => {
      res.send('Hello World!');
}
);

async function main() {
  await mongoose.connect(mongo_db);
  console.log("Connected to MongoDB");
}

app.get("/testlistings", async (req, res) => {
  let sampleListig = new Listing({
    title: "Test Listing",
    description: "This is a test listing.",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });
  await sampleListig.save();
      res.send("Test listing created and saved to database!");
      // res.send("Sample was saved to the database!");
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
