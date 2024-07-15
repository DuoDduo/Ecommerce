import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-700 to-slate-900 mb-8">
      <div className="py-12 flex flex-col md:flex-row items-center justify-evenly">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Festive Sales
          </h1>
          <p className="text-lg md:text-xl text-white mb-2 animate-fadeIn delay-1s">
            Enjoy discounts on selected items
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold animate-fadeIn delay-2s">
            UP TO 50% OFF
          </p>
        </div>
        <div className="w-full md:w-1/2 relative aspect-video">
          <Image
            src="/banner-image.png"
            alt="Banner Image"
            layout="fill"
            objectFit="contain"
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
