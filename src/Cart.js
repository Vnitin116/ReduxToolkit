import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Cart = (props) => {
  const [count, setCount] = useState(0)
  const StoreData = useSelector((state) => state.product)
  console.log('storeData=====>', StoreData)
  let filterData = StoreData.reduce((acc, val) => {
    if (!acc.some((obj) => obj.name === val.name)) {
      acc.push(val);
    }
    return acc
  }, []);
  const Increase = (item) => {
    filterData.map(item => {
      if (item.id === item.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    })
  }
  const invidual_data = StoreData.map((item) => item + item.length)
  console.log("individaul_data", invidual_data)
  const No_of_Item = filterData.length
  console.log(No_of_Item)
  useEffect(() => {
    console.log('Total-data', StoreData.length)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filterData}
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

                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, alignItems: "center" }}>
                  <TouchableOpacity >
                    <Text style={{ fontSize: 20, backgroundColor: 'green', padding: 5, height: 35, width: 30, borderRadius: 5, color: "white", textAlign: "center" }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>{count}</Text>
                  <TouchableOpacity onPress={() => { Increase(item.id); }}>
                    <Text style={{ fontSize: 20, backgroundColor: 'green', padding: 5, height: 35, width: 30, borderRadius: 5, color: "white", textAlign: "center" }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>} />
      <View style={{ backgroundColor: "green", elevation: 10, borderWidth: 2, borderColor: "white", borderRadius: 15, marginBottom: 10, width: "90%", height: 50, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 25, marginLeft: 20, color: "white", fontWeight: "700~" }} >
            Buy-Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Cart;
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