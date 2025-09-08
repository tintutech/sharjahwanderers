import { Helmet } from "react-helmet";

export default function Title({ title }) {
	return (
		<Helmet>
			<title> {title + " - Sharjah Wanderers Sports Club"}</title>
		</Helmet>
	);
}
