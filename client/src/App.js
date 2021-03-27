import { BrowserRouter, Route, Switch } from 'react-router-dom';
//App pages styling
import './App.css';
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          {/* <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
