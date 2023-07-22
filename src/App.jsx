import { Booking } from "./containers/Booking";
import { Category } from "./containers/Category";
import { Companies } from "./containers/Companies";
import { Destinations } from "./containers/Destinations";
import { Subscribe } from "./containers/Subscribe";
import { Testimonials } from "./containers/Testimonials";
import { Landing } from "./containers/landing";

function App() {
  return (
    <main className="overflow-x-hidden">
      <div className="container mx-auto px-8 py-8 ">
        <Landing />
        <Category />
        <Destinations />
        <Booking />
        <Testimonials />
        <Companies />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}

export default App;
