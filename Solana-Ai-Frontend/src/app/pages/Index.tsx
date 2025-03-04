import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-solanaBackground text-white">
      <h1 className="text-4xl font-bold text-solanaGreen">Solana AI</h1>
      <p className="text-lg text-gray-400">Your AI-powered Solana Assistant</p>
      <WalletConnect />
    </div>
  );
}
