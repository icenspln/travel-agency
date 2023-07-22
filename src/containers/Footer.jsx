import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import logo from "../assets/jadoo.svg";

export function Footer() {
  return (
    <>
      <footer className="my-10 font-poppins">
        <div className="my-10 flex flex-col md:flex-row gap-10 md:gap-4 items-start justify-between">
          <section className="flex flex-col gap-8">
            <div id="logo">
              <img src={logo} alt="" />
            </div>
            <p className="text-blueish text-sm">
              Book your trip in minute, get full Control for much longer.
            </p>
          </section>
          <section className="flex  flex-col sm:flex-row gap-10">
            <div>
              <h3 className="font-bold text-dark text-xl mb-8">Company</h3>
              <ul className="flex flex-col gap-3 text-blueish">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-dark text-xl mb-8">Contact</h3>
              <ul className="flex flex-col gap-3 text-blueish">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-dark text-xl mb-8">More</h3>
              <ul className="flex flex-col gap-3 text-blueish">
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <p className="text-blueish text-sm">Checkout our social media</p>
            <div className="flex gap-3 items-center justify-start">
              <div>
                <BiLogoFacebook />
              </div>
              <div>
                <AiOutlineInstagram />
              </div>
              <div>
                <AiOutlineTwitter />
              </div>
            </div>
          </section>
        </div>
      </footer>
      <p className="footer">All rights reserved@jadoo.co</p>
    </>
  );
}
