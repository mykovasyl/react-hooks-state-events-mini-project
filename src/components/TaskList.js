import React from "react";
import Task from './Task'

function TaskList({ tasks, handleTaskDelete }) {

  return (
    <div className="tasks">
      {tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} handleTaskDelete={handleTaskDelete} />})}
    </div>
  );
}

export default TaskList;
