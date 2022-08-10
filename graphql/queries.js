export const GET_HOLIDAY_PACKAGES = `
  query {
    holidayPackages {
      data {
        id
        attributes {
          thumbnail {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          location
          numOfNights
          inclusive
          amenities
          price
        }
      }
    }
  }`;

export const GET_ARTICLES_BY_NEWEST_FIRST = `
  query {
    articles(sort: "createdAt:desc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          title
          slug
          description
        }
      }
    }
  }`;

export const GET_ALL_ARTICLE_SLUGS = `
  query {
    articles {
      data {
        attributes {
          slug
        }
      }
    }
  }`;

export const GET_PAGINATED_ARTICLES = (page, pageSize) => `
  query {
    articles(
      sort: "createdAt:desc", 
      pagination: { page: ${page}, pageSize: ${pageSize} }
    ) {
      data {
        id
        attributes {
          title
          slug
          description
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }`;

  // woooooork
export const GET_ARTICLE_BY_SLUG = (targetSlug) => `
  query {
    jobs(filters: { slug: {eq: "${targetSlug}"} }) {
      data {
        attributes {
          title
       
          slug
          company {
            data {
              attributes {
                name
               slug
               coverImage { 
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
  }`;

export const GET_ABOUT_CONTENT = `
  query {
    about {
      data {
        id
        attributes {
          content
        }
      }
    }
  }`;