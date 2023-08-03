import { Link } from "react";

const SideBar = () => {
  return (
    <>
      <aside>
        <div className="top">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
            <h2>ebooking</h2>
          </div>
          <div className="close">
            <span className="material-symbols-sharp">close</span>
          </div>
        </div>
        <div className="sidebar">
          <a href="/" className="active">
            <span className="material-symbols-sharp active"> grid_view </span>
            <h3>dashboard</h3>
          </a>
          <a href="/addHotel">
            <span className="material-symbols-sharp">hotel</span>
            <h3>Add Hotel</h3>
          </a>
          <a href="/listHotel">
            <span className="material-symbols-sharp">king_bed</span>
            <h3>Listed Hotel</h3>
          </a>
          <a href="#form">
            <span className="material-symbols-sharp">feed</span>
            <h3>Form</h3>
          </a>
          <a href="#">
            <span className="material-symbols-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
