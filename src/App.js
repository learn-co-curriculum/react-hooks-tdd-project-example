import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/users/:username">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
