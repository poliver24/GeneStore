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

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          dnaDB
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/genes"} className="nav-link">
              Genes
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/proteins"} className="nav-link">
              Proteins
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
          <Route path="/proteins/:id" component={ProteinView} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
