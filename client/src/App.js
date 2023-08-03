import "./App.css";
import SideBar from "./components/layouts/SideBar";
import MainBar from "./components/layouts/MainBar";
import ListHotel from "./components/room/ListHotel";
import AddHotel from "./components/room/AddHotel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Insights from "./components/room/Insights";
import EditHotel from "./components/room/EditHotel";
function App() {
  return (
    <section className="dashboard-section">
      <div className="container">
        <SideBar />

        <main>
          <MainBar />
          <Router>
            <Routes>
              <Route path="/" element={<Insights />} />
              <Route path="/addHotel" element={<AddHotel />} />
              <Route path="/listHotel" element={<ListHotel />} />
              <Route path="/editHotel/:id" element={<EditHotel />} />
            </Routes>
          </Router>
        </main>
      </div>
    </section>
  );
}

export default App;
