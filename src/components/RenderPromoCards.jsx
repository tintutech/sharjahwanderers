import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import  "./RenderPromoCards.css";

export const RenderPromoCards = ({ promoCards, isLoading }) => {
    if (isLoading) return <p>Loading...</p>
    return (
        <div className="cardContainerPromo">
            {promoCards?.map((card, index) => (
                <div key={index} className="card">
                    <img src={card?.fields?.promoImage?.fields?.file?.url || card?.fields?.promoTitle} />
                    <div className="lowerCard">
                        <h3>{card?.fields?.promoTitle}</h3>
                        <p><div dangerouslySetInnerHTML={{ __html: documentToHtmlString(card?.fields?.promoDescription) }} /></p>
                        <a href={card?.link || '#'}>BOOK A TABLE</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

