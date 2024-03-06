import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            if (state.message.length >= 60) {
                // Remove the oldest message (the first message in the array)
                state.message.shift();
            }
            state.message.push(action.payload);
        }
    }
})


export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;