// List All Genes View
import React, { useState, useEffect } from 'react';
import GeneDataService from '../../services/GeneService';
import { Link } from 'react-router-dom';

const GenesList = () => {
    const [genes, setGenes] = useState([]);
    const [currentGene, setCurrentGene] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    useEffect(() => {
        retrieveGenes();
    }, []);

    const retrieveGenes = () => {
        GeneDataService.getGenes()
            .then(response => {
                setGenes(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveGene = (gene, index) => {
        setCurrentGene(gene);
        setCurrentIndex(index);
    };

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Genes List</h4>

          <ul className="list-group">
            {genes &&
              genes.map((gene, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveGene(gene, index)}
                  key={index}>
                  {gene.name}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentGene ? (
            <div>
              <h4>Gene</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentGene.name}
              </div>

              <Link
                to={"/genes/" + currentGene.id}
                className="badge badge-success">
                View
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Gene info will appear here...</p>
            </div>
          )}
        </div>
      </div>
    );
};

export default GenesList