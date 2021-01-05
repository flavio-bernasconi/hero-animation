import React, { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Intro } from "./Intro";
import About from "./About";
import { Footer } from "./Footer";
import { items } from "./data";
import { fetchDataFromPrismic } from "./helpers";

function Store({ match }) {
  const [projects, setprojects] = useState([]);
  let { id } = match.params;

  (async () => {
    const results = await fetchDataFromPrismic();
    results.sort(function (a, b) {
      const x = a.data.order[0].text;
      const y = b.data.order[0].text;
      return x - y;
    });
    setprojects(results);
  })();
  return (
    <AnimateSharedLayout type="crossfade">
      <Intro />
      <div className="container">
        <List selectedId={id} listProjects={projects} />
        <AnimatePresence>
          {id && projects.length > 0 && (
            <Item id={id} key="item" projects={projects} />
          )}
        </AnimatePresence>
      </div>
      <About />
      <Footer />
    </AnimateSharedLayout>
  );
}

export default function App() {
  return (
    <div className="full">
      <Router>
        <Route path={["/:id", "/"]} component={Store} />
      </Router>
    </div>
  );
}
