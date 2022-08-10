import { gql } from '@apollo/client';

export const AllCompanies= gql`   
  query {
    companies {
      data {
        attributes {
          name
            slug
           jobs{
            data {
              attributes {
                title
                slug

              }
            }
          }
        }
      }
    }
  }
`;

export const Allproducts = gql`
query {
    jobs {
      data {
        attributes {
          title
            slug
           company {
            data {
              attributes {
                name
                slug

              }
            }
          }
        }
      }
    }
  }
`;

export const productslug = gql`
  query {
    products {
      data {
        attributes {
          pslug
        }
      }
    }
  }
`;

export const categoryslug = gql`
  query {
    categories {
      data {
        attributes {
          cslug
        }
      }
    }
  }
`;

export function getProductbySlug(slug) {
  return gql`
    query {
      jobs (
        filters: { slug: { eq: "${slug}" } }
      ) {
        data {
          attributes {
           title
           slug

           
          
            }
          }
        }
      }
    }
  `;
}


export const QUERY_PRODUCT_BY_SLUG= gql`
{
  getjobBySlug(slug:$slug) {
   
    jobs {
        attributes {
            title
            slug
        }
    }
    }
  
}
`




export function getCategorybySlug(slug) {
  return gql`
    query {
      categories(filters: { cslug: { eq: "${slug}" } }) {
        data {
          attributes {
            cid
            cslug
            products {
              data {
                attributes {
                  pid
                  pname
                  price
                  pslug
                  pimage {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}





//------------------------------------------------------

export const GET_JOBS_BY_SLUG = (targetSlug) => `
  query {
    jobs(filters: { slug: {eq: "${targetSlug}"} }) {
      data {
        attributes {
            title
            slug
        }
    
         
    }
}
  }`;