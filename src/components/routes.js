import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById("root")
);
