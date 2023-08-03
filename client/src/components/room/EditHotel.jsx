import React from "react";
import { useState, useEffect } from "react";
import { editHotel, getHotel } from "../service/Api";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditHotel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({});
  useEffect(() => {
    loadHotelDetails();
  }, []);
  const loadHotelDetails = async () => {
    const res = await getHotel(id);
    // console.log(res.data);
    setInput(res.data);
  };
  const onValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const editHotelDetails = async () => {
    await editHotel(input, id);
    navigate("/listHotel");
  };
  return (
    <>
      <section className="Form-section" id="form">
        <div className="hotel-form">
          <h2>Edit your hotel</h2>
          <form action="#">
            <div className="form-group">
              <div className="controls">
                <label htmlFor="hotelname">Hotel Name</label>
                <input
                  type="text"
                  id="hotelname"
                  name="hotelname"
                  onChange={(e) => onValueChange(e)}
                  value={input.hotelname}
                />
              </div>
              <div className="controls">
                <label htmlFor="numberofrooms">Number of Rooms</label>
                <input
                  type="number"
                  id="numberofrooms"
                  name="numberofrooms"
                  onChange={(e) => onValueChange(e)}
                  value={input.numberofrooms}
                />
              </div>

              <div className="controls">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="Country"
                  name="country"
                  onChange={(e) => onValueChange(e)}
                  value={input.country}
                />
              </div>
              <div className="controls">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="City"
                  name="city"
                  onChange={(e) => onValueChange(e)}
                  value={input.city}
                />
              </div>
              <div className="controls">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="Address"
                  name="address"
                  onChange={(e) => onValueChange(e)}
                  value={input.address}
                />
              </div>
              <div className="controls">
                <label htmlFor="postalcode">Postal Code</label>
                <input
                  type="number"
                  id="postalcode"
                  name="postalcode"
                  onChange={(e) => onValueChange(e)}
                  value={input.postalcode}
                />
              </div>

              <div className="controls">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="Price"
                  name="price"
                  onChange={(e) => onValueChange(e)}
                  value={input.price}
                />
              </div>
            </div>
            <div className="form-btn">
              <a onClick={() => editHotelDetails()}>Submit</a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditHotel;
