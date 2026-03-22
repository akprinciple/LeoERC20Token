
import Header from './Header';
import Faucet from './Faucet';
// import AdminMint from './AdminMint';

const Index = () => {
  // Mock states for wallet connection
 

  return (
    <div className="min-h-screen bg-[#F7FBF9] font-sans text-gray-800">
      
      {/* Navigation */}
      
      <Header />

       {/* Web3 Tools Section */}
      <section className="bg-[#F7FBF9] py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-emerald-950 mb-6">Ecosystem Tools</h2>
            <p className="text-lg text-gray-600">Access the daily faucet or manage the contract (Admin only).</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Faucet />
            {/* <AdminMint /> */}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-white py-24 rounded-t-[4rem] border-t border-emerald-50 mt-8 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-emerald-950 mb-6">Why Choose Leocoin?</h2>
            <p className="text-lg text-gray-600">Built on the standard Ethereum ERC20 architecture, LEO offers unmatched security combined with a vision for a greener planet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Eco-Friendly', 
                desc: 'A portion of transaction fees goes directly to vetted carbon offset and tree-planting programs.' 
              },
              { 
                title: 'ERC20 Secure', 
                desc: 'Built on the robust Ethereum standard, ensuring maximum compatibility across wallets and DEXs.' 
              },
              { 
                title: 'Community Driven', 
                desc: 'Holders of LEO get voting rights on future sustainable investments within our DAO.' 
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-[#F7FBF9] border border-emerald-50 hover:shadow-xl hover:shadow-emerald-100 hover:-translate-y-2 transition duration-300 ease-out">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 font-bold text-2xl shadow-md shadow-emerald-200">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      
    </div>
  );
};

export default Index;
