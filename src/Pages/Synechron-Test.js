
import React, { useState, useEffect } from 'react';

const DebounceApp = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [prodinfo, setProdInfo] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let timer;
        if (input) {
            timer = setTimeout(async () => {
                try {
                    const res = await fetch('https://dummyjson.com/products');
                    if (!res.ok) {
                        throw new Error('Failed to load Data!!');
                    }
                    const response = await res.json();
                    setData(response.products);
                    // Extract unique categories
                    const uniqueCategories = [...new Set(response.products.map(item => item.category))];
                    setCategories(uniqueCategories);
                } catch (error) {
                    console.error(error);
                }
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [input]);

    const getProductData = (e) => {
        const selectedCategory = e.target.value;
        const products = data.filter(item => item.category === selectedCategory);
        setProdInfo(products);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder='Search Input' 
                value={input} 
                onChange={e => setInput(e.target.value)} 
            />
            <br />
            <select name="categories" id="categories" onChange={getProductData}>
                <option value="">Select a category</option>
                {categories.map((category, i) => (
                    <option key={i} value={category}>{category}</option>
                ))}
            </select>
            <br />
            <ul>
                {prodinfo.map((product, i) => (
                    <li key={i}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DebounceApp;




// import React,{useState, useEffect} from 'react';

// const DebounceApp=()=>{
//     const[input, setInput] =useState('');
//     const[data, setData]= useState(['']);
//     const[prodinfo, setProdInfo] =useState(['']);
//     useEffect(()=>{
//         let timer;
//         if(input){
//             timer = setTimeout(async ()=>{
//                 try{
//                     const res = await fetch('https://dummyjson.com/products')
//                     if(!res){
//                         throw new Error('Failed to load Data!!');
//                     }
//                     const response = await res.json();
//                     setData(response.products);
//                 }catch{
//                     console.error();
    
//                 }
//             },1000)
//         }
        
//         return ()=> clearTimeout(timer);
//     },[input,300])

//     const getProductData=(e)=>{
//         const  prod = e.target.value;
//         const products = data.map((item,i)=> if(item.category === prod) {return item} )
//         console.log(products)
//         setProdInfo(products);

//     }
    

//     return(
//         <div>
//             <input type="text" placeholder='Search Input' value={input} onChange={e=>setInput(e.target.value)}/>
//             <br/>
//             <select name="cars" id="cars" onChange={getProductData}>
//             {data &&  data.map((itm,i)=>
//                 <option value={itm.category}>{itm.category}</option> 
//             )}
//             <br/>
//              </select>
//              <ul>
//                 {prodinfo && prodinfo.map((ele, i)=><li>{ele.title}</li>)}
//              </ul>
//         </div>

//     )

// }
// export default DebounceApp;