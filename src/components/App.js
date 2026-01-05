import React, { useState } from "react";
import TodoList from "./TodoList";

const todoItems = [
  { id: 1, text: "Learn React", Completed: false },
  { id: 2, text: "Build a React App", Completd: false },
  { id: 3, text: "Deploy the React App", Completd: false },
];

const App = () => {
  const [todos, setTodos] = useState(() => todoItems);

  function handleComplete(id) {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, Completed: true } : todo ));
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App