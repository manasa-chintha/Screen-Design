import "../App.css";
import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/Services"  />
        <Route exact path="/therevolution" component="" />
        <Route exact path="/AboutUs" component="" />
        <Route exact path="/Contac Us" component="" />
        <Route exact path="/SignIn" component="" />
        <Route exact path="/HOME1"  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
