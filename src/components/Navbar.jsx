import { useState } from "react";
import logo from "../assets/logo.png";
import { BiX } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import { motion } from "framer-motion";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <div className="text-dark capitalize text-md flex gap-4 items-center justify-between font-medium ">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="absolute top-0 right-0 w-[250px] h-screen bg-[#D5AEE475] p-8 z-10 flex flex-col gap-4"
      >
        <div className="flex justify-between items-center font-bold mb-5">
          <h2>Menu</h2>
          <BiX
            className="text-4xl text-white cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <ul className="flex flex-col gap-2 md:gap-3  text-white">
          <a href="#">
            <li>Destination</li>
          </a>
          <a href="#">
            <li>Hotels</li>
          </a>
          <a href="#">
            <li>Flights</li>
          </a>
          <a href="#">
            <li>Bookings</li>
          </a>
        </ul>
        <div className="flex flex-col-reverse gap-3 lg:gap-8 items-start mt-auto">
          <div className="flex items-center w-full justify-between">
            <a href="#" className="hover:text-white duration-300">
              login
            </a>
            <a
              href="#"
              className="py-[6px] px-[22px] border-2 border-black hover:border-black rounded-md hover:border-transparent hover:bg-white duration-300"
            >
              signup
            </a>
          </div>
          <select name="" id="" className="bg-transparent">
            <option value="">EN</option>
            <option value="">FR</option>
          </select>
        </div>
      </motion.div>
      <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }}>
        <CgMenuRightAlt
          className="text-4xl cursor-pointer block md:hidden"
          onClick={handleOpen}
        />
      </motion.div>
      <ul className="hidden md:flex gap-3 lg:gap-8">
        <a href="#">
          <li className="hover:text-orange duration-300">Destination</li>
        </a>
        <a href="#">
          <li className="hover:text-orange duration-300">Hotels</li>
        </a>
        <a href="#">
          <li className="hover:text-orange duration-300">Flights</li>
        </a>
        <a href="#">
          <li className="hover:text-orange duration-300">Bookings</li>
        </a>
      </ul>
      <div className="hidden md:flex gap-3 lg:gap-8 items-center">
        <a href="#" className="hover:text-orange duration-300">
          login
        </a>
        <a
          href="#"
          className="py-[6px] px-[22px] border-2 border-black rounded-md hover:border-transparent hover:bg-orange hover:text-white duration-300"
        >
          signup
        </a>
        <select name="" id="" className="bg-transparent">
          <option value="">EN</option>
          <option value="">FR</option>
        </select>
      </div>
    </div>
  );
}
