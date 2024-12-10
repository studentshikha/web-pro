
import React from "react";

interface FeaturesProps{
  features:{ id: number; icon: string; title: string; description:string }[];
   

}

const FeatureSection:React.FC<FeaturesProps> = ({features}) => {

  return (

<div className="bg-gradient-to-b from-pink-50 to-white py-16 ">
  <div className="container mx-auto text-center px-4">
           {/* Header */}
         <h2 className="text-3xl cabin md:text-4xl font-semibold mb-4 transition-all duration-300 hover:text-teal-500 hover:scale-105">
          On s&apos;occupe de <span className="text-teal-500 hover:text-purple-600 hover:shadow-md hover:shadow-purple-100   transition-colors duration-300">tout</span>
         </h2>

          <p className="text-gray-500 mb-12 transition-all inter duration-300 hover:text-gray-700 hover:scale-105">
          Office ipsum you must be muted. It meeting commitment busy pain.
          </p>


        {/* Features cards */}
       <div className="flex justify-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl">
          {features.map((feature, index) => 
            ( <div key={feature.id}>
             <div
        key={index}
        className="flex flex-col items-center p-4  rounded-lg shadow-md transition-transform transform hover:scale-125 duration-300 hover:shadow-2xl" 
         >
         <div className="text-4xl text-purple-500 mb-4">
          <img
          src={feature.icon}
          />
         </div>
        <h3 className="text-lg font-medium  mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-500 inter ">{feature.description}</p>
             </div>
            </div>
             ))}
     </div>
        </div>
   </div>
</div>

  );
};

export default FeatureSection;
