import React from 'react';
import { useState ,useEffect } from 'react'
// utils
import { queryStrapi } from '../../utils/query-strapi';



// constants
import {
  GET_ALL_ARTICLE_SLUGS,
  GET_ARTICLE_BY_SLUG,
} from '../../graphql/queries.js';
import { useRouter } from 'next/router';

const Slug = ({slug}) => {
   // console.log('article',article)

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
    console.log('data',data)

}


    return (
        <div>
            <h1>Slug travelll</h1>
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
