import React from 'react'

const Todo = ({todos,handleComplete}) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                complete
              </button>

            )}
            {todo.completed && <span> ✅</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo