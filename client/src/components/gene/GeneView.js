// Single Gene View
import React, { useState, useEffect } from 'react';
import GeneDataService from '../../services/GeneService';

const Gene = props => {
    const initialGeneState = {
        id: null,
        name: "",
        sequence: ""
    };
    const [currentGene, setCurrentGene] = useState(initialGeneState);
    const [message, setMessage] = useState("");

    const getGene = id => {
        GeneDataService.getGene(id)
            .then(response => {
                setCurrentGene(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            });
    };

    useEffect(() => {
        getGene(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentGene({ ...currentGene, [name]: value});
    };

    const updateGene = () => {
        GeneDataService.updateGene(currentGene.id, currentGene)
            .then(response => {
                console.log(response.data);
                setMessage('The Gene was updated successfully');
            })
            .catch(e => {
                console.log(e)
            });
    };

    const deleteGene = () => {
        GeneDataService.deleteGene(currentGene.id)
            .then(response => {
                console.log(response.data);
                props.history.push('/genes/');
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
      <div>
        {currentGene ? (
          <div className="edit-form">
            <h4>Gene</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={currentGene.name}
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
                  value={currentGene.sequence}
                  onChange={handleInputChange}
                />
              </div>

            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={deleteGene}>
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={updateGene}>
              Update
            </button>
            <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Gene...</p>
          </div>
        )}
      </div>
    );
}

export default Gene