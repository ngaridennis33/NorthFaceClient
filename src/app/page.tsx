import Accordion from "@/components/accordion/Accordion";
import CardList from "@/components/cardList/CardList";
import { CardData } from "@/components/cardList/cardData";
import CatGallery from "@/components/catGallery/CatGallery";
import Corousel from "@/components/corousel/Corousel2";
// import Corousel from "@/components/carousel/Corousel";
import Filter from "@/components/filter/Filter";
import NavBar from "@/components/menu/navBar/NavBar";
import Slider from "@/components/slider/Slider";

const Home = () => {
  return (
    <div style={{width:"100%", display:"flex",flexDirection:"column", gap:"30px"}}>
      <NavBar/>
      <Slider/>
      <Filter/>
      <Corousel/>
      <CatGallery/>
      <CardList products={CardData}/>
      {/* <Accordion/> */}
    </div>
  )
}

export default Home;