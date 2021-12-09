import { useRouter } from "next/router";

const BlogDetails = () => {
  const { query } = useRouter();
  const blogId = query.blogId;

  return <h1>BlogDetails {blogId}</h1>;
};

export default BlogDetails;
