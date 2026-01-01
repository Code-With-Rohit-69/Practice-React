import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    if (task.trim().length === 0) return;
    setTodos((prev) => [...prev, { title: task, isCompleted: false }]);
    setTask("");
  };

  const handleDelete = (index) => {
    const filtered = todos.filter((todo, i) => i !== index);
    setTodos(filtered);
  };

  const handleCheck = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl text-center">Todo list</h1>
      <div className="flex flex-col items-center justify-center mt-3 gap-2">
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter Todo"
            value={task}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className="border px-2 w-[20rem]"
          />
          <button
            onClick={handleSubmit}
            className="bg-black text-white cursor-pointer w-[5rem]"
          >
            Add
          </button>
        </div>
        <ul className="todos">
          {todos.map((todo, index) => (
            <li key={index} className="">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => handleCheck(index)}
              />
              <span
                className={`${todo.isCompleted === true && "line-through"}`}
              >
                {todo.title}
              </span>
              <button
                className="bg-black text-white cursor-pointer w-[5rem]"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
