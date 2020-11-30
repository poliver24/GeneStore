// Single Protein View
import React, { useState, useEffect } from "react";
import ProteinDataService from "../../services/ProteinService";

const Protein = (props) => {
  const initialProteinState = {
    id: null,
    name: "",
    sequence: "",
    related_gene: null
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
          related_gene: response.data.gene
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProtein({ ...currentProtein, [name]: value });
  };

  const updateProtein = () => {
    ProteinDataService.updateProtein(currentProtein.id, currentProtein)
      .then((response) => {
        console.log(response.data);
        setMessage("The Protein was updated successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteProtein = () => {
    ProteinDataService.deleteProtein(currentProtein.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/Proteins/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProtein ? (
        <div className="edit-form">
          <h4>Protein</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentProtein.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sequence">Sequence</label>
              <input
                type="text"
                className="form-control"
                id="sequence"
                name="sequence"
                value={currentProtein.sequence}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sequence">Gene</label>
              <input
                type="text"
                className="form-control"
                id="gene"
                name="gene"
                value={currentProtein.gene}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteProtein}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProtein}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Protein...</p>
        </div>
      )}
    </div>
  );
};

export default Protein;