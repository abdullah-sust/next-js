import Link from "next/link";

const Product = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>
        <Link href="/product/1" replace>
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2" replace>
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          <a>Product 3</a>
        </Link>
      </h1>
    </>
  );
};

export default Product;
