// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
import slide1 from '../assets/blanckyellow.png';
import slide2 from '../assets/blanckkurti.png';
// import './Hero.css'

// const slides = [
//   {
//     image: slide1,
//     title: "Fresh Deals Everyday",
//     description: "Get the best deals on groceries and more.",
//     buttonText: "Shop Now",
//     buttonLink: "/shop",
//     offer: "Free delivery - orders over $100",
//   },
//   {
//     image: slide2,
//     title: "Organic & Healthy",
//     description: "Fresh organic produce straight to your doorstep.",
//     buttonText: "Explore",
//     buttonLink: "/organic",
//     offer: "First order discount 20%",
//   },
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const currentSlide = slides[currentIndex];

//   return (
//     <div className="w-full px-10 lg:px-10 pt-6">
//       <div className="relative w-full overflow-hidden rounded-2xl shadow-md h-[500px] md:h-[600px] lg:h-[700px] bg-black">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentIndex}
//             className="absolute top-0 left-0 w-full h-full"
//             initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -100) nextSlide();
//               if (info.offset.x > 100) prevSlide();
//             }}
//           >
//             {/* Full image with object-contain */}
//             <img
//               src={currentSlide.image}
//               alt={currentSlide.title}
//               className="w-full h-full object-cover"
//             />

//             {/* Text overlay */}
//             <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-6 md:px-10 lg:px-16 text-white">
//               <span className=" text-xs sm:text-sm md:text-base bg-red-900 text-white rounded-full px-3 py-1 mb-3 w-fit">
//                 {currentSlide.offer}
//               </span>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
//                 {currentSlide.title}
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg mb-4 max-w-lg">
//                 {currentSlide.description}
//               </p>
//               <Link
//                 to={currentSlide.buttonLink}
//                 className="text-sm sm:text-base bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition w-fit"
//               >
//                 {currentSlide.buttonText}
//               </Link>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Dot indicators */}
//         <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'bg-white w-3' : 'bg-gray-400 w-2'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex grid-cols-2 mt-10'>
        <div className='bg-black'>
          <img src={slide1} alt="" className='relative'/>
          <h1 className='img-text absolute top-50'>
            hell
          </h1>
          
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero

