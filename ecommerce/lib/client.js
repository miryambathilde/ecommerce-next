import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * API VERSION: is the date/time when I'm developing this project
 */
export const client = sanityClient({
	projectId: "zvgg4sfe",
	dataset: "production",
	apiVersion: "2022-06-21",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
