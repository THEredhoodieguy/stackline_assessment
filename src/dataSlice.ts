import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {ProductEntry} from './types';

interface DataState {
    products: ProductEntry[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: DataState = {
    products: [],
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk<ProductEntry[]>('data/fetchProducts', async () => {
    const response = await fetch('./data.json');

    if (!response.ok) {
        throw new Error('failed to fetch')
    }
    return response.json();
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductEntry[]>) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default dataSlice.reducer;