import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };

  return (
    <>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default Home;
