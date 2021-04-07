import React from "react";
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
// import Registry from "./Pages/Registry/Registry"
import rsvp from "./Pages/RSVP/RSVP"
import Messages from "./Pages/Messages/Messages"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1 className="google-font section header-title">Ashley and Sean</h1> <h3 className="google-font">October 9th, 2021</h3>
        <Nav />
        <hr></hr>
        <Switch>
          <Route path="/messages" component={Messages} />
          <Route path="/rsvp" component={rsvp} />
          {/* <Route path="/registry" component={Registry} /> */}
          <Route path="/covidq-a" component={QandA} />
          <Route path="/weddingparty" component={WeddingParty} />
          <Route path="/photosofus" component={PhotosOfUs} />
          <Route path="/location" component={Location} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/ourstory" component={OurStory} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
