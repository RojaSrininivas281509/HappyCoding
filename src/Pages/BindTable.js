import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function BindTable(){
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // const fetchData = async () => {
        //     try {
        //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //       setData(response.data);
        //     } catch (error) {
        //       setError(error.message);
        //     } finally {
        //       setLoading(false);
        //     }
        //   };
          /* another way*/
          const fetchData = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setData(data);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
      
        fetchData()
    },[])
    console.log(data);
    if (loading) {
       return <div>Loading...</div>;
    }
    
    if (error) {
       return <div>Error: {error}</div>;
    }

    return(
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>UserId</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Body</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {data && data.map((item,i)=>
                        <tr key={item.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.userId}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.title}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.body}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}