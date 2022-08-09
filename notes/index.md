 fetch all posts with rest api and axios

 // useEffect(() => {


// fetchposts()

// }, [])


const fetchposts = async () => {

  const res = await axios.get('http://localhost:1337/api/posts')
 


  try {
   
    const json = await res.data.data

    setData(json);
    console.log('json---->', json)


  } catch (error) {
   console.log('error', error)
  }





}


---------------------------------------------------------------

 single post fetch with axios and rest api


 //   useEffect(() => {

// postid  && fetchpost()

//   }, [postid]);

//   const fetchpost = async () => {
//     const res = await axios.get(`http://localhost:1337/api/posts/${postid}`);

//     try {
//       const json = await res.data.data;

//       setPost(json);
//       console.log("json---->", json);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };


---------------------------------------------------------------
