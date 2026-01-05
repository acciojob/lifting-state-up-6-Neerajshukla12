import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [completed, setCompleted] = useState(false);

  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a React app" },
    { id: 3, text: "Deploy the React app" }
  ];

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>

      <TodoList
        todos={todos}
        completed={completed}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
