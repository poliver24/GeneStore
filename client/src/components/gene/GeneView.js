// Single Gene View
import React, { useState, useEffect } from "react";
import GeneDataService from "../../services/GeneService";
import ProteinDataService from "../../services/ProteinService";
import { Link } from "react-router-dom";

const GeneView = (props) => {
  const initialGeneState = {
    id: null,
    name: "",
    sequence: "",
  };
  const [currentGene, setCurrentGene] = useState(initialGeneState);
  const [message, setMessage] = useState("");
  const [proteins, setProteins] = useState([]);

  const getGene = (id) => {
    GeneDataService.getGene(id)
      .then((response) => {
        setCurrentGene(response.data);
        getAssociatedProteins(response.data.id)
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAssociatedProteins = (geneID) => {
      ProteinDataService.getAssociatedProteins(geneID)
        .then((response) => {
            setProteins(response.data);
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
  };

  useEffect(() => {
    getGene(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentGene({ ...currentGene, [name]: value });
  };

  return (
    <div>
      {currentGene ? (
        <div className="edit-form">
          <h3>Gene: {currentGene.name}</h3>
          <br />
          <form>
            <div className="form-group">
              <h5>Associated Proteins</h5>

              <ul className="form-group">
                {proteins &&
                  proteins.map((protein, index) => (
                    <li key={index}>
                      <a href={"/proteins/" + protein.id}>{protein.name}</a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="form-group">
              <h5>Sequence</h5>
              {currentGene.sequence}
            </div>
          </form>

          <Link
            to={"/genes/update/" + currentGene.id}
            className="badge badge-warning">
            Edit
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>An Error has occurred...</p>
        </div>
      )}
    </div>
  );
};

export default GeneView;
