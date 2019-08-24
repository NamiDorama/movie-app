import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Header with tabs</h1>
      <Switch>
        <Route path="/" exact render={() => <h2>Main Page</h2>} />
        <Route path="/popular/" exact render={() => <h2>Popular Films</h2>} />
        <Route path="/top-rated/" exact render={() => <h2>Top Rated Films</h2>} />
        <Route path="/now-playing/" exact render={() => <h2>Now Playing Films</h2>} />
        <Route render={() => <h2>Page Not Found</h2>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
