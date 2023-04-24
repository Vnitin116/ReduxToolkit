import { createSlice } from "@reduxjs/toolkit";
const MyProductSlice = createSlice({
    name: "Product",
    initialState: [],
    reducers: {
        addProducts(state, action) {
            state.push(action.payload)
        }
    }
})
export const { addProducts } = MyProductSlice.actions;
export default MyProductSlice.reducer;