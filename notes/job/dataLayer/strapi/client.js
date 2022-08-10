import axios from 'axios';
const strapiAPIKey =  ' 254ee6e41549d0212fc8648f2fcea1a1dc1389029c9fec547ee4a6a39e6bfc37fe16362d929670f5283d34cc1ff38fb0b5968ddf5916f25e7014b712b76838ee0ac9de91854d71b0a7321f81d9174e6ef5895f08de65140c612734151ece0838e516bbaa3338779374c1b54f62ef9f4580eaa6c6fc7cde05106bd867dd65c544'
//process.env.STRAPI_API_KEY;
//console.log('strapiAPIKey',strapiAPIKey)
axios.defaults.headers.common['Authorization'] = `Bearer ${strapiAPIKey}`;

export default axios;