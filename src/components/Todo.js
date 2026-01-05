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
                Complete
              </button>

            )}
            {todo.completed &&  <button onClick={() => handleComplete(todo.id)}>
                Done
              </button>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo