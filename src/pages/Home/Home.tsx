import Discovery from "../../components/Discover/Discovery";
import Header from "../../components/Header/Header";
import Technologies from "../../components/Technologies/Technologies"
import { HomeContainer } from "./Home.style";

const Home = () => {
  return (
    <>
        <Header />
        <HomeContainer>
          <Technologies />
          <Discovery />
        </HomeContainer>
    </>
  );
}

export default Home;