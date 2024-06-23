"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

declare global {
  interface Window {
    keplr: any;
    getOfflineSigner: any;
  }
}

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuHover = (item: string | null) => {
    setActive(item);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const connectKeplr = async () => {
    if (!window.keplr) {
      alert("Please install the Keplr extension");
      return;
    }

    try {
      await window.keplr.enable("mantra-hongbai-1");
      const offlineSigner = window.getOfflineSigner("mantra-hongbai-1");
      const accounts = await offlineSigner.getAccounts();
      setWalletAddress(accounts[0].address);
    } catch (error) {
      console.error(error);
    }
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 bg-black bg-opacity-90 backdrop-blur-lg rounded-full py-3 px-8 w-full max-w-7xl mx-auto",
        hidden ? "-translate-y-full" : "translate-y-0",
        className
      )}
    >
      <div className="flex justify-between items-center w-full text-white">
        {/* Left section: Logo */}
        <div className="flex items-center">
          {/* <Image
            src="/logo.jpg" // Update with your logo path
            alt="Logo"
            width={40}
            height={40}
            className="mr-7" // Square logo with margin to the right
          /> */}
          <span className="text-xl font-bold">RealFraX</span>
        </div>

        {/* Center section: Menu items */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <Link
            href="/deposit-nft"
            className="hover:text-gray-400 transition-colors"
          >
            Deposit NFT
          </Link>

          <Link
            href="/fraction"
            className="hover:text-gray-400 transition-colors"
          >
            Fractionalize NFT
          </Link>

          <Link
            href="/distribute"
            className="hover:text-gray-400 transition-colors"
          >
            Distribute
          </Link>

          <Link
            href="/withdraw"
            className="hover:text-gray-400 transition-colors"
          >
            Withdraw NFT
          </Link>

          <Link href="/claim" className="hover:text-gray-400 transition-colors">
            Claim Rewards
          </Link>
        </div>

        {/* Right section: Connect Wallet button */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          {walletAddress ? (
            <span>{shortenAddress(walletAddress)}</span>
          ) : (
            <button
              onClick={connectKeplr}
              className="bg-white text-black dark:text-black dark:bg-white rounded-full px-4 py-2"
            >
              Connect Wallet
            </button>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex md:hidden items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-white">
          <Link
            href="/"
            className="block hover:text-gray-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-400 transition-colors"
          >
            Deposit NFT
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-400 transition-colors"
          >
            Fractionalize NFT
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-400 transition-colors"
          >
            Distribute
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-400 transition-colors"
          >
            Withdraw NFT
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-400 transition-colors"
          >
            Claim Rewards
          </Link>
          <button
            onClick={connectKeplr}
            className="bg-white text-black dark:text-black dark:bg-white rounded-full px-4 py-2 w-full"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
