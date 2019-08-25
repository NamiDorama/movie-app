import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesRoute } from './PagesRoute';
import { HeaderTabs } from './parts';

const App = () => (
  <BrowserRouter>
    <HeaderTabs />
    <PagesRoute />
  </BrowserRouter>
);

export default App;
