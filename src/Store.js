import MyProductReducer from './MyProductSlice'
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
    reducer: MyProductReducer
})
export default Store;