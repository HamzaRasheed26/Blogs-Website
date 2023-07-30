import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBlog from "./Components/addBlog";
import Home from "./Components/home";
import BlogList from "./Components/blogList";
import ViewBlog from "./Components/viewBlog";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/NewBlog" component={AddBlog} />
        <Route exact path="/Blogs" component={BlogList} />
        <Route exact path="/Blog/:id" component={ViewBlog} />
      </Switch>
    </div>
  );
}

export default App;
