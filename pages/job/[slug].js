import React from 'react';
import {getProductbySlug , QUERY_PRODUCT_BY_SLUG , GET_JOBS_BY_SLUG} from '../../services/queries'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery ,gql } from "@apollo/client"




const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    // const { loading, error, data } = useQuery( , {
    //     variables: {
    //         slug
    //     }
    // })


    

    


  
 //   console.log('data---->', data)
    return (
        <div>
            <h1>Slug</h1>
        </div>
    );
}

export default Slug;
