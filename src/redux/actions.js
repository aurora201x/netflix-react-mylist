const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";
const GET_MOVIE = "GET_MOVIE";

const addToList = (id) => {
  return {
    type: ADD_MOVIE,
    id,
  };
};

const removeFromList = (id) => {
  return {
    type: REMOVE_MOVIE,
    id,
  };
};

const getData = (data) => {
  return {
    type: GET_MOVIE,
    data,
  };
};

const fetchData = () => (dispatch) => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      dispatch(getData(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  ADD_MOVIE,
  REMOVE_MOVIE,
  GET_MOVIE,
  addToList,
  removeFromList,
  fetchData,
};
