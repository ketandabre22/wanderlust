const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_db = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./model/listing");
const path = require("path");

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect(mongo_db);
  console.log("Connected to MongoDB");
}
//index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});
//NEW ROUTE
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//create route
app.post("/listings", async (req, res) => {
      // const { title, description, image, price, location, country } = req.body;
      const newListing = new Listing(req.body.listing);
      await newListing.save();
      res.redirect("/listings");
      
});

//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

// app.get("/testlistings", async (req, res) => {
//   let sampleListig = new Listing({
//     title: "Test Listing",
//     description: "This is a test listing.",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });
//   await sampleListig.save();
//       res.send("Test listing created and saved to database!");
//       // res.send("Sample was saved to the database!");
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
