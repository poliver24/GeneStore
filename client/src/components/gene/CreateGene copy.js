// Create Gene View
import React, { useState } from 'react';
import GeneDataService from '../../services/GeneService';

import { useForm } from "react-hook-form";

const CreateGene = () => {
    const initialGeneState = {
        id: null,
        name: "",
        sequence: ""
    };
    const [gene, setGene] = useState(initialGeneState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setGene({ ...gene, [name]: value});
    };

    const saveGene = () => {
        var data = {
            name: gene.name,
            sequence: gene.sequence
        };

        GeneDataService.createGene(data)
            .then(response => {
                setGene({
                    id: response.data.id,
                    name: response.data.name,
                    sequence: response.data.sequence
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            });
    };

    const createGene = () => {
        setGene(initialGeneState);
        setSubmitted(false);
    };

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={createGene}>
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
                value={gene.name}
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
                value={gene.sequence}
                onChange={handleInputChange}
                name="sequence"
              />
            </div>

            <button onClick={saveGene} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
};

export default CreateGene;