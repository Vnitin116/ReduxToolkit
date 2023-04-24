import { createSlice } from "@reduxjs/toolkit";
const MyCartSlice = createSlice({
    name: "Product",
    initialState: [],
    reducers: {
        addProductToMyCart(state, action) {
            state.push(action.payload)
        }
    }
})
export const { addProductToMyCart } = MycartSlice.actions;
export default MyCartSlice.reducer