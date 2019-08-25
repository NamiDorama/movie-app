import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, NotFound, NowPlayingFilms, PopularFilms, TopRatedFilms } from './pages';

export const PagesRoute = () => (
  <Switch>
    <Route path="/" exact render={MainPage} />
    <Route path="/popular/" exact render={PopularFilms} />
    <Route path="/top-rated/" exact render={TopRatedFilms} />
    <Route path="/now-playing/" exact render={NowPlayingFilms} />
    <Route render={NotFound} />
  </Switch>
);
