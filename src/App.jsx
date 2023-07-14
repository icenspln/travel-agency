import { Navbar } from "./components/Navbar";
import { Landing } from "./containers/landing";

function App() {
  return (
    <main>
      <div className="container mx-auto px-8 py-8 overflow-clip">
        <Landing />
      </div>
    </main>
  );
}

export default App;
