
import React from 'react';

interface ProductDescriptionProps
 { description: string; }

const ProductDescription: React.FC<ProductDescriptionProps> = ({description}) => {

  return (
 <div className="p-2 flex-col md:flex-row sm:flex-mt-[150px] lg:-mt-[110px] gap-4 mb-12 flex items-center">
    {/* Description Section */}
    <div className="bg-white inter rounded-md w-full md:w-[48%] p-4 ">
      <h2 className="text-lg font-medium mb-2">Description produit</h2>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>

    <div className="w-full inter  md:w-[50%] ">

    {/* LIVRAISONS Section */}
    <div className="bg-gray-200 shadow-md rounded-md mt-4 hover:bg-gray-300 md:mt-0  transition">
      <div className="flex justify-between items-center p-[20px]">
        <h3 className="font-medium text-gray-800">LIVRAISONS</h3>
        <span className="text-gray-600 ">+</span>
      </div>
    </div>

    {/* QUESTIONS Section */}
    <div className="bg-gray-200 rounded-md mt-2 hover:bg-gray-300 transition">
      <div className="flex justify-between items-center p-[20px]">
        <h3 className="font-medium text-gray-800">QUESTIONS</h3>
        <span className="text-gray-600">+</span>
      </div>
    </div>
     </div>

 </div>
  )
 };

export default ProductDescription