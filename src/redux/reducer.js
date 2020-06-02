import { GET, ADD, REMOVE } from "./actions";

const initialState = { mylist: [], recommendations: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      // debugger;
      return { ...action.data };
    case ADD:
      // When click "Add" button, the movie will be removed from "recommendations" and added to "mylist"
      return {
        recommendations: state.recommendations.filter(
          item => item.id !== action.id
        ),
        mylist: [
          state.recommendations.filter(item => item.id === action.id)[0],
          ...state.mylist
        ]
      };
    case REMOVE:
      // When click "Remove" button, the movie will be added to "recommendations" and removed from "mylist"
      return {
        recommendations: [
          ...state.recommendations,
          state.mylist.filter(item => item.id === action.id)[0]
        ],
        mylist: state.mylist.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
