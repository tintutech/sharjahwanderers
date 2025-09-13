import { createClient } from "contentful";
const client = createClient({
	space: "148elm5iup71",
	accessToken: "wVL0ppsUv7aZSBmetAk0-U0c9ZhkToM3hYN6yWmiunU",
});
/*
	space: "aoazvbgqcfuv",
	accessToken: "rA_4yp3MscdCULtaK48V-wKJff6Bdkxgcvn0ztW2v9g",
});

*/
export const getPromotionalCards = () =>
	client
		.getEntries({ content_type: "promotions" })
		.then((response) => response.items);

export const getEventCards = () =>
	client
		.getEntries({ content_type: "events" })
		.then((response) => response.items);

export const getRestaurantOffers = () =>
	client
		.getEntries({ content_type: "restaurantOffers" })
		.then((response) => response.items);

export const getCarouselImages = () =>
	client
		.getEntries({ content_type: "cateringCarousel" })
		.then((response) => response.items);

export const getImage = (sysId) =>
	client
		.getEntries({ sys: { id: sysId } })
		.then((response) => response.items[0].fields.image.fields.file.url);
