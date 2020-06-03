import React, { useEffect } from "react";
import { connect } from "react-redux";

import List from "./component/List";
import { fetchData, removeFromList, addToList } from "./redux/actions";

function App(props) {
  const { fetchData, removeFromList, addToList } = props;

  useEffect(() => {
    fetchData(); // Get the initial data from json server database
  }, []);

  // Add & Remove in one function
  const handleChange = (id, name) => {
    if (name === "My List") {
      return removeFromList(id);
    }
    if (name === "Recommendation") {
      return addToList(id);
    }
  };

  const arr = [props.mylist, props.recommendations];
  const arrName = ["My List", "Recommendation"];

  return (
    <div>
      {arr.map((list, index) => {
        return (
          <React.Fragment key={arrName[index]}>
            <h2 className="list-header">{arrName[index]}</h2>
            <ul className="flex-container">
              {list.map((item) => {
                return (
                  <List
                    item={item}
                    name={arrName[index]}
                    handleChange={handleChange}
                    key={item.title}
                  />
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}

      <section>
        <ol className="list-title">
          My List:{" "}
          {props.mylist.map((item) => {
            return (
              <li
                key={item.title}
                className="list-bottom"
              >{`${item.title} | `}</li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

//  connect react with redux

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
    addToList: (id) => dispatch(addToList(id)),
    removeFromList: (id) => dispatch(removeFromList(id)),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
