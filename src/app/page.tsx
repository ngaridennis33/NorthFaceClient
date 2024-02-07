import CardList from "@/components/cardList/CardList";
import Filter from "@/components/filter/Filter";
import NavBar from "@/components/menu/navBar/NavBar";
import Slider from "@/components/slider/Slider";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <Filter/>
      <CardList/>
    </div>
  )
}

export default Home;