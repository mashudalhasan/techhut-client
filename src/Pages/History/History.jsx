import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const History = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>The Language Space | History</title>
      </Helmet>
      <CommonBanner title={"A Promising History"}></CommonBanner>
      <div className="mt-5 w-3/4 mx-auto">
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            In the ever-evolving world of technology, Tech Hut has stood as a
            beacon of innovation and convenience since its inception. Founded in
            2018, Tech Hut was born out of a passion for all things tech and a
            vision to create a platform that would redefine the way people shop
            for gadgets and electronics.
          </p>
          <p className="text-base text-gray-500">
            The journey began with a small team of tech enthusiasts who shared a
            common dream of making the latest and most innovative tech products
            accessible to everyone. With dedication and hard work, Tech Hut
            quickly gained recognition as a trusted destination for tech-savvy
            individuals seeking authentic and cutting-edge devices.
          </p>
          <p className="text-base text-gray-500">
            As the years passed, Tech Hut continued to expand its product range,
            introducing a diverse selection of smartphones, laptops,
            smartwatches, headphones, and more. Each product was carefully
            curated, ensuring only the highest quality items made it to the
            shelves.
          </p>
          <p className="text-base text-gray-500">
            Customer satisfaction has always been at the core of Tech Hut&apos;s
            philosophy. The team&apos;s commitment to exceptional service and
            prompt support has earned the trust and loyalty of a growing
            customer base.
          </p>
          <p className="text-base text-gray-500">
            Tech Hut&apos;s journey has been one of constant growth and
            adaptation. Embracing the latest trends and technologies, the
            platform has evolved to offer seamless online shopping experiences,
            user-friendly interfaces, and secure payment options.
          </p>
          <p className="text-base text-gray-500">
            Today, Tech Hut stands tall as a leading tech e-commerce platform,
            serving tech enthusiasts, professionals, and casual users alike.
            With a vision to stay ahead of the curve and bring the future of
            tech to the fingertips of its customers, Tech Hut continues to
            redefine the way technology is accessed, experienced, and enjoyed.
          </p>
          <p className="text-base text-gray-500">
            As the future unfolds, Tech Hut remains committed to its founding
            principles: to provide the best prices on authentic products and
            elevate the tech experience of millions worldwide. The journey
            continues, and Tech Hut invites you to be a part of it, embracing
            innovation, and exploring the endless possibilities of technology
            together.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link to="/">
          <button className="inline-flex items-center gap-2 space-x-2 bg-gray-100 active:bg-gray-200 text-black px-4 py-2 mt-12 rounded-md transition duration-150">
            <FaLongArrowAltLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Go back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default History;
