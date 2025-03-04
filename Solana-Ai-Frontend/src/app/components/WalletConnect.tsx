"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function WalletConnect() {
  const { connected, publicKey } = useWallet();
  const [userAddress, setUserAddress] = useState<string | null>(null);

  useEffect(() => {
    if (connected && publicKey) {
      setUserAddress(publicKey.toString());
    }
  }, [connected, publicKey]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <WalletMultiButton />
      {userAddress && <p className="text-solanaGreen">Connected: {userAddress}</p>}
    </div>
  );
}
