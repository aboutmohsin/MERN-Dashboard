import Hotels from "../model/hotel-schema.js";

export const addHotel = async (req, res) => {
 res.set('Access-Control-Allow-Origin', '*');
  const hotel = req.body;
  const newHotel = Hotels(hotel);
  console.log(newHotel);
  //   console.log(hotel);
  try {
    await newHotel.save();
    res.status(201).json({ success: true, data: "Add hotel Successfully" });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
export const getHotels = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const hotel = await Hotels.find({});
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
export const getHotel = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const hotel = await Hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {}
};

export const editHotel = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let hotel = req.body;
  const editHotel = new Hotels(hotel);
  try {
    await Hotels.updateOne({ _id: req.params.id }, editHotel);
    res.status(201).json(editHotel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteHotel = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  // console.log(req.params.id);
  try {
    await Hotels.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Delete Hotel Successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
