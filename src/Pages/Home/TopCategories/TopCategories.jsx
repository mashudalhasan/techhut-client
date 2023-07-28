import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TopCategories = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <motion.h3
        initial={{ opacity: 0, translateX: "-20%" }}
        whileInView={{ opacity: 1, translateX: "0%" }}
        transition={{ duration: 1.5 }}
        className="text-2xl font-bold"
      >
        Shop Our Top Categories
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{ duration: 1.5 }}
        className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5"
      >
        <Link to="/smartphone">
          <div className="relative">
            <img
              className="h-52 w-44 object-cover rounded-md transition duration-300 hover:scale-105"
              src="https://img.freepik.com/premium-psd/smart-phone-pro-max-mockup_312099-269.jpg"
              alt=""
            />
            <p className="font-bold text-lg absolute top-2 left-6 lg:left-8 text-gray-100">
              Smartphone
            </p>
          </div>
        </Link>
        <Link to="/laptop">
          <div className="relative">
            <img
              className="h-52 w-44 object-cover rounded-md transition duration-300 hover:scale-105"
              src="https://goodmockups.com/wp-content/uploads/2020/02/Free-Isometric-Microsoft-Surface-Laptop-Mockup-PSD-File.jpg"
              alt=""
            />
            <p className="font-bold text-lg absolute top-2 left-12 lg:left-14 text-gray-100">
              Laptop
            </p>
          </div>
        </Link>
        <Link to="/smartwatch">
          <div className="relative">
            <img
              className="h-52 w-44 object-cover rounded-md transition duration-300 hover:scale-105"
              src="https://about.att.com/ecms/dam/snr/2020/September2020/InStory/AppleWatch-Series6-hero-2up-Twitter.png"
              alt=""
            />
            <p className="font-bold text-lg absolute top-2 left-8 lg:left-10 text-gray-100">
              Smartwatch
            </p>
          </div>
        </Link>
        <Link to="/tablet">
          <div className="relative">
            <img
              className="h-52 w-44 object-cover rounded-md transition duration-300 hover:scale-105"
              src="https://img.rawpixel.com/private/static/images/website/2022-12/rm437-a37-mockup.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=005f2f13ae799a55ff8346ad8885d68b"
              alt=""
            />
            <p className="font-bold text-lg absolute top-2 left-12 lg:left-14 text-gray-100">
              Tablet
            </p>
          </div>
        </Link>
        <Link to="/drone">
          <div className="relative">
            <img
              className="h-52 w-44 object-cover rounded-md transition duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=452&q=80"
              alt=""
            />
            <p className="font-bold text-lg absolute top-2 left-14 lg:left-16 text-gray-100">
              Drone
            </p>
          </div>
        </Link>
        <Link to="/headphone">
          <div className="relative">
            <img
              className="h-52 w-44 object-cover rounded-md transition duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
              alt=""
            />
            <p className="font-bold text-lg absolute top-2 left-8 lg:left-10 text-gray-100">
              Headphone
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default TopCategories;
