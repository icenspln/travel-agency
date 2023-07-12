import { Navbar } from "../components/Navbar";
import decore from "../assets/decore.png";
import { BsFillPlayFill } from "react-icons/bs";
import image from "../assets/image.png";
export function Landing() {
  return (
    <>
      <img className="decore" src={decore} alt="" />
      <Navbar />
      <main className="main flex flex-col md:flex-row first-letter:justify-between align-center gap-3">
        <div>
          <h4>Best Destinations around the world</h4>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div>
            <a href="">
              <button>Find out more</button>
            </a>
            <div>
              <a href="">
                <BsFillPlayFill />
              </a>
              <span>Play Demo</span>
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </main>
    </>
  );
}
