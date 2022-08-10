import { request, gql } from "graphql-request";
const grapqhlAPI = 'http://localhost:1337/graphql'

export const getPosts = async () => {
    const query = gql`query posts {
        posts {
          data {
            id
            attributes {
      
              title
              
      
            }
          }
          
         
        }
      }
    
    `;
    const result = await request(grapqhlAPI, query)
 //   return result.posts.data // fetch start fro attrributes
 return result.posts
}



// single post   

export const getPost = async (postid) => {
    const query = gql`query 
        post(id: ${postid}) {
            data {
                id
                attributes {
                    title
                
    
    `;
    const result = await request(grapqhlAPI, query)
 //   return result.posts.data // fetch start fro attrributes
 return result.post
}