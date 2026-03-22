import React, { useState } from 'react';
import useHooks from '../Hooks/useHooks';

const Faucet = () => {
  const { address, makeClaim } = useHooks();
  const [loading, setLoading] = useState(false);

  const handleClaim = async () => {
    setLoading(true);
    await makeClaim();
    setLoading(false);
  };

  return (
    <div className="p-8 bg-white rounded-[2rem] shadow-xl border border-emerald-50">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mr-4">
          💧
        </div>
        <h3 className="text-2xl font-bold text-emerald-950">Daily Faucet</h3>
      </div>
      <p className="text-gray-600 mb-6">Claim your free LEO tokens once every 24 hours to participate in the ecosystem.</p>
      
      <button 
        onClick={handleClaim}
        disabled={loading || !address}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white py-4 rounded-xl font-bold transition shadow-lg"
      >
        {loading ? "Claiming..." : address ? "Claim Tokens" : "Connect Wallet to Claim"}
      </button>
    </div>
  );
};

export default Faucet;