import React from 'react';

function AddTaskForm({newTask, setNewTask, addTask}) {
  
  return (
    <>  
     <div className="row">
      <div className="col-9">
        <input className="form-control"
               type="text"
               value={newTask} 
               onChange={(e) =>setNewTask(e.target.value)}
             />
      </div>

        <div className="col-3 col-auto">
          <button onClick={addTask} className="btn btn-success w-100">Add Task</button>
        </div>
    </div>
    </>
  )
}

export default AddTaskForm;