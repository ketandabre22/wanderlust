const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
    set: (v) =>
      v === ""
        ? "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        : v,
  },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema)

module.exports = Listing;