import React, { useState } from "react";
const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}&nbsp;&nbsp;
          {!todo.isCompleted && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default TodoList;


// import React from "react";

// const TodoList = ({ todos, handleComplete }) => {
//   return (
//     <div>
//       <h2>Child Component</h2>

//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             {todo.text}  
//             {!todo.completed ? (
//               <button onClick={() => handleComplete(todo.id)}>
//                 Complete
//               </button>
//             ) : (
//               <span>Complete</span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
