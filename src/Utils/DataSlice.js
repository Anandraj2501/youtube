import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "data",
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            console.log(action.payload);
            if (state.length === 0) {
                state.push(action.payload);
            }
        }
    }

})

export const {addData} = DataSlice.actions;
export default DataSlice.reducer;