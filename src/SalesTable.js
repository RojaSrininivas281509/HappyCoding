import React, { useState, useEffect } from 'react';
import salesData from './utility/Sales.json'; // Adjust the path as necessary

const SalesTable = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a file
    const fetchData = () => {
        //we can axios or fetch to get data as well if json file is in public folder
        /*
        useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('/data.json'); // Fetching from the public folder
            setSales(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []); // Runs once when the component mounts


        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Fetching from the public folder
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSales(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
            };

            fetchData();
    }, []); // Runs once when the component mounts

        */
      setSales(salesData); // Set the sales data directly from the JSON file
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>Sales Data</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Product</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => (
            <tr key={sale.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sale.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sale.product}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sale.quantity}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
