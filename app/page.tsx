import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center text-center flex-col mt-[150px] mb-[40px]">
      <div>
        <h3 className="text-lg text-gray-900">
          All RWA assets needs - one portal
        </h3>
        <h1 className="text-4xl font-medium">
          Find Better Places to Live, Work <br /> and Wonder for RWA's
        </h1>
      </div>

      <div className="flex flex-row mt-[50px] mx-auto justify-between gap-x-6">
        <div>
          <img
            className="h-[500px] w-[800px]"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D"
            alt="home"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg text-gray-900">Buy property</h3>
          <h1 className="text-4xl mt-[25px] font-medium">
            Find, Buy & Own Your <br /> Dream Home
          </h1>
          <h3 className="text-lg mt-[25px] text-gray-900">
            Explore from Apartments, land, builder floors, <br /> villas and
            more
          </h3>
          <button className="border-2 mt-[25px] text-xl font-medium bg-blue-600 text-white border-transparent rounded-lg py-[10px]">
            Explore Buying
          </button>
        </div>
      </div>

      <div className="flex flex-row mt-[50px] mx-auto justify-between gap-x-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg text-gray-900">Sell property</h3>
          <h1 className="text-4xl mt-[25px] font-medium">
            Find, Buy & Own Your <br /> Dream Home
          </h1>
          <h3 className="text-lg mt-[25px] text-gray-900">
            Explore from Apartments, land, builder floors, <br /> villas and
            more
          </h3>
          <button className="border-2 mt-[25px] text-xl font-medium bg-blue-600 text-white border-transparent rounded-lg py-[10px]">
            Sell Property
          </button>
        </div>
        <div>
          <img
            className="h-[500px] w-[800px]"
            src="https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWV8ZW58MHx8MHx8fDA%3D"
            alt="home"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
