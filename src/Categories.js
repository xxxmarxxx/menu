import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}

      {/* <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button> */}

      {/* to moje tak sobie wymyslilem */}
      {/* <button className="filter-btn" onClick={() => filterItems("lunch")}>
        lauch
      </button>
      <button className="filter-btn" onClick={() => filterItems("shakes")}>
      shakes
      </button> */}
    </div>
  );
};

export default Categories;
