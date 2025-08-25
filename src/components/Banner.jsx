import React from "react";
import grenkurti from "../assets/blanckkurti.png";
import yellowkurti from "../assets/blanckyellow.png";

const Banner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r  py-20 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wide">
          ✌ 𝓜𝓸𝓻𝓮 𝓔𝔁𝓲𝓽𝓲𝓷𝓰 𝓚𝓾𝓻𝓽𝓲𝓼 ✌
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our latest collection of stylish kurtis designed for every
          season and occasion. Perfect blend of tradition & modern style!
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Image 1 */}
        <div className="relative group w-full lg:w-1/2">
          <img
            src={grenkurti}
            alt="Green Kurti"
            className="rounded-2xl shadow-lg w-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Image 2 */}
        <div className="relative group w-full lg:w-1/2">
          <img
            src={yellowkurti}
            alt="Yellow Kurti"
            className="rounded-2xl shadow-lg w-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
