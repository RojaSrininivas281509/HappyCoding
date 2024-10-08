import React, {useState} from 'react';
import './kanban.css';

export default function KanbanDashboard(){
    const [tasks, setTasks]=useState([]);
    const[newTask, setNewTask]= useState('');
    const[error, setError]= useState('');
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const createTask=()=>{
        if(newTask.trim() ===''){
            setError('Please Enter Task');
            return;
        }
        const duplicateCheck = tasks.some((item)=>item.task.toLowerCase() === newTask.toLowerCase().trim());
        if(duplicateCheck){
            setError('TaskName already Existed');
        }else{
            setTasks((prevTask)=>[...prevTask,{task:newTask}])
            setNewTask('');
            setError('');
        }
    }

    const toggleList = (index, type) => {
      tasks.map((item, i)=> index===i?
        setInProgress((prevTask)=>[...prevTask,{task:item.task}]): '');
        const updatedTasks= tasks.filter((itm,i)=> index!==i);
        setTasks(updatedTasks);

    
    };
    const toggleDeleteClicked =(index, type) =>{
        if(type ==='task'){
            const deleted = tasks.filter((item,i)=> i !==index)
            setTasks(deleted);
        }else if(type === 'inprogress'){
            const deleted = inProgress.filter((item,i)=> i !==index)
            setInProgress(deleted);

        }else{
            const deleted = completed.filter((item,i)=> i !==index)
            setCompleted(deleted);
        }
        
    }
    const toggleCompletedList =(index, type)=>{
        inProgress.map((item, i)=> index===i?
        setCompleted((prevTask)=>[...prevTask,{task:item.task}]): '');
        const updatedTasks= tasks.filter((itm,i)=> index!==i);
        setInProgress(updatedTasks);

    }
    return(
        <div className='App'>
            <div className='input-container'>
                <h1>Kanban DashBoard</h1>
                <input type="text" placeholder='Enter new Task' value={newTask} onChange={(e)=>setNewTask(e.target.value)}></input>
                <button onClick={createTask}>Create New Task</button>
            </div>
            {error && <p1>{error}</p1>}
            <div className='card-container'>
                <div className='card'>
                    <ul>
                        {
                            tasks && tasks.map((item, i) => 
                            <li key={i}>
                                {item.task}
                                <span  onClick={()=>toggleList(i,'task')}>Task</span>
                                <button onClick={()=>toggleDeleteClicked(i,'task')}>Delete</button>
                            </li>
                            )
                        }
                    </ul> 
                </div>
                <div className='card'>
                    <ul>
                        {
                            inProgress && inProgress.map((item, i) => 
                            <li key={i}>
                                {item.task}
                                <span  onClick={()=>toggleCompletedList(i,'inprogress')}>inProgress</span>
                                <button onClick={()=>toggleDeleteClicked(i,'inprogress')}>Delete</button>
                            </li>
                            )
                        }
                    </ul> 
                </div>
                <div className='card'>
                    <ul>
                        {
                            completed && completed.map((item, i) => 
                            <li key={i}>
                                {item.task}
                                <span>completed</span>
                                <button onClick={()=>toggleDeleteClicked(i,'completed')}>Delete</button>
                            </li>
                            )
                        }
                    </ul> 
                </div>
            </div> 
        </div>
    )
}