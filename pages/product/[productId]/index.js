import { useRouter } from "next/router";

const Product = () => {
  const { query } = useRouter();
  const productId = query.productId;

  return <h1>Product {productId}</h1>;
};

export default Product;
