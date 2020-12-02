// Single Protein View
import React, { useState, useEffect } from "react";
import ProteinDataService from "../../services/ProteinService";
import { Link } from "react-router-dom";

import './ProteinView.css'

const ProteinView = (props) => {
  const initialProteinState = {
    id: null,
    name: "",
    sequence: "",
    related_gene: []
  };
  const [currentProtein, setCurrentProtein] = useState(initialProteinState);
  const [message, setMessage] = useState("");

  const getProtein = (id) => {
    ProteinDataService.getProtein(id)
      .then((response) => {
        let data = {
          id: response.data.id,
          name: response.data.name,
          sequence: response.data.sequence,
          related_gene: response.data.related_gene
        }
        setCurrentProtein(data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProtein(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      {currentProtein ? (
        <div className="edit-form">
          <h4>Protein: {currentProtein.name}</h4>
          <br />
          <form>
            <div className="form-group">
              <h5>Related Gene</h5>
              <a href={"/genes/" + currentProtein.related_gene.id}>
                {currentProtein.related_gene.name}
              </a>
            </div>
            <div className="form-group">
              <h5>Sequence</h5>
              <div className="sequence">{currentProtein.sequence}</div>
            </div>
          </form>

          <Link
            to={"/proteins/update/" + currentProtein.id}
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

export default ProteinView;