import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  const [cartItems, setcartItems] = useState(0)
  const cartData = useSelector((state) => state.reducer)
  useEffect(() => { setcartItems(cartData.length) },
    [cartData])
  console.warn(cartData)
  return (
    <View style={{ backgroundColor: "blue" }}>
      <Text style={{ fontSize: 30, backgroundColor: "blue", color: "white", alignSelf: "flex-end", padding: 15, }}>{cartItems}</Text>
    </View>
  )
}
export default Header;  