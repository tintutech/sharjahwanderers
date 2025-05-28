import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";

function Hello(e) {
	console.log(e.target.src);
}

export default function Restaurant() {
	return (
		<div id="restaurant">
			<div className="top">
				<Nav />
			</div>
			<object
				onClick={() => Hello()}
				className="pdf"
				data="/public/dineIn.pdf"
				width="800"
				height="600"
			></object>
			<img
				onClick={(e) => Hello(e)}
				src="/public/dineIn/image1.png"
				width="800"
			/>
			<img
				onClick={(e) => Hello(e)}
				src="/public/dineIn/image2.png"
				width="800"
			/>
			<img
				onClick={(e) => Hello(e)}
				src="/public/dineIn/image3.png"
				width="800"
			/>
			<img
				onClick={(e) => Hello(e)}
				src="/public/dineIn/image4.png"
				width="800"
			/>
			<img
				onClick={(e) => Hello(e)}
				src="/public/dineIn/image5.png"
				width="800"
			/>
			<img
				onClick={(e) => Hello(e)}
				src="/public/dineIn/image6.png"
				width="800"
			/>

			<Footer />
		</div>
	);
}
