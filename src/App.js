import React,{useState} from 'react';
import './App.css';

export default function App(){
  const[tasks, setTasks] = useState([]);
  const[newTask, setNewTask] =useState('');
  const[error, setError] =useState('');
  const addTask = () => {
    if (newTask.trim() === '') {
      setError('Task cannot be empty');
      return;
    }

    const taskExists = tasks.some((task) => task.text.toLowerCase() === newTask.toLowerCase().trim());
    if (taskExists) {
      setError('Task already exists!');
    } else {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
      setError(''); // Clear error message after successful addition
    }
  };

  function toggleClicked(index){
    const updatedTask= tasks.map((item,i)=> i===index ? {...item, completed:!item.completed}:item);
    setTasks(updatedTask);
  }
  function toggleDeleteClicked(index){
    const updatedTask= tasks.filter((item,i)=> i!==index );
    setTasks(updatedTask);
  }

  return(
    <div className='App'>
      <div className='input-container'>
        <h1>To-Do List</h1>
        <input type='text'  placeholder='Add New Task' value={newTask} onChange={(e)=>setNewTask(e.target.value)}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
      {error && <p className="error-message">{error}</p>}
      </div>
      <ul>
        {tasks && tasks.map((item, index)=>
          <li key={index} className={item.completed? 'completed':''}>
            <span onClick={()=>toggleClicked(index)}>{item.text}</span>
            <button onClick={()=>toggleDeleteClicked(index)}>Delete</button>
          </li>

        )}
      </ul>
    </div>
  )
}