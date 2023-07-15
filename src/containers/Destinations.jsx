import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import { DestinationCard } from "../components/DestinationCard";
import { easeInOut, motion } from "framer-motion";

export function Destinations() {
  return (
    <section className="my-20">
      <div className="flex flex-col gap-3 justify-center items-center text-center mb-16">
        <Subtitle>Top Selling</Subtitle>
        <Title>Top Destinations</Title>
      </div>
      <div className="dest-grid grid gap-9 grid-cols-auto justify-center">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <DestinationCard dest="Rome, Italty" price="5.42k" duration="10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <DestinationCard dest="Rome, Italty" price="5.42k" duration="10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <DestinationCard dest="Rome, Italty" price="5.42k" duration="10" />
        </motion.div>
      </div>
    </section>
  );
}
