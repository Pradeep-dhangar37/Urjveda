import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Sample Product Data
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `₹${(i + 1) * 10}`,
  image: `/images/image${(i % 5) + 1}.jpeg`, // replace with your images
  description:
    "High-quality agricultural product suitable for farmers and businesses.",
  links: {
    amazon: "https://www.amazon.in/",
    indiamart: "https://www.indiamart.com/",
    flipkart: "https://www.flipkart.com/",
  },
}));

// Product Card Component
const ProductCard = ({ product, onBuy }) => {
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
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-30 pointer-events-none"></div>

        {/* Buy Now Button */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                     opacity-100 sm:opacity-0 group-hover:opacity-100 
                     transition duration-500"
        >
          <button
            onClick={() => onBuy(product)} // 🔥 open popup
            className="bg-white/80 backdrop-blur-md text-green-700 font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-white transition text-sm sm:text-base"
          >
            Buy Now →
          </button>
        </div>
      </div>

      <div className="mt-3 text-center">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-yellow-600 font-bold">{product.price}</p>
        <p className="text-gray-700 text-sm">{product.description}</p>
      </div>
    </animated.div>
  );
};

// Buy Modal Component
const BuyModal = ({ product, onClose }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 18 },
  });

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <animated.div
        style={spring}
        className="bg-white rounded-2xl p-6 w-80 sm:w-96 text-center relative shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-6">{product.description}</p>

        <div className="flex justify-around items-center gap-4">
          {/* Amazon */}
          <a
            href={product.links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-8"
            />
            <span className="text-xs text-gray-600 mt-1">Amazon</span>
          </a>

          {/* IndiaMART */}
          <a
            href={product.links.indiamart}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition"
          >
            <img
              src="https://companieslogo.com/img/orig/INDIAMART.NS-ecf147e0.png?t=1720244492"
              alt="IndiaMART"
              className="h-8"
            />
            <span className="text-xs text-gray-600 mt-1">IndiaMART</span>
          </a>

          {/* Flipkart */}
          <a
            href={product.links.flipkart}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition"
          >
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/flipkart-logo-svg-vector.svg"
              alt="Flipkart"
              className="h-8"
            />
            <span className="text-xs text-gray-600 mt-1">Flipkart</span>
          </a>
        </div>
      </animated.div>
    </div>
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
   const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
    <section id="home" className="pt-28">
      <Hero />
      </section>
      <section id="product" className="pt-28 px-6">
        <div id="products" className="py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={setSelectedProduct}/>
          ))}
        </div>
      </div>
      </section>
      {selectedProduct && (
        <BuyModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
     </>
  );
};

export default Home;
