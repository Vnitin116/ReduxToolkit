import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import MyProduct from './MyProduct';
const stack = createNativeStackNavigator();
const Nav = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='product' component={MyProduct} options={{ headerShown: false }} />
            <stack.Screen name='home' component={Home} />
        </stack.Navigator>
    )
}
export default Nav;
