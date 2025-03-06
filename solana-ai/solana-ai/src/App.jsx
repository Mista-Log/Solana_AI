import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WalletConnect from "./components/WalletConnect";
import DeFiSection from "./components/DeFiSection";
import NFTSection from "./components/NFTSection";
import DevSection from "./components/DevSection";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WalletConnect />
      <DeFiSection />
      <NFTSection />
      <DevSection />
      <Chatbot />
    </div>
  );
}

export default App;
