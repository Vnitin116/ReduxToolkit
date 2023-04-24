import { Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTOCart, removeFromCart } from '../redux/action'
const Product = (props) => {
    const [isAdded, setAdded] = useState(true)
    const item = props.item;
    const dispatch = useDispatch();
    const removeCart = useSelector((state) => state.reducer)
    const removeItem = (item) => {
        dispatch(removeFromCart(item.name))
    }
    const handleCart = (item) => {
        dispatch(addTOCart(item))
    }
    const state = getState()
    console.log(state)
    useEffect(() => {
        let result = removeCart.filter((element) =>
            element.name === item.name)
        if (!result.length) {
            setAdded(true)
        }
        else {
            setAdded(false)
        }
    }, [removeCart])
    return (
        <View style={{ justifyContent: "center", alignItems: 'center', borderBottomWidth: 2, borderBottomColor: "blue" }}>
            <Image style={{ height: 100, width: 100, marginTop: 20, marginBottom: 20 }} source={{ uri: item.image }} />
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <View style={{ marginTop: 20, marginBottom: 80, elevation: 20 }}>
                {isAdded ? <Button title='Add item' onPress={() => handleCart(item)} /> :
                    <Button title='Remove item' onPress={() => {
                        removeItem(item);
                        setAdded(true)
                    }} />
                }
            </View>
        </View>
    )
}
export default Product;