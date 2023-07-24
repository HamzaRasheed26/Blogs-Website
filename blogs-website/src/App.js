import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBlog from "./Components/addBlog";
import Home from "./Components/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/NewBlog" component={AddBlog} />
      </Switch>
    </div>
  );
}

export default App;
