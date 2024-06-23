"use client";
import React from "react";

const DepositNFTPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white">
          Step1: Deposit your SNFT to the contract
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nftId"
              className="block text-sm font-medium text-white"
            >
              NFT ID
            </label>
            <input
              type="text"
              id="nftId"
              name="nftId"
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
              placeholder="NFT ID"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositNFTPage;
