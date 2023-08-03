import React from "react";
import { useState } from "react";
import { addHotel } from "../service/Api";
import { Link, useNavigate } from "react-router-dom";

const AddHotel = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const onValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const addHotelDetails = async () => {
    await addHotel(input);
    navigate("/listHotel");
  };
  return (
    <>
      <section className="Form-section" id="form">
        <div className="hotel-form">
          <h2>List your hotel</h2>
          <form action="#">
            <div className="form-group">
              <div className="controls">
                <label htmlFor="hotelname">Hotel Name</label>
                <input
                  type="text"
                  id="hotelname"
                  name="hotelname"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="controls">
                <label htmlFor="numberofrooms">Number of Rooms</label>
                <input
                  type="number"
                  id="numberofrooms"
                  name="numberofrooms"
                  onChange={(e) => onValueChange(e)}
                />
              </div>

              <div className="controls">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="Country"
                  name="country"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="controls">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="City"
                  name="city"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="controls">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="Address"
                  name="address"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="controls">
                <label htmlFor="postalcode">Postal Code</label>
                <input
                  type="number"
                  id="postalcode"
                  name="postalcode"
                  onChange={(e) => onValueChange(e)}
                />
              </div>

              <div className="controls">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="Price"
                  name="price"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
            </div>
            <div className="form-btn">
              <a onClick={() => addHotelDetails()}>Submit</a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddHotel;
