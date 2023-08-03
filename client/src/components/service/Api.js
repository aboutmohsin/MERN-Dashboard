import axios from "axios";

const URL = "mern-dashboard-nine.vercel.app";
const addHotel = async (data) => {
  try {
    return await axios.post(`${URL}/addHotel`, data);
  } catch (error) {
    console.log("Error    while Calling addHotel API", error);
  }
};

const getHotels = async () => {
  try {
    return await axios.get(`${URL}/listHotel`);
  } catch (error) {
    console.log("Error while calling listHotel API:", error);
  }
};
const getHotel = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error whilw calling getHotel API", error);
  }
};

const editHotel = async (input, id) => {
  try {
    return axios.put(`${URL}/${id}`, input);
  } catch (error) {
    console.log("Error while calling editHotel API:", error);
  }
};
const deleteHotel = async (id) => {
  try {
    // return console.log((`${URL}/${id}`));
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while Calling deleteHotel API:", error);
  }
};
export { addHotel, getHotels, getHotel, editHotel, deleteHotel };
