import Accordion from "@/components/accordion/Accordion";
import CardList from "@/components/cardList/CardList";
import { CardData } from "@/components/cardList/cardData";
import CatGallery from "@/components/catGallery/CatGallery";
import Corousel from "@/components/corousel/Corousel2";
// import Corousel from "@/components/carousel/Corousel";
import Filter from "@/components/filter/Filter";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/menu/navBar/NavBar";
import Slider from "@/components/slider/Slider";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <Filter/>
      <Corousel type="Top Rated"/>
      <CatGallery/>
      <CardList products={CardData} type="Featured"/>
      <Corousel type="Most Popular"/>
      <Footer/>
    </div>
  )
}

export default Home;