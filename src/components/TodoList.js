import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}

            {!todo.completed && (
              <button onClick={handleComplete}>
                Complete
              </button>
            )}

            {todo.completed && <span>Complete</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
