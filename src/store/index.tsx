import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cart'

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store