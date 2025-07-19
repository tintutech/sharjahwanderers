import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./Home.jsx";
import AboutMembership from "./pages/aboutMembership/AboutMembership.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";
<<<<<<< HEAD
createRoot(document.getElementById("root")).render(<Restaurant />);


import Facilities from "/src/pages/facilities/Facilities.jsx";
createRoot(document.getElementById("root")).render(<Facilities />);

import SalonSpa from "./pages/salonSpa/SalonSpa.jsx";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<SalonSpa />
	</StrictMode>
);
*/

import OfferEvents from "./pages/offerEvents/OfferEvents.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<OfferEvents />
	</StrictMode>
);
=======
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
>>>>>>> 61f95f9ac23c3002d67d7c21a513cda9a7fb2ac0
