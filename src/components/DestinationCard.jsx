import { MdNavigation } from "react-icons/md";
import { motion } from "framer-motion";

export function DestinationCard({ dest, price, duration }) {
  return (
    <article className="dest-card flex rounded-[24px] w-[314px] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
      <div className="pt-4 pb-8 px-6 bg-white mt-auto w-full font-poppins  text-lightGray">
        <div className="flex justify-between gap-3 items-center">
          <p>{dest}</p>
          <p>${price}</p>
        </div>
        <h4 className="flex gap-3 mt-2">
          <motion.span
            animate={{ rotate: 45 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <MdNavigation className="inline text-black" />
          </motion.span>
          {duration} Days Trip
        </h4>
      </div>
    </article>
  );
}
