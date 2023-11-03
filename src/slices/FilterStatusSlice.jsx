import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name : 'filterStatus',
    initialState : "None",
    reducers : {
        updateFilterStatus : (state, action) => {
            return action.payload;
        }
    }
})

export const { updateFilterStatus } = filterSlice.actions;

export default filterSlice.reducer;