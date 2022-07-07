import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { Header } from "components/Header/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">Main</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
