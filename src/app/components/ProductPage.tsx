import React from "react";


const ProductPage = () => {

  return (

 <div className="min-h-screen p-6 mt-12">
   <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
       <div className=" bg-gray-100 flex justify-center items-center rounded-md ">
          <div className="flex flex-col gap-2 absolute py-4 top-[210px]  left-[40px]">
            <img
              src="/table.png"
              alt="Thumbnail 1"
              className="w-16 h-16  border border-gray-300 border-none rounded-lg"
            />
            <img
              src="/table.png"
              alt="Thumbnail 2"
              className="w-16 h-16   border border-gray-300 border-none rounded-lg opacity-70"
            />
            <img
              src="/table.png"
              alt="Thumbnail 3"
              className="w-16 h-16  border border-gray-300  border-none rounded-lg opacity-60"
            />
            <img
              src="/table.png"
              alt="Thumbnail 3"
              className="w-16 h-16   border border-gray-300  border-none rounded-lg opacity-40"
            />
           </div>

          {/* Main Image */}
          <div className="flex justify-center items-center">
            <img
              src="/Location Cheese big picture 1.svg"
              alt="Main Product"
              className="w-full  relative mix-blend-multiply"
            />
          </div>
       </div>

        {/* Right Section */}
       <div className="flex flex-col justify-between space-y-6">  
         <div>
           <h1 className="text-2xl playfair_display font-medium text-gray-800">
            Cheese - appareil à raclette 1/2 roue
           </h1>
           <div className="text-2xl inter  my-2 font-medium text-gray-800">
            39,50€ <span className="text-sm text-gray-500">/ pièce</span>
           </div>

           <div className="flex inter items-center  justify-between space-x-8  my-2  border-t border-b border-gray-200">
            <div className="flex items-center w-[30%] justify-center gap-2 py-4 space-x-1">
              <span><img src="/Capa_1.png"/></span>
              <span className="text-gray-600"> 20cm</span>
              <span><img src="/Frame.png"/></span>
              <span className="text-gray-600">50cm</span>
            </div>
             <div className="text-gray-400">REF: VABGN5</div>
            </div>

 
           <div className="text-gray-600 inter mt-6 ">
            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
            <p>Réglable en hauteur</p>
            <p>Appareil à raclette professionnel</p>
            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
            <p className="mt-4">220V</p>
            <p>900W</p>
            </div>
         </div>

            {/* below buttons */}
           <div className="flex items-center inter space-x-4 ">
            <div className="flex items-center border   border-gray-300 rounded-md">
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-200">
                -
              </button>
              <span className="px-6 py-2  border-gray-300">
                1
              </span>
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-200">
                +
              </button>   
            </div>
             <button className="px-6 py-2 bg-[#5CD2DD] text-white font-medium rounded-md hover:bg-blue-400 transition w-full">
              AJOUTER AU PANIER
            </button>
           </div>
       </div>

    </div>
 </div>
  );
};

export default ProductPage;
