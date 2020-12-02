import axios from 'axios';

export default axios.create({
  baseURL: "https://genestoredb.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});