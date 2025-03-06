import { useState } from "react";
import "./../styles/walletconnect.css";

const WalletConnect = () => {
  const [connected, setConnected] = useState(false);

  return (
    <button className="wallet-btn" onClick={() => setConnected(!connected)}>
      {connected ? "Connected" : "Connect Wallet"}
    </button>
  );
};

export default WalletConnect;
