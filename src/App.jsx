import { Category } from "./containers/Category";
import { Destinations } from "./containers/Destinations";
import { Landing } from "./containers/landing";

function App() {
  return (
    <main className="overflow-hidden">
      <div className="container mx-auto px-8 py-8">
        <Landing />
        <Category />
        <Destinations />
      </div>
    </main>
  );
}

export default App;
