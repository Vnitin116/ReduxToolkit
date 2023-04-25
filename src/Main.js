import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Nav from './Nav'
import { useDispatch } from 'react-redux'
import { addProducts } from './MyProductSlice'
const data = [{
    id: 1,
    image: "https://contents.mediadecathlon.com/p2393852/d49a53a79a149213439c01392818d14b/p2393852.jpg?format=auto&quality=70&f=650x0",
    name: "Men's Running Shoes Jog flow ",
    price: 1400,
    quantity: 0
},
{
    id: 2,
    image: "https://m.media-amazon.com/images/I/61EDnXh3BdL._UL1500_.jpg",
    name: "Red Tape Men's Walking Shoes",
    price: 1000,
    quantity: 0
},
{
    id: 3,
    image: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/d/i/7-95000215-41-roamra-white-original-imag4ahytjmqdzz8-bb.jpeg?q=70",
    name: "Sneakers For Men  (White) ",
    price: 1200,
    quantity: 0
},
{
    id: 4,
    image: "https://m.media-amazon.com/images/I/61EDnXh3BdL._UL1500_.jpg",
    name: "Red Tape Men's Walking Shoes",
    price: 1000,
    quantity: 0
},
{
    id: 5,
    image: "https://m.media-amazon.com/images/I/61EDnXh3BdL._UL1500_.jpg",
    name: "Red Tape Men's Walking Shoes",
    price: 1000,
    quantity: 0
},
]
const Main = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     data.map((element) =>
    //         dispatch(addProducts(element))
    //     )
    // }, [])
    return <Nav />
}
export default Main;