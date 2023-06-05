import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category} className={className} onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="category-filter">
      <h2>Category Filter</h2>
      <div className="category-buttons">{categoryButtons}</div>
    </div>
  );
};

export default CategoryFilter;

