import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const About = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Tech Hut | About</title>
      </Helmet>
      <CommonBanner title={"About Us"}></CommonBanner>
      <div className="mt-5 w-3/4 mx-auto">
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="text-base text-gray-500">
            Welcome to Tech Hut, your one-stop destination for all things tech!
            At Tech Hut, we are passionate about bringing you the latest and
            most innovative tech products that enrich your modern lifestyle. Our
            mission is to provide a seamless online shopping experience,
            offering a diverse range of gadgets, electronics, and accessories at
            competitive prices.
          </p>
          <p className="text-base text-gray-500">
            With a team of tech enthusiasts, we carefully curate our collection
            to ensure you have access to top-notch, authentic products from
            trusted brands. Whether you&apos;re looking for the latest
            smartphones, cutting-edge laptops, stylish smartwatches, or
            high-performance headphones, we&apos;ve got you covered.
          </p>
          <p className="text-base text-gray-500">
            At Tech Hut, customer satisfaction is at the heart of everything we
            do. Our dedicated support team is always ready to assist you with
            any queries or concerns, making your shopping journey hassle-free
            and enjoyable.
          </p>
          <p className="text-base text-gray-500">
            Join us on our tech-filled journey and discover a world of
            innovation and convenience at Tech Hut. Let&apos;s elevate your tech
            experience together!
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

export default About;
