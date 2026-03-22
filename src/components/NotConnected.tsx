import React, { useState } from 'react'
import useHooks from '../Hooks/useHooks';



const NotConnected = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const {handleConnect} = useHooks();

  return (
    <>
        <div className="text-center py-14 px-4">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">Wallet Disconnected</h3>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">Connect your web3 wallet securely to view your balance and manage your Leocoin.</p>
                <button 
                  onClick={handleConnect} 
                  className="w-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 py-4 rounded-xl font-bold transition"
                >
                  Click to Connect
                </button>
              </div>
    </>
  )
}

export default NotConnected;