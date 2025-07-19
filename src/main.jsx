import { createRoot } from "react-dom/client";

import Home from "./Home.jsx";
import AboutMembership from "./pages/aboutMembership/AboutMembership.jsx";
import Facilities from "./pages/facilities/Facilities.jsx";
import OfferEvents from "./pages/offerEvents/OfferEvents.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";
import SalonSpa from "./pages/salonSpa/SalonSpa.jsx";

createRoot(document.getElementById("root")).render(<SalonSpa />);
