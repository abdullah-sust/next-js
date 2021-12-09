import { useRouter } from "next/router";

const Docs = () => {
  const { query } = useRouter();
  const { params } = query;

  return <h1>Docs params {params} </h1>;
};

export default Docs;
