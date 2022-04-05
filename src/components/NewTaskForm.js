import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  const categoryOptions = categories.map(category => {
    return <option key={category}>{category}</option>
  })

  function handleFormSubmit(e) {
    e.preventDefault()
    const newTask = {
      text: text,
      category: category
    }
    onTaskFormSubmit(newTask)
    setText('')
    setCategory('Code')
  }
  
  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
