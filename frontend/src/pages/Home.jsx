import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

// Sample Product Data
const products = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `₹${(i + 1) * 10}`,
  image: `../public/images/image${(i % 5) + 1}.jpeg`, // replace with your images
  description:
    "High-quality agricultural product suitable for farmers and businesses."
}));

// Product Card Component
const ProductCard = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0px) scale(1)"
      : "translateY(50px) scale(0.95)",
    config: { mass: 1, tension: 120, friction: 18 },
  });

  return (
    <animated.div ref={ref} style={spring} className="relative cursor-pointer group">
      {/* Card with website background */}
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] object-contain"
        />
        {/* Gradient overlay for smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-30 pointer-events-none"></div>

        {/* Buy Now Button */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                     opacity-100 sm:opacity-0 group-hover:opacity-100 
                     transition duration-500"
        >
          <button className="bg-white/80 backdrop-blur-md text-green-700 font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-white transition text-sm sm:text-base">
            Buy Now →
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-3 text-center">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-yellow-600 font-bold">{product.price}</p>
        <p className="text-gray-700 text-sm">{product.description}</p>
      </div>
    </animated.div>
  );
};

// Hero Section Component
const Hero = () => {
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(1.05)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 180, friction: 28 },
  });

  return (
    <animated.div
      style={spring}
      className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center text-center overflow-hidden w-full"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0AuqubPpLw89VY0JXYQuhpK_LqRYF0I1mg&s"
        alt="Agriculture"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="relative z-10 px-4 max-w-2xl text-white w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Explore Agriculture Products
        </h1>
        <p className="text-base sm:text-lg mb-6">
          High-quality agricultural products for farmers and businesses. Browse and buy now!
        </p>
        <a
          href="#products"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition"
        >
          Explore Products
        </a>
      </div>
    </animated.div>
  );
};

// Home Component
const Home = () => {
  return (
    <>
    <section id="home" className="pt-20">
      <Hero />
      </section>
      <section id="product" className="pt-10 px-6">
        <div id="products" className="py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      </section>
     </>
      
    
  );
};

export default Home;
