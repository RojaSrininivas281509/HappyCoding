import React ,{useState} from'react';

const ParentComponent=()=>{
    const[data, setData]= useState('');
    const handleOnChange=(childData)=>{
        setData(childData);
    }
    return(
        <div>
            <h1>Data:{data}</h1>
            <ChildComponent onDataChange={handleOnChange}></ChildComponent>
        </div>
    )
}
const ChildComponent =({onDataChange})=>{
    const handleOnChange=(e)=>{
        onDataChange(e.target.value);
    }
    return(
        <div>
            <input type="text" placeholder='Enter Task' onChange={handleOnChange}></input>
        </div>
    )
}
export default ParentComponent;