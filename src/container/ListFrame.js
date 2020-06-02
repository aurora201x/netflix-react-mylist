import React from "react";
import { connect } from "react-redux";

import List from "../components/List";
import { fetchData, remove, add } from "../redux/actions";

// Since "fetch" is needed, class component is necessary here to use componentDidMount unless using Hook
class ListFrame extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.fetchData(); // Get the initial data from json server database
  }

  // Add & Remove in one function
  handleChange = (id, name) => {
    if (name === "My List") {
      return this.props.remove(id);
    }
    if (name === "Recommendation") {
      return this.props.add(id);
    }
  };

  render() {
    const arr = [this.props.mylist, this.props.recommendations];
    const arrName = ["My List", "Recommendation"];

    return (
      <div>
        {arr.map((list, index) => {
          return (
            <React.Fragment key={arrName[index]}>
              <h2 className="List_header">{arrName[index]}</h2>
              <ul className="flex-container">
                {list.map((item) => {
                  return (
                    <List
                      item={item}
                      name={arrName[index]}
                      handleChange={this.handleChange}
                      key={item.title}
                    />
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}

        <footer>
          <ol className="list-title">
            My List:{" "}
            {this.props.mylist.map((item) => {
              return (
                <li
                  key={item.title}
                  className="list-bottom"
                >{`${item.title} | `}</li>
              );
            })}
          </ol>
        </footer>
      </div>
    );
  }
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
    add: (id) => dispatch(add(id)),
    remove: (id) => dispatch(remove(id)),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(ListFrame);

export default Container;
