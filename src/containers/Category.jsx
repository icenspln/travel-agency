import { CategoryCard } from "../components/CategoryCard";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import satellite from "../assets/satellite.svg";
import plane from "../assets/plane.svg";
import mic from "../assets/mic.svg";
import gear from "../assets/gear.svg";
import { motion } from "framer-motion";

export function Category() {
  return (
    <section className="category my-12">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <Subtitle>Category</Subtitle>
        <Title>We Offer Best Services</Title>
      </div>
      <div className="category--grid my-5 grid gap-9 grid-cols-auto justify-center ">
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CategoryCard
            img={satellite}
            heading="Calculated Weather"
            paragraph="Built Wicket longer admire do barton vanity itself do in it."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <CategoryCard
            img={plane}
            heading="Best Flights"
            paragraph="Engrossed listening. Park gate sell they west hard for the."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CategoryCard
            img={mic}
            heading="Local Events"
            paragraph="Barton vanity itself do in it. Preferd to men it engrossed listening."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <CategoryCard
            img={gear}
            heading="Customization"
            paragraph="We deliver outsourced aviation services for military customers"
          />
        </motion.div>
      </div>
    </section>
  );
}
