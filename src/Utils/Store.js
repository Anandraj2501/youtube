import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import DataSlice from "./DataSlice";
import ChatSlice from "./ChatSlice";

const Store = configureStore({
        reducer:{
            search: SearchSlice,
            add: DataSlice,
            chat : ChatSlice,
        }
})

export default Store;