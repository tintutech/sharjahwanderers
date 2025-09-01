import Swal from 'sweetalert2';
// import "./formComponentStyles.css";
import "./Contact.css";

export default function FormComponent() {
	const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "38e7f6db-2af6-4ec2-905a-a846e6ff1d9f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };
	return (
		// <form action="new_page.json" target="_blank" method="POST" className="form">
		// 	<input type="text" name="name" placeholder="NAME" />
		// 	<input type="tel" name="phone" placeholder="PHONE" />
		// 	<input type="mail" name="email" placeholder="E-MAIL" />
		// 	<input type="text" name="subject" placeholder="SUBJECT" />
		// 	<select name="options">
		// 		<option value="">INQUIRY TYPE</option>
		// 		<option value="option1">option 1</option>
		// 		<option value="option2">option 2</option>
		// 		<option value="option3">option 3</option>
		// 		<option value="option4">option 4</option>
		// 		<option value="option5">option 5</option>
		// 	</select>
		// 	<textarea
		// 		name="noteMessage"
		// 		placeholder="NOTE MESSAGE (200 CHARACTERS)"
		// 	></textarea>
		// 	<button type="submit">SEND INQUIRY</button>
		// </form>
		<section className="contactUS">
			<form onSubmit={onSubmit}>
				<h2>Contact Form</h2>
				<div className="input-box">
					<label>Full Name</label>
					<input type="text" className="field" placeholder='Enter your name' name='name' required />
				</div>
				<div className="input-box">
					<label>Mobile Number</label>
					<input type="text" className="field" placeholder='Enter your mobile' name='mobile' required />
				</div>
				<div className="input-box">
					<label>Email Address</label>
					<input type="email" className="field" placeholder='Enter your email' name='email' required />
				</div>
				<div className="input-box">
					<label>Your Message</label>
					<textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
				</div>
				<button type="submit">Send Message</button>
			</form>
		</section>
	);
}
