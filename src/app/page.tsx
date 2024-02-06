import CardList from "@/components/cardList/CardList";
import Filter from "@/components/filter/Filter";
import NavBar from "@/components/menu/navBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Filter/>
      <CardList/>
      Home
    </div>
  )
}

export default Home;