import useHooks from '../Hooks/useHooks'



const Connected = () => {
  const {balance, settoAddress, settransferAmount, makeTransfer} = useHooks();

  return (
    <div className="space-y-6">
                <div className="p-4 bg-[#F7FBF9] rounded-2xl border border-emerald-100">
                  <p className="text-sm text-gray-500 mb-1 font-medium">Connected Account</p>
                  <p className="font-mono text-emerald-900 font-semibold"></p>
                </div>
                
                <div className="p-6 bg-emerald-600 rounded-2xl text-white shadow-md bg-gradient-to-br from-emerald-600 to-emerald-800">
                  <p className="text-sm text-emerald-100 mb-1 font-medium">Your Balance</p>
                  <h2 className="text-4xl font-extrabold tracking-tight">
                    {balance} <span className="text-xl font-medium opacity-80">LEO</span>
                  </h2>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-bold text-emerald-950">Transfer Tokens</h4>
                  <input 
                    type="text" onChange={(e)=>{settoAddress(e.target.value)}}
                    placeholder="Recipient Address (0x...)" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 focus:bg-white transition" 
                  />
                  <input 
                    type="number" onChange={(e)=>{settransferAmount(Number(e.target.value))}}
                    placeholder="Amount to send" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 focus:bg-white transition" 
                  />
                  <button onClick={makeTransfer} className="w-full bg-emerald-950 hover:bg-emerald-900 text-white py-4 rounded-xl font-bold transition shadow-lg">
                    Send LEO
                  </button>
                </div>
              </div>
  )
}

export default Connected