import React from "react";

const Fact = () => {
//Hunziker & Barr (1986)
  return (
    <div className="w-full h-80 bg-gray-100 py-10 px-6 flex justify-center items-center">
      <div className="max-w-4xl border-l-4 border-r-4 border-gray-400 px-6 text-center">
        <div className="w-1 h-full bg-gray-400 mr-4"></div>
        <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed text-center">
          "Babys, die täglich ca. 3 Stunden getragen werden, <strong>weinen 43% weniger</strong> als Babys, die nicht getragen werden."
        </p>
        <div className="w-1 h-full bg-gray-400 ml-4"></div>
      </div>
    </div>
  );
};

export default Fact;
