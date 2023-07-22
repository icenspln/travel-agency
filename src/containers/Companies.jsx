import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import { motion } from "framer-motion";

export function Companies() {
  return (
    <section className="flex gap-4 flex-col md:flex-row md:gap-10 justify-around items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "all" }}
        className="h-24 min-h-24 max-h-24 overflow-hidden flex items-center"
        whileHover={{ scale: 1.2 }}
      >
        <img src={company1} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "all" }}
        className="h-24 min-h-24 max-h-24 overflow-hidden flex items-center"
        whileHover={{ scale: 1.2 }}
      >
        <img src={company2} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "all" }}
        className="company-box h-24 min-h-24 max-h-24 flex items-center"
        whileHover={{ scale: 1.2 }}
      >
        <img src={company3} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "all" }}
        className="h-24 min-h-24 max-h-24 overflow-hidden flex items-center"
        whileHover={{ scale: 1.2 }}
      >
        <img src={company4} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: "all" }}
        className="h-24 min-h-24 max-h-24 overflow-hidden flex items-center"
        whileHover={{ scale: 1.2 }}
      >
        <img src={company5} alt="" />
      </motion.div>
    </section>
  );
}
