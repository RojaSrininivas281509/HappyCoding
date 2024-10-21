import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchInput() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [warn, setWarn] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://66fa751fafc569e13a9bd714.mockapi.io/users', {
                    params: { name: input }
                });
                setData(res.data);
                if (res.data.length === 0) {
                    setWarn('No results found');
                } else {
                    setWarn('');
                }
            } catch (e) {
                console.error(e);
                setWarn('Error fetching data');
            }
        };

        if (input) {
            fetchData();
        } else {
            setData([]); // Clear data if input is empty
            setWarn('');
        }
    }, [input]);

    const searchItem = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder='Search UserName' 
                value={input} 
                onChange={searchItem} 
            />
            <p>{warn}</p>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}





// import React,{useState, useEffect} from 'react';
// import axios from 'axios';
// export default function SearchInput(){
//     const[input, setInput]=useState('')
//     const[data, setData]=useState([]);
//     const[warn, setWarn]=useState('');
//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const res= await axios.get('https://66fa751fafc569e13a9bd714.mockapi.io/users');
//                 setData(res.data);

//             }catch(e){
//                 console.error(e);

//             }
//         }
//         fetchData()
//         const filteredData=data.filter((item,i)=> item.name.includes(input));
//         setData(filteredData); 

//     },[input])
//     console.log(data);
//     const searchItem=(e)=>{
//         setInput(e.target.value);
//     }


//     return(
//         <div>
//             <input type="text" placeholder='Search UserName' value={input} onChange={searchItem}/>
//             <p>{warn}</p>
//             <ul>
//                 {data && data.map((item,i)=> <li key={i}>{item.name}</li>)}
//             </ul>
//         </div>
//     )
// }