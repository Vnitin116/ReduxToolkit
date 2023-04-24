import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import store from './redux/store'
import Header from './redux/Header'
import Product from './redux/Product'
import { Provider } from 'react-redux'
const App = () => {
    const products = [
        {
            key: 1,
            name: "Samsung",
            color: "white",
            price: 10000,
            image: "https://cdn.vectorstock.com/i/1000x1000/69/37/iphone-x-dummy-frame-vector-24846937.webp"
        },
        {
            key: 2,
            name: "Redmi",
            color: "blue",
            price: 15000,
            image: "https://cdn.vectorstock.com/i/1000x1000/69/37/iphone-x-dummy-frame-vector-24846937.webp"
        },
        {
            key: 3,
            name: "Nokia",
            color: "black",
            price: 12000,
            image: "https://cdn.vectorstock.com/i/1000x1000/69/37/iphone-x-dummy-frame-vector-24846937.webp"
        },
    ]
    return (
        <Provider store={store} >
            <View>
                <Header />
                <ScrollView>
                    {products.map((item) =>
                        <Product item={item} />)}
                </ScrollView>
            </View>
        </Provider>

    )
}
export default App