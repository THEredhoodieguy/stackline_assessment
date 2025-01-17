import React from 'react';
import type { ProductEntry } from '../types';
import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Divider, Grid2, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export function productPanel(product: ProductEntry) {
  console.log('tags: ' + product.tags + ' , count: ' + product.tags.length)
  return (
    <Card variant='outlined' sx={{maxWidth: 345, height: '100%', marginLeft: '10px'}}>
      <CardMedia component='img' src={product.image} />
      <Box sx={{padding: '10px'}}>
        <Typography variant='h5' align='center'>{product.title}</Typography>
        <Typography variant='caption' color='textSecondary' align='center'>{product.subtitle}</Typography>
      </Box>
      
      {product.tags && (
        <div>
        <Divider variant='fullWidth'/>
        <Grid2 container spacing={1} sx={{margin: '10px'}}>
          {product.tags.map((tag) => (
            <Chip label={tag} variant='outlined' />
          ))}
        </Grid2>
        <Divider variant='fullWidth'/>
        </div>
      )}
    </Card>
  );
}