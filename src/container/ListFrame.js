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

  // handleRemove = id => {
  //   this.props.remove(id); // Remove from my list
  // };
  // handleAdd = id => {
  //   this.props.add(id); // add recommendation to my list
  // };

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
    console.log("arr:", arr);
    return (
      <div>
        {arr.map((list, index) => {
          return (
            <React.Fragment key={arrName[index]}>
              <h2 className="List_header">{arrName[index]}</h2>
              <ul className="flex-container">
                {list.map(item => {
                  return (
                    <List
                      item={item}
                      name={arrName[index]}
                      // value={"Add"}
                      handleChange={this.handleChange}
                      key={item.title}
                    />
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
        {/* <div>
        <h2 className="MyList_header">My List</h2>

        <ul className="flex-container">
          {this.props.mylist.map(item => {
            // console.log("item:", item);
            return (
              <List
                item={item}
                value={"Remove"}
                name={"mylist"}
                remove={this.handleRemove}
              />
            );
          })}
        </ul>
        <h2 className="Recommendation_header">Recommendation</h2>

        <ul className="flex-container">
          {this.props.recommendations.map(item => {
            return (
              <List
                item={item}
                name={"recommendation"}
                value={"Add"}
                add={this.handleAdd}
              />
            );
          })}
        </ul> */}
        <footer>
          <ol className="list-title">
            My List:{" "}
            {this.props.mylist.map(item => {
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

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    add: id => dispatch(add(id)),
    remove: id => dispatch(remove(id))
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(ListFrame);

export default Container;
