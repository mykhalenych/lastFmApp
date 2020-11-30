import React from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Main from "./components/main/Main";
import ArtistCard from "./components/artistCard/ArtistCard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search/:id" component={Search} />
        <Route path="/:id" component={ArtistCard} />
      </Switch>
    </div>
  );
}

export default App;
