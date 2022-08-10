import React from 'react';
import { useState ,useEffect } from 'react'
import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'
import { AllCompanies, Allproducts} from '../services/queries'

const Graph = () => {
    const { loading, error, data } = useQuery(Allproducts )
    console.log('data--------> Companis',data)
    
    return (
        <div>
            <h1>GraphQl Query</h1>

            <div>
                {data?.jobs?.data?.length}
            </div>
        </div>
    );
}

export default Graph;
