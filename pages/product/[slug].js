// Dynamic Route
import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  // console.log(router);
  const { slug } = router.query;
  return <div>The slug is : {slug}</div>;
};

export default Post;
