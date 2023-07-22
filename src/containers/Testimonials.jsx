import { useState } from "react";
import { Subtitle } from "../components/Subtitle";
import { TestCard } from "../components/TestCard";
import { Title } from "../components/Title";
import { motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";

export function Testimonials() {
  const [show, setShow] = useState(0);

  const cards = [
    {
      name: "zahra",
      img: test1,
      comment:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no",
      country: "Germany",
    },
    {
      name: "mile",
      img: test2,
      comment:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no",
      country: "Austria",
    },
  ];

  function handleUpArrow() {
    setShow((prev) => {
      if (prev == cards.length - 1) {
        return --prev;
      }
      if (prev <= cards.length - 1) {
        return ++prev;
      }
    });
  }
  function handleDownArrow() {
    setShow((prev) => {
      if (prev == cards.length - 1) {
        return --prev;
      }
      if (prev <= cards.length - 1) {
        return ++prev;
      }
    });
  }

  return (
    <section className="-mt-20 mb-28 flex flex-col md:flex-row gap-20 md:gap-10 justify-between items-start">
      <div>
        <Subtitle>TESTIMONIALS</Subtitle>
        <Title>What people say about Us.</Title>
      </div>
      <div>
        <div className="flex flex-row gap-1">
          {cards.map((card, index) => {
            if (show == index) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60, y: 60 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                >
                  <TestCard {...card} />
                </motion.div>
              );
            }
          })}
          <div className="flex flex-col gap-5">
            <div onClick={handleUpArrow} className="cursor-pointer">
              <IoIosArrowUp className="text-4xl text-darkBlue " />
            </div>
            <div onClick={handleDownArrow} className="cursor-pointer">
              <IoIosArrowDown className="text-4xl text-grayish" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
