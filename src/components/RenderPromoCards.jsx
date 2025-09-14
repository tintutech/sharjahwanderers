import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import "./RenderPromoCards.css";

export const RenderPromoCards = ({ promoCards, isLoading }) => {
	if (isLoading) return <p>Loading...</p>;
	console.log(promoCards[0].fields);
	return (
		<div className="cardContainerPromo">
			{promoCards?.map((card, index) => (
				<div key={index} className="card">
					<img
						src={card?.fields?.image?.fields?.file?.url || card?.fields?.title}
						alt={card.fields?.image?.fields?.title}
					/>
					<div className="lowerCard">
						<h3>{card?.fields?.title}</h3>
						<div
							dangerouslySetInnerHTML={{
								__html: documentToHtmlString(card?.fields?.desc),
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
};
