import { gql, useQuery } from "@apollo/client";
import { Carrousel } from "components/Carrousel/Carrousel";
import { headerCategories } from "components/Header/constants";
import { GetProductsDocument } from "generated/graphql";
import Link from "next/link";

const Home = () => {
  const { loading, error, data } = useQuery(GetProductsDocument);
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <ul
        className="uppercase flex bg-black text-white font-medium gap-4 col-span-3 justify-center
        p-2 text-sm md:text-base"
        aria-label="poster categories"
      >
        {headerCategories.map((category) => (
          <li key={category}>
            <Link href={`/${category}`} passHref>
              <a>{category}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Carrousel />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
