import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Hi everyone", status: false },
    { id: 2, title: "Something went wrong", status: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add Task

  const addTask = () => {
    let num = toDo.length + 1;
    if (newTask.length === 0) {
      return null;
    } else {
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete Task

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="something">
          <h1 className="text-center my-3">ToDo List React</h1>

          {updateData && updateData ? (
            <UpdateForm
              updateData={updateData}
              changeTask={changeTask}
              updateTask={updateTask}
              cancelUpdate={cancelUpdate}
            />
          ) : (
            <AddTaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          )}

          {toDo.length ? (
            <ToDo
              toDo={toDo}
              setUpdateData={setUpdateData}
              deleteTask={deleteTask}
            />
          ) : (
            <h5 className="mt-4">Nothing here......</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
