const ADD = "ADD";
const REMOVE = "REMOVE";
const GET = "GET";

const add = id => {
  return {
    type: ADD,
    id
  };
};

const remove = id => {
  return {
    type: REMOVE,
    id
  };
};

const getData = data => {
  return {
    type: GET,
    data
  };
};

const fetchData = () => dispatch => {
  fetch("./data.json")
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      dispatch(getData(data));
    })
    .catch(err => {
      console.log(err);
    });
};

export { ADD, REMOVE, GET, add, remove, fetchData };
