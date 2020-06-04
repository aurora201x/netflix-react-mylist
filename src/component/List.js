import React from "react";

export default function List(props) {
  const {
    item: { id, img, title },
    name,
    handleChange,
  } = props;

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
