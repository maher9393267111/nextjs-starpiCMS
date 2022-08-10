import axios from './client';
import qs from 'qs';
const apiUrl = 'http://localhost:1337/api'


export const getJobsSlugs = async () => {
    const query = qs.stringify(
      {
        fields: ['slug'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}/jobs?${query}`);
    const rawSlugs = res.data.data;
    //   return rawSlugs;
  
    const slugs = rawSlugs.map((rawSlug) => {
      return rawSlug.attributes.slug;
    });
    return slugs;
  };