import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.jsx";
import AboutMembership from "./pages/aboutMembership/AboutMembership.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Home />
	</StrictMode>
);
