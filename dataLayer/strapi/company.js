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
  


  // find company by slug and populate image and logoImage

  export const getCompanyBySlug = async ({ slug  }) => {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ['logo', 'coverImage'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}/companies?${query}`);
    const rawCompany = res.data.data[0];
    return  rawCompany;
    //companyReducer(rawCompany);
  };