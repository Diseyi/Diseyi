import { useRoutes, Router } from 'solid-app-router';
import type { Component } from 'solid-js';
import {routes} from './routes';
import './App.css';

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <div class="bg-light-green">
         <Router>
        <Routes />
    </Router>
    </div>
 
  );
};

export default App;
