import React from "react";

const TodoList = ({ todos, completed, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}

            {/* EXACTLY ONE button initially */}
            {!completed && index === 0 && (
              <button onClick={handleComplete}>Complete</button>
            )}

            {completed && <span>Complete</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
