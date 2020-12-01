// List all Proteins View
import React, { useState, useEffect } from 'react';
import ProteinDataService from '../../services/ProteinService';
import { Link } from 'react-router-dom';

const ProteinsList = () => {
    const [proteins, setProteins] = useState([]);
    const [currentProtein, setCurrentProtein] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    useEffect(() => {
        retrieveProteins();
    }, []);

    const retrieveProteins = () => {
        ProteinDataService.getProteins()
            .then(response => {
                setProteins(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveProtein = (protein, index) => {
        setCurrentProtein(protein);
        setCurrentIndex(index);
    };

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Proteins List</h4>

          <ul className="list-group">
            {proteins &&
              proteins.map((protein, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveProtein(protein, index)}
                  key={index}>
                  {protein.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentProtein ? (
            <div>
              <h4>Protein</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentProtein.name}
              </div>
              <div>
                <label>
                  <strong>Gene:</strong>
                </label>{" "}
                <a href={"/genes/" + currentProtein.related_gene.id}>
                  {currentProtein.related_gene.name}
                </a>
              </div>

              <Link
                to={"/proteins/" + currentProtein.id}
                className="badge badge-warning">
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Protein info will appear here...</p>
            </div>
          )}
        </div>
      </div>
    );
};

export default ProteinsList