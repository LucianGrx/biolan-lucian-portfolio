import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: "t6lrnrvs",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: 'sk9idSuEzyov8kieng0yb2VjNHMLiOv8tQrfbvPjmQvXyzSNq8FMrpQuuDm5VL2xtHO3cTEO6bI45dwax2eCxFU8Wgna8WBI09tvEbvpUAWjofK2sIeARDPfVU4MsQpgz3VATKdUFdOX9cyeHylQHtjlRpAReccrYWcagEvNcjCeVY1OjdG6',
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
