/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        The Future of Solana AI
      </motion.h1>
      <motion.p initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        Your AI assistant for DeFi, NFTs, and DevTools.
      </motion.p>
    </section>
  );
};

export default Hero;
