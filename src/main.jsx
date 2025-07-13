import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./Home.jsx";
import AboutMembership from "./pages/aboutMembership/AboutMembership.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";
import Facilities from "/src/pages/facilities/Facilities.jsx";
import SalonSpa from "./pages/salonSpa/SalonSpa.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="membership" element={<AboutMembership />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="salonspa" element={<SalonSpa />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
