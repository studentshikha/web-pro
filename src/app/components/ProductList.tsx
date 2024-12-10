'use client';
import { products } from '../data';
import { useRef } from 'react';

const ProductList = () => {
  
  const scrollContainer = useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if(scrollContainer.current){
    scrollContainer.current.scrollBy({ left: -320, behavior: 'smooth' });
  }
};

  const scrollRight = () => {
    if(scrollContainer.current){
    scrollContainer.current.scrollBy({ left: 320, behavior: 'smooth' });
  }
};

  

  return (
   <div className="w-full py-12 bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center cabin px-6">
        <h2 className="text-2xl font-semibold ">Articles similaires</h2>
        <a
          href="#"
          className="text-sm font-medium underline hover:text-gray-600 transition"
        >
          VOIR TOUTE LA COLLECTION
        </a>
        </div>


        {/* cards lists */}
       <div className="relative mt-6">
     
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#5CD2DD] text-black shadow-md rounded-md w-10 h-10 flex items-center justify-center z-10 hover:scale-110 hover:shadow-lg transition duration-300"
        >
          ←
        </button>
        {/* Cards Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-hidden space-x-6 px-6 scrollbar-hide scroll-smooth"
        >
          {products.map((product,index) => (
            <div
              key={product.id}
              className="min-w-[330px] h-[430px]  bg-gray-100 rounded-lg shadow-md p-4 flex-shrink-0 group transition-transform hover:shadow-2xl duration-300"
            >
           
              <div className="relative  flex  items-center justify-center animate-fadeIn p-[18px] bg-gray-100  "
              style={{
                animationDelay: `${index * 0.9}s`,
              }}>
          
                <button className="absolute top-2  right-2  rounded-full flex items-center justify-center hover:scale-125  transition duration-300">
                  <img className="" src="/icons.png"/>
                </button>
                <img
                  src="/table.png"
                  alt={product.title}
                  className="w-full h-[180px] mt-10  relative mix-blend-multiply object-cover rounded-md p-4 transition-transform duration-300 transform hover:scale-110 "
                />
         
                <span className="absolute inter top-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                  {product.category}
                </span>
              
              </div>

              <div className=" mt-[92px]  bg-gray-50 ">
                <div className="flex justify-between">
                <h3 className="text-base playfair_display font-medium ">
                  {product.title}
                </h3>
                <span className="text-xl inter font-medium">{product.price}</span>
                
           
                </div>


               
                <div className="mt-2 flex justify-between inter items-center">
                <p className="text-sm text-gray-500">
                  {product.pricePerPiece} · RÉF : {product.ref}
                </p>
                  <span className="text-sm bg-gray-200 inter  px-3 py-1 rounded-full">
                    {product.pieces}
                  </span>
                </div>
              
              {/* hover on the cards this button section shows */}
             <div className="absolute -mt-32  bg-white   rounded-lg w-[19%] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="mr-2 p-[4px]">Que</span>
    <div className="flex p-[4px] m-[4px] rounded-l-lg items-center justify-between w-full space-x-2 inter bg-gray-100">
      <button className=" w-8 h-8 rounded-full flex items-center  justify-center text-xl">
        -
      </button>
      <span className="text-lg font-medium">1</span>
      <button className=" w-8 h-8 rounded-full flex items-center justify-center text-xl">
        +
      </button>
    </div>

    <button className="bg-pink-500 text-white px-2 py-2 rounded-r-lg inter">Ajouter</button>
                </div>
          </div>
            </div>
          ))} 
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5CD2DD] text-black rounded-md shadow-md  w-10 h-10 flex items-center justify-center z-10 hover:scale-110 hover:shadow-lg transition duration-300"
        >
          →
        </button>
       </div>
  </div>
  );
};

export default ProductList