import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/home';
import GeneView from "./components/gene/GeneView";
import CreateGene from './components/gene/CreateGene';
import UpdateGene from './components/gene/UpdateGene';
import GeneList from './components/gene/GeneList';
import CreateProtein from './components/protein/CreateProtein';
import ProteinView from './components/protein/ProteinView';
import ProteinList from './components/protein/ProteinList';
import UpdateProtein from "./components/protein/UpdateProtein";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <a href="/" className="navbar-brand">
          GENE STORE
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/genes"} className="nav-link">
              GENES
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/proteins"} className="nav-link">
              PROTEINS
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/genes" component={GeneList} />
          <Route exact path="/genes/create" component={CreateGene} />
          <Route exact path="/genes/:id" component={GeneView} />
          <Route exact path="/genes/update/:id" component={UpdateGene} />
          <Route exact path="/proteins" component={ProteinList} />
          <Route exact path="/proteins/create" component={CreateProtein} />
          <Route exact path="/proteins/:id" component={ProteinView} />
          <Route exact path="/proteins/update/:id" component={UpdateProtein} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
