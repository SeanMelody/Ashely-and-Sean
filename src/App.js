import { BrowserRouter, Route, Switch } from 'react-router-dom';
//App pages styling
import './App.css';
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
import OurStory from "./Pages/OurStory/OurStory"
import Location from "./Pages/Location/Location"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <hr></hr>
        <Switch>
          <Route path="/location" component={Location} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/ourstory" component={OurStory} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
