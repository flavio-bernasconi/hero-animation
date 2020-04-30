import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from "./Intro";
import About from "./About";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <AnimateSharedLayout type="crossfade">
      <Intro />
      <div className="container">
        <List selectedId={id} />
        <AnimatePresence>
          {id && imageHasLoaded && <Item id={id} key="item" />}
        </AnimatePresence>
      </div>
      <About />
    </AnimateSharedLayout>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Route path={["/:id", "/"]} component={Store} />
      </Router>
    </div>
  );
}
