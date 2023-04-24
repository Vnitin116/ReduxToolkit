import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = (props) => {
  // const { data } = props.route.params
  const data = useSelector((state) => state.product)
  console.log("=====>", data)
  return (
    <View>
      <Text>
        Hello
      </Text>
    </View>
  )
}

export default Cart;