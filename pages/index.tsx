import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { Carrousel } from "components/Carrousel/Carrousel";
import { Header } from "components/Header/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">
        <Carrousel />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
