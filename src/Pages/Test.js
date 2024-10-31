import React,{useState} from "react";


const Employee = [{ EmpName:'Roja', EmpSkill:'React'}]

const ParentComponent=()=> {
  const [data, setData]= useState('');
  function getName(){
    Employee.map((item)=>  setData(item.EmpName))
    return data;
  }
  console.log(data);
 
  return (
    <div>
      <button onClick={getName}>getData</button>
      <ChildComponent input={data}></ChildComponent>
    </div>
  );
}
const ChildComponent=({input})=>{
  console.log(input);
  return(
    <div>
      <h1>EmployeeName:{input}</h1>
    </div>
   
  )

}
export default ParentComponent;