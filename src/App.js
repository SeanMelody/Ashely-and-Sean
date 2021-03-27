import { BrowserRouter, Route, Switch } from 'react-router-dom';
//App pages styling
import './App.css';
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
import OurStory from "./Pages/OurStory/OurStory"
import Location from "./Pages/Location/Location"
import WeddingParty from "./Pages/WeddingParty/WeddingParty"
import PhotosOfUs from "./Pages/PhotosOfUs/PhotosOfUs"
import QandA from "./Pages/QandA/QandA"
import Registry from "./Pages/Registry/Registry"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Ashley and Sean</h1> <h5>October 9th, 2021</h5>
        <Nav />
        <hr></hr>
        <Switch>
          <Route path="/registry" component={Registry} />
          <Route path="/covidq-a" component={QandA} />
          <Route path="/weddingparty" component={WeddingParty} />
          <Route path="/photosofus" component={PhotosOfUs} />
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
