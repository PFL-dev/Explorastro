import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
import Timeline from 'src/components/Timeline';

export default function Explorastro() {
  return (
    <div className="explorastro">
      <Header />
      <Main />
      <Switch>
        <Route exact path="/">
          <Redirect to="/timeline" />
        </Route>
        <Route exact path="/timeline">
          <Timeline />
        </Route>
        <Route>
          {/* Ajouter la 404 ici (redirige temporairement vers la timeline) */}
          <Redirect to="/timeline" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
