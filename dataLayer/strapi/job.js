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


  export const getJobBySlug = async ({ slug }) => {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: [
          'company',
          'company.logo',
          'company.coverImage',
          'relatedJobs',
          'relatedJobs.company',
          'relatedJobs.company.logo',
          'relatedJobs.company.coverImage',
          'skills_tags',
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}/jobs?${query}`);
    const rawJob = res.data.data[0];
    return  rawJob;
    //jobReducer(rawJob);
  };



  export const getJobsByCompanyId = async ({ id }) => {
    const query = qs.stringify(
      {
        filters: {
          company: {
            id: {
              $eq: id,
            },
          },
        },
        populate: ['company', 'company.logo', 'company.coverImage', 'skills_tags'],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}/jobs?${query}`);
    const rawJobs = res.data.data;
   // const jobs = rawJobs.map((rawJob) => jobReducer(rawJob, false));
    return rawJobs;
  };
  


  // get all jobs

  export const getJobs = async ({ page = 2, pageSize = 1 } = {}) => {
    const query = qs.stringify(
      {
        populate: ['company', 'company.logo', 'company.coverImage', 'skillsTags'],
        pagination: {
          page,
          pageSize,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await axios.get(`${apiUrl}/jobs?${query}`);
    const rawJobs = res.data.data;
  
   // const jobs = rawJobs.map((rawJob) => jobReducer(rawJob, false));
    return rawJobs;
  };