import axios from './client';
import qs from 'qs';
const apiUrl = 'http://localhost:1337/api'
//process.env.STRAPI_API_BASE_URL;
console.log('apiUrl',apiUrl)
export const getCompaniesSlugs = async () => {
    const query = qs.stringify(
      {
        fields: ['slug' ,'name','slogan'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}/companies?${query}`);
    const rawSlugs = res.data.data;
  
    // const slugs = rawSlugs.map((rawSlug) => {
    //   return rawSlug.attributes.slug;
    // });
    return rawSlugs;
  };
  