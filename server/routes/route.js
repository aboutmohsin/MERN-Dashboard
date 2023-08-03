import express from "express";
import {
  addHotel,
  getHotels,
  getHotel,
  editHotel,
  deleteHotel,
} from "../controller/user-controller.js";
// import addHotel from "../controller/userController";

const router = express.Router();
router.post("/addHotel", addHotel);
router.get("/listHotel", getHotels);
router.get("/:id", getHotel);
router.put("/:id", editHotel);
router.delete("/:id", deleteHotel);

export default router;
