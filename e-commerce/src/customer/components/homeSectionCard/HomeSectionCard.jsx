import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white round-lg shadow-lg overflow-hidden w-[15rem] mx-3 border ">
      <div className="h-[13rem] w-[10rem] round-lg ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="text-sm mt-2 text-gray-500">{product.title} </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
