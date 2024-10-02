import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'n6pszn8u',
    dataset: 'production',
    apiVersion: '2024-09-24',
    useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}