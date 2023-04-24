import { configureStore } from '@reduxjs/toolkit'
import MyProductReducer from './MyProductSlice'
const Store = configureStore({
    reducer: {
        product: MyProductReducer,
    }
})
export default Store;