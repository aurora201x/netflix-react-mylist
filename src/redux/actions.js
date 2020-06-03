const ADD = "ADD";
const REMOVE = "REMOVE";
const GET = "GET";

const addToList = (id) => {
  return {
    type: ADD,
    id,
  };
};

const removeFromList = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

const getData = (data) => {
  return {
    type: GET,
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

export { ADD, REMOVE, GET, addToList, removeFromList, fetchData };
