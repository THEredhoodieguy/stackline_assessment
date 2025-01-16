import React, { useEffect, useState } from 'react';
import type { ProductEntry } from './types';
import { productPanel } from './components/productPanel';
import { salesGraph } from './components/salesGraph';
import { salesTable } from './components/salesTable';

const App: React.FC = () => {
  const [data, setData] = useState<ProductEntry>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const json: ProductEntry[] = await response.json();
        setData(json[0]);
      } catch (error) {
        console.error('Error fetching mock data: ', error);
      }
    };

    fetchData();
  }, [])

  return (
    <div style={{margin: 0, padding: 0}}>
      <header ><img src='./stackline_logo.svg' /></header>
      <div className="container">
        <div className="left-pane">{data && productPanel(data)}</div>
        <div className="right-pane">
          <div className='graph-panel'>{data && salesGraph(data.sales)}</div>
          <div className='table-panel'>{data && salesTable(data.sales)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;