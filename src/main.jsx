import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home.jsx";
import AboutMembership from "./pages/aboutMembership/AboutMembership.jsx";
import Restaurant from "./pages/restaurant/Restaurant.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Home />
	</StrictMode>
);
/*

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AboutMembership />
	</StrictMode>
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Restaurant />
	</StrictMode>
);
*/
