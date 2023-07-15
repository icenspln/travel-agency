import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import booking from "../assets/booking.png";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import { anticipate, motion } from "framer-motion";

export function Booking() {
  const stepsAnimation = {
    hidden: {
      x: -80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 2,
    },
  };

  return (
    <section className="mt-10 mb-32">
      <div className="flex flex-col md:flex-row gap-4 items-start justify-between ">
        <div>
          <div className="flex flex-col gap-3">
            <Subtitle>Easy and Fast</Subtitle>
            <Title>Book your next trip in 3 easy steps</Title>
          </div>
          <div className="my-8 flex flex-col gap-5">
            <motion.div
              className="flex gap-3 max-w-[400px] "
              variants={stepsAnimation}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, ease: anticipate }}
            >
              <div className="basis-1/4">
                <img src={step1} alt="" />
              </div>
              <div>
                <h1 className="font-medium font-poppins text-lightGray">
                  Choose Destination
                </h1>
                <p className=" text-lightGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-3 max-w-[400px]"
              variants={stepsAnimation}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, ease: anticipate }}
            >
              <div className="basis-1/4">
                <img src={step2} alt="" />
              </div>
              <div>
                <h1 className="font-medium font-poppins text-lightGray">
                  Make Payment
                </h1>
                <p className=" text-lightGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-3 max-w-[400px]"
              variants={stepsAnimation}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, ease: anticipate }}
            >
              <div className="basis-1/4">
                <img src={step3} alt="" />
              </div>
              <div>
                <h1 className="font-medium font-poppins text-lightGray">
                  Reach Airport on Selected Date
                </h1>
                <p className=" text-lightGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="booking-decore">
          <img src={booking} alt="" />
        </div>
      </div>
    </section>
  );
}
