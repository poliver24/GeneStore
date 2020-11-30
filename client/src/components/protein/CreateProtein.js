// Create New Protein View
import React, { useState } from "react";
import ProteinDataService from "../../services/ProteinService";

const CreateProtein = () => {
  const initialProteinState = {
    id: null,
    name: "",
    sequence: "",
    related_gene: null,
  };
  const [protein, setProtein] = useState(initialProteinState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProtein({ ...protein, [name]: value });
  };

  const saveProtein = () => {
    var data = {
      name: protein.name,
      sequence: protein.sequence,
      gene: protein.gene,
    };

    ProteinDataService.createProtein(data)
      .then((response) => {
        setProtein({
          id: response.data.id,
          name: response.data.name,
          sequence: response.data.sequence,
          gene: response.data.gene,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createProtein = () => {
    setProtein(initialProteinState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={createProtein}>
            New
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={protein.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sequence">Sequence</label>
            <input
              type="text"
              className="form-control"
              id="sequence"
              required
              value={protein.sequence}
              onChange={handleInputChange}
              name="sequence"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gene">Gene</label>
            <input
              type="text"
              className="form-control"
              id="sequence"
              required
              value={protein.gene}
              onChange={handleInputChange}
              name="gene"
            />
          </div>

          <button onClick={saveProtein} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateProtein;