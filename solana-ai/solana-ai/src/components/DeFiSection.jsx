/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./../styles/sections.css";

const DeFiSection = () => {
  return (
    <motion.section id="defi" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>DeFi AI Assistant</h2>
      <p>Get real-time APY comparisons and gasless swaps.</p>
    </motion.section>
  );
};

export default DeFiSection;
