import { useRouter } from "next/router";

const ReviewDetails = () => {
  const { query } = useRouter();
  const { productId, reviewId } = query;

  return (
    <h1>
      Product {productId} review {reviewId}
    </h1>
  );
};

export default ReviewDetails;
