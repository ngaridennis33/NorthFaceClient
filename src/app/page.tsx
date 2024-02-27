import Accordion from "@/components/accordion/Accordion";
import CardList from "@/components/cardList/CardList";
import { CardData } from "@/components/cardList/cardData";
import Corousel from "@/components/carousel/Corousel";
import Filter from "@/components/filter/Filter";
import NavBar from "@/components/menu/navBar/NavBar";
import Slider from "@/components/slider/Slider";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <Corousel/>
      <Filter/>
      <CardList products={CardData}/>
      {/* <Accordion/> */}
    </div>
  )
}

export default Home;