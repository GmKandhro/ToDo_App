/* eslint-disable react/prop-types */
// TaskList.js

// eslint-disable-next-line react/prop-types
function TaskList({ tasks, toggleTask, removeTask }) {
    
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-3 bg-gray-200 rounded-md ${
            task.completed ? 'line-through' : ''
          }`}
        >
          <span onClick={() => toggleTask(task.id)}>{task.text}</span>
          <button
            onClick={() => removeTask(task.id)}
            className="text-red-500 hover:text-red-700 cursor-pointer"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

















// import  { useEffect, useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   const addTodo = () => {
//     if (task.trim() === '') return;
//     setTodos([...todos, task]);
//     setTask('');
//     const a = localStorage.setItem("todos", JSON.stringify([...todos, task]))
//     console.log(a);
//   };

//   useEffect(() => {
//    const storedData = localStorage.getItem("todos")
//    if (storedData) {
//     setTodos(JSON.parse(storedData))
//    }
//   }, [])
  
//   const deleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     console.log(newTodos);
//     // localStorage.setItem('todos', JSON.stringify(newTodos));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Todo List</h1>
//       <div className="flex space-x-2 mb-4">
//         <input
//           type="text"
//           className="w-64 border rounded p-2"
//           placeholder="Add a task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white p-2 rounded"
//           onClick={addTodo}
//         >
//           Add
//         </button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} className="flex items-center justify-between bg-white p-2 shadow mb-2">
//             {todo}
//             <button
//               className="text-red-500"
//               onClick={() => deleteTodo(index)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

