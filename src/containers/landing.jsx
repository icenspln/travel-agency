import { Navbar } from "../components/Navbar";
import decore from "../assets/decore.png";
import { BsFillPlayFill } from "react-icons/bs";
import image from "../assets/image.png";
import { AnimatePresence, motion } from "framer-motion";
export function Landing() {
  return (
    <>
      <img className="decore" src={decore} alt="" />
      <Navbar />
      <main className="main flex flex-col md:flex-row justify-between items-center gap-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-fit lg:basis-7/12 mt-10"
        >
          <h4 className="text-lg md:text-2xl font-medium text-orange font-poppins">
            Best Destinations around the world
          </h4>
          <h1 className="font-volkhov font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkBlue tracking-tight my-3 max-w-[472px] ">
            Travel, <span className="main--word-decore">enjoy</span> and live a
            new and full life
          </h1>
          <p className="text-lightGray font-poppins text-sm md:text-lg mb-3">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex gap-3 md:gap-8 items-center justify-start my-10">
            <a href="">
              <button className="py-4 px-3  md:py-4 md:px-7 bg-yellow text-white rounded-md md:rounded-xl md:text-lg font-medium transition duration-300 hover:bg-orange button-1">
                Find out more
              </button>
            </a>
            <div className="flex items-center gap-3 md:gap-7">
              <a href="" id="play" className="button-2">
                <BsFillPlayFill className="text-white bg-orange hover:bg-yellow w-14 h-14 rounded-full p-4 transition duration-300 " />
              </a>
              <label htmlFor="play" className="font-poppins text-lightGray">
                Play Demo
              </label>
            </div>
          </div>
        </motion.div>
        <div>
          <motion.img
            src={image}
            alt=""
            initial={{ opacity: 0, x: 100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          />
        </div>
      </main>
    </>
  );
}
