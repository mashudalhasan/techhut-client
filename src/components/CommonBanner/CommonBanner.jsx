const CommonBanner = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-100 to-rose-100 h-28 lg:h-56">
      <h2 className="text-2xl lg:text-5xl font-bold tracking-wide text-gray-950">
        {title}
      </h2>
    </div>
  );
};

export default CommonBanner;
