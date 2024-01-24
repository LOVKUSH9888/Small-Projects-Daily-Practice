import "./App.css";
import Banner from "./components/Banner/Banner";
import FeaturedDest from "./components/Featured-Destination/FeaturedDest";
import Gallary from "./components/Gallary/Gallary";
import Header from "./components/Header/Header";
import Review from "./components/Review/Review";

function App() {
  return (
    <>
      <Header/>
      <FeaturedDest/>
      <Gallary/>
      <Banner/>
      <Review/>
    </>
  );
}

export default App;
