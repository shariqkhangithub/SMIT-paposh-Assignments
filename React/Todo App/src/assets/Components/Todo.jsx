import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./Todo.css";

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [updateId, setUpdateId] = useState(null);


  function handleSave() {
    if (taskText.trim() === "") return;

    if (updateId) {
      setTaskList(
        taskList.map((t) =>
          t.id === updateId ? { ...t, title: taskText } : t
        )
      );
      setUpdateId(null);
    } else {
      const newTask = { id: Date.now(), title: taskText,  };
      setTaskList([...taskList, newTask]);
    }

    setTaskText("");
  }


  function handleDelete(id) {
    const updated = taskList.filter((t) => t.id !== id);
    setTaskList(updated);
  }


  function handleEdit(id) {
    const toEdit = taskList.find((t) => t.id === id);
    setTaskText(toEdit.title);
    setUpdateId(id);
  }





  const visibleTasks = taskList.filter((t) =>
    t.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h1 className="app-title">Todo App</h1>

      <div className="add-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={handleSave}>{updateId ? "Update" : "Add"}</button>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <ul className="task-list">
        {visibleTasks.map((t) => (
          <li key={t.id} >
            <span>{t.title}</span>
            <div className="actions">
              <button onClick={() => handleEdit(t.id)}> <FaEdit /></button>
              
              <button onClick={() => handleDelete(t.id)}> <FaTrashAlt /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;