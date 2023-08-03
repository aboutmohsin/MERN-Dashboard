import React from "react";
import { getHotels, deleteHotel } from "../service/Api";
import { useEffect } from "react";
import { useState } from "react";
const ListHotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getAllHotelList();
  }, []);
  const getAllHotelList = async () => {
    let res = await getHotels();
    setHotels(res.data);
    // console.log(res.data);
  };
  const deleteHotelDetails = async (id) => {
    await deleteHotel(id);
    getAllHotelList();
  };
  return (
    <>
      <section className="recent-order-section">
        <div className="recent-orders">
          <h2> Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Hotel Name</th>
                <th>Country</th>
                <th>City</th>
                <th>Address</th>
                <th>Number of Rooms</th>
                <th>Postal Code</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel._id}>
                  <td> {hotel._id}</td>
                  <td> {hotel.hotelname}</td>
                  <td> {hotel.country}</td>
                  <td> {hotel.city}</td>
                  <td> {hotel.address}</td>
                  <td> {hotel.numberofrooms}</td>
                  <td> {hotel.postalcode}</td>
                  <td> {hotel.price}</td>
                  <td>
                    <a
                      className="edit-btn"
                      // componet={Link}
                      href={`editHotel/${hotel._id}`}
                    >
                      Edit
                    </a>
                    <a
                      className="delete-btn"
                      onClick={() => deleteHotelDetails(hotel._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="#">Show ALl</a>
        </div>
      </section>
    </>
  );
};

export default ListHotel;
