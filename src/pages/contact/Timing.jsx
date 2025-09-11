import "./timing.css";

export default function Timing() {
	return (
		<div className="operatingHours">
			<h2>OPERATING HOURS</h2>
			<div className="table">
				<h3>FACILITIES</h3>
				<table>
					<tbody>
						<tr>
							<td>GYM</td>
							<td>6:00 AM - 10:00 PM</td>
						</tr>
						<tr>
							<td>Swimming Pool</td>
							<td>6:00 AM - 10:00 PM</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table">
				<h3>MAIN BAR</h3>
				<table>
					<tbody>
						<tr>
							<td>MON - WED</td>
							<td>11:00 AM - 10:00 PM</td>
						</tr>
						<tr>
							<td>THURSDAY</td>
							<td>11:00 AM - LATE</td>
						</tr>
						<tr>
							<td>FRI & SAT</td>
							<td>9:00 AM - LATE</td>
						</tr>
						<tr>
							<td>SUNDAY</td>
							<td>9:00 AM - 11:00 PM</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table">
				<h3>KITCHEN</h3>
				<table>
					<tbody>
						<tr>
							<td>MON - WED</td>
							<td>11:00 AM - 10:00 PM</td>
						</tr>
						<tr>
							<td>THURSDAY</td>
							<td>11:00 AM - 11:00 PM</td>
						</tr>
						<tr>
							<td>FRI & SAT</td>
							<td>9:00 AM - 11:00 PM</td>
						</tr>
						<tr>
							<td>SUNDAY</td>
							<td>9:00 AM - 9:00 PM</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
