import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    scrollY: 0
}

export const bodySlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollY: (state, action) => {
            state.scrollY = action.payload;
        }
    }
})

export const {setScrollY} = bodySlice.actions;

export default bodySlice.reducer