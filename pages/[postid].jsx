import React from "react";
import axios from "axios";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import safeJsonStringify from "safe-json-stringify";
import {getPost} from '../services/index'
const Postid = ({post}) => {
 // const [post, setPost] = useState(null);
  const router = useRouter();
  const { postid } = router.query;
  console.log('post----->',post?.attributes?.title)



  return (
    <div>
        <h1>
          hello
        </h1>
    </div>
  )
};

export default Postid;


export async function getServerSideProps(context) {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  const id = context.query.postid;
  const { data } = await client.query({
    query: gql`
    query{
      post(id: ${id}){
        data {
          id
          attributes {
            title
          }
        }
          
         
      }
    }`,
  });
   console.log(data);
  //const parsepost = JSON.parse(safeJsonStringify(data));
  const postdata = data.post.data;
  
  return {
    props: {
      post: postdata,
    },
  };
}






