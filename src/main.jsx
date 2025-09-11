import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
// import Layout from "./pages/Layout";
import Home from "./Home.jsx";
import AboutMembership from "./pages/aboutMembership/AboutMembership.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";
import Facilities from "/src/pages/facilities/Facilities.jsx";
import SalonSpa from "./pages/salonSpa/SalonSpa.jsx";
import OfferEvents from "./pages/offerEvents/OfferEvents.jsx";
import Contact from "./pages/contact/Contact.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

Amplify.configure(awsExports);

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="about" element={<AboutMembership />} />
					<Route path="membership" element={<AboutMembership />} />
					<Route path="restaurant" element={<Restaurant />} />
					<Route path="facilities" element={<Facilities />} />
					<Route path="salonspa" element={<SalonSpa />} />
					<Route path="events" element={<OfferEvents />} />
					<Route path="contact" element={<Contact />} />

					{/* <Route path="*" element={<NoPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
