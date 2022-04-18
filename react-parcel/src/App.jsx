import React, { useState, useEffect } from "react";
import { listenEvent } from "@eduardoacdiogo/utils";

const App = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent("@eduardoacdiogo/react-route/todo/add-task", (event) => {
      updateTasks((oldTasks) => [...oldTasks, event.detail]);
    });
    // window.addEventListener(
    //   "@eduardoacdiogo/react-route/todo/add-task",
    //   (event) => {
    //     updateTasks((oldTasks) => [...oldTasks, event.detail]);
    //   }
    // );
  }, []);

  return (
    <>
      <h1>@eduardoacdiogo/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
