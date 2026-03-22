import React from 'react'
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import useHooks from '../Hooks/useHooks'
import Connected from './Connected'
import NotConnected from './NotConnected'
import { formatAddress } from '../util';

const Header = () => {
const {isConnected, handleConnect, address, name, symbol, totalSupply, maxSupply} = useHooks()
 
 
  
  return (
    <>  
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">
            L
          </div>
          <span className="text-2xl font-extrabold text-emerald-950 tracking-tight">
            {name}
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-semibold text-emerald-900/70">
          <a href="#" className="hover:text-emerald-600 transition">Home</a>
          <a href="#" className="hover:text-emerald-600 transition">Tokenomics</a>
          <a href="#" className="hover:text-emerald-600 transition">Ecosystem</a>
          <a href="#" className="hover:text-emerald-600 transition">Roadmap</a>
        </div>
        
        
        <button
          onClick={handleConnect}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-2.5 rounded-full font-bold transition shadow-lg shadow-emerald-200"
        >
          {address ? formatAddress(address) : "Connect Wallet"}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content (Copy & CTA) */}
        <div className="lg:w-1/2 space-y-8 z-10">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase border border-emerald-200">
            🌿 {name} •  {symbol}
          </div>
          <div className="block  text-emerald-800 px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase border border-emerald-200">
            🌿 Circulating Supply: {totalSupply} / {maxSupply}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-emerald-950 leading-[1.1]">
            Empowering a <span className="text-emerald-600">Sustainable</span> Future.
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            {name} ({symbol}) is a next-generation token designed to power eco-friendly decentralized applications and reward community-driven sustainability initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition shadow-xl shadow-emerald-200">
              Buy {symbol} Now
            </button>
            <button className="bg-white border-2 border-emerald-100 hover:border-emerald-600 text-emerald-800 px-8 py-4 rounded-full font-bold transition">
              Read Whitepaper
            </button>
          </div>
        </div>

        {/* Right Content (ERC20 Dashboard/App Preview) */}
        <div className="lg:w-1/2 w-full max-w-md relative mx-auto">
          {/* Decorative Background Shape */}
          <div className="absolute inset-0 bg-emerald-200 rounded-[2.5rem] transform rotate-3 scale-105 opacity-60"></div>
          
          <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-50">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-emerald-950">{name} Dashboard</h3>
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-bold">Mainnet</span>
            </div>

            {address ? (
              <Connected />
            ) : (
              <NotConnected/>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header