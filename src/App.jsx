import { Navbar } from "./components/Navbar";
import { Landing } from "./containers/landing";

function App() {
  return (
    <main className="overflow-hidden">
      <div className="container mx-auto px-8 py-8">
        <Landing />
      </div>
    </main>
  );
}

export default App;
