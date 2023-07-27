import BestDeal from "../BestDeal/BestDeal";
import HeroBanner from "../HeroBanner/HeroBanner";
import TopCategories from "../TopCategories/TopCategories";


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <TopCategories></TopCategories>
            <BestDeal></BestDeal>
        </div>
    );
};

export default Home;