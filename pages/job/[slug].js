import React from 'react';
import { useState ,useEffect } from 'react'
// utils
import { queryStrapi } from '../../utils/query-strapi';

const imageurl = (image) => { 
    const domain ='http://localhost:1337'
    return `${domain}${image?.url}`
}


// constants
import {
  GET_ALL_ARTICLE_SLUGS,
  GET_ARTICLE_BY_SLUG,
} from '../../graphql/queries.js';
import { useRouter } from 'next/router';

const Slug = ({slug}) => {
  
    const [job, setJob] = useState({});

const router = useRouter();
//const { slug } = router.query;
console.log('slug',slug)
useEffect(() => {

    if  (slug) {
    fetchjobs();
    }
}, [])


const fetchjobs = async () => {

    const data = await queryStrapi(GET_ARTICLE_BY_SLUG(slug));
    console.log('data',data?.jobs?.data[0]?.attributes)
    setJob(data?.jobs?.data[0]?.attributes);
   

}


    return (
        <div>
            <h1>Slug travelll</h1>
            <h2>
                {job.title}
                {job.company?.data?.attributes?.name}

<img src={
    imageurl(job.company?.data?.attributes?.coverImage?.data?.attributes)
} alt="" />

            </h2>
        </div>
    );
}

export default Slug;



  export async function getServerSideProps( context ) {
    const slug = context.params.slug;
  
    return {
      props: { slug: slug },
      //revalidate: 10,
    };
  }
