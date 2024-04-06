import Accordion from "@/components/accordion/Accordion";
import CardList from "@/components/cardList/CardList";
import { CardData } from "@/components/cardList/cardData";
import CatGallery from "@/components/catGallery/CatGallery";
import Corousel from "@/components/corousel/Corousel2";
import Filter from "@/components/filter/Filter";
import Footer from "@/components/footer/footer";
import MainNav from "@/components/menu/MainNav";
import Slider from "@/components/slider/Slider";

const Home = () => {
  return (
    <div>
      <MainNav/>
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