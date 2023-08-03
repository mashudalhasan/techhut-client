import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-rose-100 pt-24">
      <div className="h-auto lg:h-96 p-5 lg:p-10 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, translateX: "-20%" }}
          whileInView={{ opacity: 1, translateX: "0%" }}
          transition={{ duration: 1.5 }}
          className="space-y-5 w-full h-full"
        >
          <h2 className="text-3xl lg:text-6xl font-bold">
            Best Price. <br /> Authentic Product.
          </h2>
          <p className="text-base lg:text-lg lg:w-4/6">
            Find the best prices on genuine, top-quality products that match
            exactly what you&apos;re searching for.
          </p>
          <div>
            <Link
              to="/allproducts"
              className="px-3 py-2 rounded-full border border-black hover:bg-black hover:text-white transition duration-500"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <div className="h-full w-full flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, translateX: "20%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{ duration: 1.5 }}
            className="h-full lg:h-auto object-contain"
            src="https://i.ibb.co/9pm7sn6/bg-banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
