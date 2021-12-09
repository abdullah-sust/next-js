import { useRouter } from "next/router";

const Review = () => {
  const { query } = useRouter();
  const productId = query.productId;

  return <h1>Product {productId} review</h1>;
};

export default Review;
