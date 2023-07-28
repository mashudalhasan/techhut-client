import { motion } from "framer-motion";

const CommonBanner = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-100 to-rose-100 h-28 lg:h-56">
      <motion.h2
        initial={{ opacity: 0, translateX: "-20%" }}
        whileInView={{ opacity: 1, translateX: "0%" }}
        transition={{ duration: 1.5 }}
        className="text-2xl lg:text-5xl font-bold tracking-wide text-gray-950"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default CommonBanner;
