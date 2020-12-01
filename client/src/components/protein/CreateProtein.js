// Create New Protein View
import React, { useState } from "react";
import ProteinDataService from "../../services/ProteinService";

import { useForm } from "react-hook-form";

const styles = {}

const CreateProtein = () => {
  const initialProteinState = {
    id: null,
    name: "",
    sequence: "",
    related_gene: null,
  };
  const [protein, setProtein] = useState(initialProteinState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { register, handleSubmit, errors } = useForm(); 

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
    setError(false)
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
        setError(true)
      });
  };

  const createProtein = () => {
    setProtein(initialProteinState);
    setSubmitted(false);
  };

  function onSubmit(){
    saveProtein();
  }

  return (
    <div className="submit-form">
      {error && <div style={{ color: `red` }}>This Protein Already Exists</div>}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={createProtein}>
            New
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
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
              ref={register({
                required: true,
              })}
              style={{
                ...styles.input,
                borderColor: errors.name && "red",
              }}
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
              ref={register({
                required: true,
                pattern: /[A-Z]/,
              })}
              style={{
                ...styles.input,
                borderColor: errors.sequence && "red",
              }}
            />
            {errors.sequence && "Sequence can only contain letters"}
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
              ref={register({
                required: true,
              })}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateProtein;