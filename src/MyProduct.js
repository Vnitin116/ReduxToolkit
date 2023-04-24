import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addProducts } from './MyProductSlice';
import { useDispatch, useSelector } from 'react-redux';
const MyProduct = ({ navigation }) => {
    const dispatch = useDispatch()
    let arr = [];
    const handleAddToCart = (item) => {
        dispatch(addProducts(item));
    };
    const reducer = useSelector(state => state.product);
    console.log("selector data", reducer)
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
        image: "https://m.media-amazon.com/images/I/41k13ickL3L.jpg",
        name: "layasa Men's Sneakers Walking Shoe",
        price: 1500,
        quantity: 0
    },
    {
        id: 5,
        image: "https://rukminim1.flixcart.com/image/832/832/l1jmc280/shoe/m/y/z/6-innova-04cwhtsky-asian-white-original-imagd3atfhw3tdwh.jpeg?q=70",
        name: "Running Shoes For Men  (White, Blue)",
        price: 800,
        quantity: 0
    },
    ]
    return (
        <View style={{ marginBottom: 50 }}>
            <View style={styles.mainHeader}>
                <Text style={styles.Heading}>Product-List</Text>
                <TouchableOpacity onPress={() => navigation.navigate("cart", { data: reducer })}>
                    <Text>a</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={styles.listView}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <TouchableOpacity>
                                <Image source={{ uri: item.image }} style={styles.Img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontSize: 18, marginLeft: 10, color: "black" }}>{item.name.substring(0, 19) + '..'}</Text>
                                <Text style={{ marginLeft: 10, color: "green", fontWeight: "600", fontSize: 16 }}>Price:{item.price}</Text>
                                <View style={{ marginLeft: 12, borderRadius: 100 }}>
                                    {(item.quantity == 0 ? <Button color='green' title='Add item' onPress={() => {
                                        handleAddToCart(item)
                                    }} /> : (<Button color='green' title='Remove item' onPress={() => {
                                        setBtn(true)
                                    }} />))}
                                    {item.quantity !== 0 ? (<View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 }}>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 20, backgroundColor: 'green', padding: 5, height: 35, width: 30, borderRadius: 5, color: "white", textAlign: "center" }}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 20, textAlign: "center" }}>{item.quantity}</Text>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 20, backgroundColor: 'green', padding: 5, height: 35, width: 30, borderRadius: 5, color: "white", textAlign: "center" }}>+</Text>
                                        </TouchableOpacity>
                                    </View>)
                                        : (null)}
                                </View>
                            </View>
                        </View>
                    </View>} />
        </View>
    )
}
export default MyProduct;
const styles = StyleSheet.create({
    mainHeader: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "100%",
        elevation: 10,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "white",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    listView: {
        backgroundColor: "white",
        elevation: 15,
        height: 150,
        marginBottom: 8,
        width: "95%",
        alignSelf: "center",
        borderRadius: 8,
        flex: 1,
    },
    Img: {
        height: 130,
        width: 130,
        borderRadius: 60,
        borderWidth: 0.2,
        borderColor: "black",
        marginTop: 10,
        marginLeft: 10
    }
})