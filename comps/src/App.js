import Link from "./components/Link";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
function App() {
  return (
    <div>
      <Link to="/accordion">go to accordion</Link>
      <Link to="/dropdown">go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <Accordion />
        </Route>
        <Route path="/dropdown">
          <Dropdown />
        </Route>
      </div>
    </div>
  );
}
export default App;
