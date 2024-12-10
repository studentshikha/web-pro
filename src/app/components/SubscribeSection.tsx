import React from "react";
interface DescriptionProps
 { description: string; }



const SubscribeSection: React.FC<DescriptionProps> = ({description}) => {

  return (
    
   <div className=" rounded-lg bg-gradient-to-b from-white to-pink-50 flex flex-col md:flex-row items-center md:items-start  md:p-12 gap-6 ">

        {/* Image Section */}

       <div className="flex-1">
        <img
          src="/Frame 204.png" 
          alt="Couch and coffee table"
          className="rounded-lg w-full   h-[30%] object-cover"
        />
       </div>

        {/*  Form Section */}

       <div className="flex-1 h-[28%] bg-pink-100 inter p-6 rounded-lg">
  
        <h2 className="text-2xl md:text-3xl  mt-4 font-semibold mb-6">
          S'inscrire & économiser <span className="text-teal-500 hover:text-purple-500 transition-colors duration-300">
            10%
          </span>
        </h2>
 
        <p className="text-[#BDA2B0] mb-6">
         {description}
        </p>
    
        <form className="flex items-center mb-6 gap-4">
          <input
            type="email"
            placeholder="john@doe.com"
            className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            S'INSCRIRE
          </button>
        </form>
       </div>
  </div>
  );
};

export default SubscribeSection;
