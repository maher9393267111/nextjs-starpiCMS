import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Postid = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { postid } = router.query;

  useEffect(() => {

postid  && fetchpost()

  }, [postid]);

  const fetchpost = async () => {
    const res = await axios.get(`http://localhost:1337/api/posts/${postid}`);

    try {
      const json = await res.data.data;

      setPost(json);
      console.log("json---->", json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
        <h1>
            {post && post.attributes?.title}
        </h1>
    </div>
  )
};

export default Postid;
