import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/home';
import CreateGene from './components/gene/CreateGene';
import GeneView from './components/gene/GeneView';
import GeneList from './components/gene/GeneList';
import CreateProtein from './components/protein/CreateProtein';
import ProteinView from './components/protein/ProteinView';
import ProteinList from './components/protein/ProteinList';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/genes" className="navbar-brand">
          immunocore
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/genes"} className="nav-link">
              Genes
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/genes/add"} className="nav-link">
              Add Gene
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/proteins"} className="nav-link">
              Proteins
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/proteins/add"} className="nav-link">
              Add Protein
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/genes" component={GeneList} />
          <Route exact path="/genes/create" component={CreateGene} />
          <Route path="/genes/:id" component={GeneView} />
          <Route exact path="/proteins" component={ProteinList} />
          <Route exact path="/proteins/create" component={CreateProtein} />
          <Route path="/proteins/:id" component={ProteinView} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
