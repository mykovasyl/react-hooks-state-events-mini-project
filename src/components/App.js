import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  function handleTaskDelete(taskToDelete) {
    const newTaskList = tasks.filter(task => {
      return task.text !== taskToDelete
    })
    setTasks(newTaskList)
  }

  const tasksToDisplay = tasks.filter(task => category === 'All' || task.category === category)

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== 'All')} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay} handleTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
