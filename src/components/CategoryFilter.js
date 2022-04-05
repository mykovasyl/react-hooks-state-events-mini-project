import React from "react";

function CategoryFilter({ categories, selectedCategory, setCategory }) {

  const categoryList = categories.map(category => {
    const classNameAssigned = category === selectedCategory ? 'selected' : null
    return <button className={classNameAssigned} key={category} onClick={() => setCategory(category)}>{category}</button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
