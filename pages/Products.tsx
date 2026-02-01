import { useState, useEffect } from "react";

interface Product {
  name: string;
  price: string;
  priceUSD: string;
  available: boolean;
  images: string[];
}

const products: Product[] = [
    {
    name: "MGH Gaming Laptop",
    price: "16,000 SCR",
    priceUSD: "1,100 USD",
    available: true,
    images: ["/img/product/lap1.jpeg",  "/img/product/lap3.png", "/img/product/lap4.jpeg","/img/product/lap2.png"],
  },
  {
    name: "MGH Thumblers",
    price: "270 SCR",
    priceUSD: "19 USD",
    available: true,
    images: ["/img/product/cup.jpeg"],
  },
  {
    name: "MGH Smart Glasses",
    price: "270 SCR",
    priceUSD: "19 USD",
    available: true,
    images: ["/img/product/glass1.jpeg", "/img/product/glass2.jpeg", "/img/product/glass3.jpeg"],
  },


];

export default function Products() {
  return (
    <section id="products" className="md:py-16 md:px-4 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-500 mb-2">
            Our Product Collection
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-100 to-silver-400">
              Innovations.
            </span>
          </h1>

          <p className="max-w-xl text-silver-300 text-lg font-medium leading-relaxed">
            Discover cutting-edge technology and lifestyle products crafted for modern living.
          </p>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4px bg-silver-600/20 shadow-2xl rounded-4xl overflow-hidden">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-change images every 3 seconds (3000ms)
  useEffect(() => {
    if (!isAutoPlaying || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % product.images.length;
        setMainImage(product.images[nextIndex]);
        return nextIndex;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, product.images]);

  // Handle manual image selection
  const handleImageSelect = (img: string, index: number) => {
    setMainImage(img);
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually selects
    
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Smooth scroll to contact section
  const handleLearnMore = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="group  flex flex-col h-full transition-all duration-500 hover:z-10 relative border border-silver-500/20 hover:border-cyan-500/60">
      


      {/* Main Showcase - Image size remains 4/5 aspect ratio as requested */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0d0d0d] group/display">
        
        {/* Technical Background Detail */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        
        {/* Main Image */}
        <div className="relative w-full h-full p-10 z-10 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/display:scale-110">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Technical Bezel Overlay */}
        <div className="absolute inset-0 border-[1px] border-white/5 m-2 pointer-events-none z-20" />
        
        {/* Floating Thumbnail Bar (Refined Glassmorphism) */}
        {product.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 p-1.5 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover/display:opacity-100 transition-all duration-500 translate-y-4 group-hover/display:translate-y-0">
            {product.images.map((img, i) => (
              <button
                key={i}
                onMouseEnter={() => handleImageSelect(img, i)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  mainImage === img 
                    ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-black scale-90" 
                    : "opacity-40 hover:opacity-100 scale-100"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>
        )}

        {/* Navigation Sidebar (Industrial Pill Indicators) */}
        {product.images.length > 1 && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
            {product.images.map((img, i) => (
              <button
                key={i}
                onMouseEnter={() => handleImageSelect(img, i)}
                className="relative group/pill flex items-center justify-end h-6 w-4"
              >

                
                <div className={`transition-all duration-500 rounded-full ${
                  mainImage === img 
                    ? "w-1 h-6 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                    : "w-[1px] h-3 bg-silver-600/30 group-hover/pill:bg-silver-400"
                }`} />
              </button>
            ))}
          </div>
        )}


      </div>

      {/* Content Panel */}
      <div className="p-8 flex flex-col flex-grow border-t bg-[#0d0d0d]/70  border-silver-600/10">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold text-white mb-2 tracking-tighter group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>
          <div className="w-8 h-0.5 bg-cyan-600 group-hover:w-full transition-all duration-700 opacity-50" />
        </div>

        <div className="mt-auto space-y-6">
          {/* Price Layout */}
          <div className="flex flex-col">
            <span className="text-xs  text-silver-200 uppercase tracking-widest mb-1">Market Value</span>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light text-white tracking-tighter">{product.price}</span>
              {product.priceUSD && (
                <span className="text-silver-300 text-sm  italic">/ {product.priceUSD}</span>
              )}
            </div>
          </div>

          {/* Obel Pay Integration */}
          
            <div className="  text-center  py-3 px-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
              <span className="text-[14px] text-silver-300 font-medium tracking-wide uppercase">
                Buy Now Pay Later with  <span className="text-cyan-400 font-bold">OBEL PAY</span>
              </span>
            </div>


            <button 
              onClick={handleLearnMore}
              className="w-full relative overflow-hidden py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(34,211,238,0.2)]"
            >
              <span className="relative z-10">Learn More</span>
            </button>

        </div>
      </div>
    </div>
  );
}