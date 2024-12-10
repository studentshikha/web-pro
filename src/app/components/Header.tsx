import React from 'react';

interface ArrayProps
 { array: string[],
  nav: { id: number;
     name: string;
      image: string }[]};

const Header: React.FC<ArrayProps>= ({nav,array}) => {

  
  return (
    <div>
        <div className="bg-white inter border-b border-gray-300 ">
         <div className="container mx-auto px-4  py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src = "/Group.png"
            alt="weframetech logo"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full  bg-gray-200 rounded-lg py-4 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2  focus:bg-blue-100"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <img src="/search-lg.png"/>
            </button>
          </div>
        </div>

           {/* navigation buttons */}
         <div className="flex items-center md:space-x-6 inter">
          {
            nav.map((item)=>
              <div key={item.id} className="flex gap-2">
            <img src={item.image} className="w-4 h-4"/>
            <button className="hidden md:inline-block text-sm text-gray-700 hover:text-blue-500">
              {item.name} 
            </button>
            </div>
            )}
         
           <img src="/circle.png"/>
          <button className="bg-[#0093D0] text-white px-4 flex gap-2  py-4 rounded text-sm">
          <img src="/shopping.png"/>
            Panier
          </button>

           <img src="/Avatar.png"/>
          <button className="text-gray-700 text-sm flex items-center space-x-1">
            <span>FR</span>
          </button>

        </div>
      </div>

     {/* navigation links */}
      <div className="bg-white mt-2">
        <div className="container mx-auto py-2 px-4 flex flex-wrap justify-between text-sm text-[#6B7280]" >
         {array.map((item)=>
         <a href="#" className="hover:text-[#0093D0]  font-medium relative group uppercase"
         >{item} <span className=" absolute left-0 -bottom-2 w-0 h-0.5 bg-[#0093D0] transition-all duration-300 group-hover:w-full"></span>
         </a>
        )}
        </div>
      </div>
     </div> 
 </div>
  )
};

export default Header;