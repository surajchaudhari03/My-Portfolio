import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const projectId = "n6pszn8u"
const datasetName = "production"

export const client = createClient({
    projectId: projectId,
    dataset: datasetName,
    apiVersion: '2024-09-24',
    useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    if (source._type === 'image') {
        return builder.image(source);
    } else if (source._type === 'file') {
        return `https://cdn.sanity.io/files/${projectId}/${datasetName}/${source.asset._ref.split('-')[1]}`;
    }
}