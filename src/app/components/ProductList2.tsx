import { products1 } from "../data";

const ProductList2 = () => {
  


 
  return (
<div className="w-full py-8 cabin bg-gray-50">
        {/* Header */}
         <div className="flex justify-between items-center px-6">
        <h2 className="text-2xl font-semibold cabin">Ces produits pourraient vous intéresser</h2>
        <a
          href="#"
          className="text-sm font-medium underline mr-8 hover:text-gray-600 transition"
        >
          VOIR TOUTE LA COLLECTION
        </a>
          </div>


           {/* cards lists */}
          <div className="relative mt-6">
     
        {/* Cards Container */}
        <div
        
          className="flex overflow-x-auto space-x-6 px-6 scrollbar-hide scroll-smooth"
        >
          {products1.map((product,index) => (
            <div
              key={product.id}
              className="min-w-[480px] h-[426px]  bg-gray-100 group rounded-lg shadow-md p-4 flex-shrink-0  transition-transform hover:shadow-2xl duration-300"
            >
         
              <div className="relative  flex  animate-fadeIn items-center justify-center gap-6 p-[14px] bg-gray-100 "
               style={{
                animationDelay: `${index * 0.9}s`,
              }}
              
              >
  
                <button className="absolute top-2 right-2 w-8 h-8   rounded-full flex items-center justify-center hover:scale-125 transition duration-300">
                <img className="" src="/icons.png"/>
                </button>
                <img
                  src="/table.png"
                  alt={product.title}
                  className=" h-[180px] mt-10 w-[60%]  mix-blend-multiply object-cover rounded-md p-4 transition-transform duration-300 transform hover:scale-110 "
                />

                <span className="absolute top-2 inter left-2 bg-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                  {product.category}
                </span>
              </div>
              <div className=" mt-[92px]   bg-gray-50 ">
                <div className="flex justify-between">
                <h3 className="text-base playfair_display font-medium">
                  {product.title}
                </h3>
                <span className="text-xl font-medium inter">{product.price}</span>
                </div>

                <div className="mt-2 flex justify-between inter items-center">
                <p className="text-sm text-gray-500">
                  {product.pricePerPiece} · RÉF : {product.ref}
                </p>
                  <span className="text-sm bg-gray-200  px-3 py-1 rounded-full">
                    {product.pieces}
                  </span>
                </div>
 {/* hover on the cards this button section shows */}
                <div className="absolute -mt-32  bg-white rounded-lg w-[28%] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2 p-[4px]">Que</span>
                   <div className="flex p-[4px] m-[4px] rounded-l-lg items-center justify-between w-full bg-gray-100 space-x-2 inter ">
      <button className=" w-8 h-8 rounded-full flex items-center  justify-center text-xl">
        −
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

           </div>
 </div>
  )
};


export default ProductList2;