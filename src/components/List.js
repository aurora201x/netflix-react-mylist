import React from "react";

export default function List({ item: { id, img, title }, name, handleChange }) {
  // let handleChange = () => {
  //   if (props.remove) {
  //     return props.remove(props.item.id);
  //   }
  //   if (props.add) {
  //     return props.add(props.item.id);
  //   }
  // };

  return (
    <li className={name} key={id}>
      <div className="movie">
        <img src={img} alt={title} />
        <div className={"title"}>{title}</div>
        <div className="btn">
          <button
            className={name}
            onClick={() => {
              handleChange(id, name);
            }}
          >
            {name === "My List" ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </li>
  );
}
