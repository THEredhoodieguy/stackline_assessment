import React, { useEffect, useState } from 'react';
import { productPanel } from './components/productPanel';
import { salesGraph } from './components/salesGraph';
import { salesTable } from './components/salesTable';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { fetchProducts } from './dataSlice';
import { Card, Typography } from '@mui/material';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error} = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Card><Typography>Loading...</Typography></Card>
  }

  if (status === 'failed') {
    return <Card><Typography>Error: {error}</Typography></Card>
  }

  return (
    <div style={{margin: 0, padding: 0}}>
      <header ><img src='./stackline_logo.svg' /></header>
      <div className="container">
        <div className="left-pane">{products && products[0] && productPanel(products[0])}</div>
        <div className="right-pane">
          <div className='graph-panel'>{products && products[0] && salesGraph(products[0].sales)}</div>
          <div className='table-panel'>{products && products[0] && salesTable(products[0].sales)}</div>
        </div>
      </div>
    </div>
  );
};

export default App;