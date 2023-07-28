import { Helmet } from "react-helmet-async";
import BestDeal from "../BestDeal/BestDeal";
import HeroBanner from "../HeroBanner/HeroBanner";
import TopCategories from "../TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Hut | Home</title>
      </Helmet>
      <HeroBanner></HeroBanner>
      <TopCategories></TopCategories>
      <BestDeal></BestDeal>
    </div>
  );
};

export default Home;
