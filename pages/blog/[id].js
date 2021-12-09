import { useRouter } from "next/router";

const BlogPage = () => {
  const { query } = useRouter();
  const id = query.id;

  return <h1>BlogPage {id}</h1>;
};

export default BlogPage;
