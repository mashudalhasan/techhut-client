const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-rose-100">
      <div className="h-auto lg:h-96 p-5 lg:p-0 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <div className="space-y-5">
          <h2 className="text-3xl lg:text-6xl font-bold">Best Price. <br /> Authentic Product.</h2>
          <p className="text-base lg:text-lg lg:w-4/6">
            Find the best prices on genuine, top-quality products that match
            exactly what you&apos;re searching for.
          </p>
          <button className="px-3 py-2 rounded-full border border-black hover:bg-black hover:text-white transition duration-500">Learn More</button>
        </div>
        <img className="h-3/4 object-cover" src="https://i.ibb.co/9pm7sn6/bg-banner.png" alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
