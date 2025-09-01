import "./formComponentStyles.css";

export default function FormComponent() {
	return (
		<form action="new_page.json" target="_blank" method="POST" className="form">
			<input type="text" name="name" placeholder="NAME" />
			<input type="tel" name="phone" placeholder="PHONE" />
			<input type="mail" name="email" placeholder="E-MAIL" />
			<input type="text" name="subject" placeholder="SUBJECT" />
			<select name="options">
				<option value="">INQUIRY TYPE</option>
				<option value="option1">option 1</option>
				<option value="option2">option 2</option>
				<option value="option3">option 3</option>
				<option value="option4">option 4</option>
				<option value="option5">option 5</option>
			</select>
			<textarea
				name="noteMessage"
				placeholder="NOTE MESSAGE (200 CHARACTERS)"
			></textarea>
			<button type="submit">SEND INQUIRY</button>
		</form>
	);
}
