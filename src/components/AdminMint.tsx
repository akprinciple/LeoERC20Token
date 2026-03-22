import React, { useState } from 'react';

const AdminMint = () => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    // Placeholder for actual admin mint logic
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="p-8 bg-emerald-950 rounded-[2rem] shadow-xl border border-emerald-900 text-white">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-emerald-800 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-xl mr-4">
          🛠️
        </div>
        <h3 className="text-2xl font-bold text-white">Admin Minting</h3>
      </div>
      <p className="text-emerald-200 mb-6 text-sm">Authorized personnel only. Mint new LEO tokens directly to an address.</p>
      
      <div className="space-y-4">
        <input 
          type="text" 
          onChange={(e) => setToAddress(e.target.value)}
          placeholder="Recipient Address (0x...)" 
          className="w-full px-5 py-4 rounded-xl border border-emerald-800 bg-emerald-900/50 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" 
        />
        <input 
          type="number" 
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount to mint" 
          className="w-full px-5 py-4 rounded-xl border border-emerald-800 bg-emerald-900/50 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition" 
        />
        <button 
          onClick={handleMint}
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 text-emerald-950 py-4 rounded-xl font-bold transition shadow-lg"
        >
          {loading ? "Minting..." : "Mint Tokens"}
        </button>
      </div>
    </div>
  );
};

export default AdminMint;