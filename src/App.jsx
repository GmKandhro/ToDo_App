// App.js
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import "./index.css"
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = {
        text: taskInput,
        id: Date.now(),
        completed: false,
      };
      setTasks([...tasks, newTask ]);


      setTaskInput("");
      // console.log(newTask);

      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    }

  };

  // Function to load tasks from local storage when the component mounts
useEffect(() => {
  const storedTasks = localStorage.getItem('tasks');
  console.log(storedTasks);
  if (storedTasks) {
    setTasks(JSON.parse(storedTasks));
  }
}, []);

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
        
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
   <> 
   {/* <Navbar/> */}
   <div className="min-h-screen bg-gray-300 flex flex-col justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-96 overflow-y-scroll max-h-[250px] box">
        <h1 className="text-2xl font-semibold mb-4">Todo App</h1>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg outline-none"
            placeholder="Add a new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      </div>
    </div>
    </>
  );
}

export default App;
