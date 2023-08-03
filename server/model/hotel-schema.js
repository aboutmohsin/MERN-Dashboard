import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

const hotelSchema = mongoose.Schema({
  hotelname: String,
  numberofrooms: String,
  country: String,
  city: String,
  address: String,
  postalcode: String,
  price: String,
});
// autoIncrement.initialize(mongoose.connection);
// hotelSchema.plugin(autoIncrement.plugin, "hotel");
const Hotel = mongoose.model("hotel", hotelSchema);

export default Hotel;
