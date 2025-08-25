import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import slide1 from "../assets/allstylekurti1.png";
import slide2 from "../assets/allstylekurti2.png";

const slides = [
  {
    image: slide1,
    title: "Fresh Deals Everyday",
    description: "Get the best deals on groceries and more.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    offer: "Free delivery - orders over $100",
  },
  {
    image: slide2,
    title: "Organic & Healthy",
    description: "Fresh organic produce straight to your doorstep.",
    buttonText: "Explore",
    buttonLink: "/organic",
    offer: "First order discount 20%",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(nextSlide, 4000);
    return () => clearInterval(id);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="shadow-top w-full px-4 lg:px-10 pt-6 shadow ">
      <div className="relative w-full aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}
          >
            {/* Desktop layout (split) */}
            <div className="hidden lg:flex w-full h-full">
              {/* Left: Text (40%) */}
              <div className="textcontainer relative w-[40%] h-full flex flex-col justify-center px-8 lg:px-12 overflow-hidden">
                {/* Text Content */}
                <div className="relative z-10">
                  <span className="offertext text-sm bg-blue-200 text-white rounded-full px-3 py-1 mb-3 w-fit">
                    {currentSlide.offer}
                  </span>
                  <h2 className="offertext text-3xl lg:text-4xl font-bold mb-3 text-blue-300">
                    {currentSlide.title}
                  </h2>
                  <p className="offertext text-base lg:text-lg mb-5 max-w-md text-blue-300">
                    {currentSlide.description}
                  </p>
                  <Link
                    to={currentSlide.buttonLink}
                    className="text-btn shadow-2xl text-base bg-blue-200 hover:bg-green-700 text-white px-5 py-2 rounded-md transition w-fit"
                  >
                    {currentSlide.buttonText}
                  </Link>
                </div>

                {/* Fade overlay on the right edge */}
                <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r  to-transparent pointer-events-none" />
              </div>

              {/* Right: Image (60%) with left fade */}
              <div className="w-[65%] h-full relative">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover shadow-2xl"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to left, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to left, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>

            {/* Mobile layout (stacked) */}
            <div className="block lg:hidden relative w-full h-full">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-4 right-4 text-white">
                <span className="text-xs bg-red-900 text-white rounded-full px-3 py-1 mb-2 inline-block">
                  {currentSlide.offer}
                </span>
                <h2 className="text-2xl font-bold mb-2">
                  {currentSlide.title}
                </h2>
                <p className="text-sm mb-4">{currentSlide.description}</p>
                <Link
                  to={currentSlide.buttonLink}
                  className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                >
                  {currentSlide.buttonText}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-3" : "bg-gray-400 w-2"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <div className='flex grid-cols-2 mt-10'>
//         <div className='bg-black'>
//           <img src={slide1} alt="" className='relative'/>
//           <h1 className='img-text absolute top-50'>
//             hell
//           </h1>

//         </div>
//         <div>
//           <img src={slide2} alt="" />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Hero
