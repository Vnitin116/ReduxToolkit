import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import Cart from './Cart';
import MyProduct from './MyProduct';
import { NavigationContainer } from '@react-navigation/native';
const stack = createNativeStackNavigator();
const Nav = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='product' component={MyProduct} options={{ headerShown: false }} />
                <stack.Screen name='home' component={Home} />
                <stack.Screen name='cart' component={Cart} />

            </stack.Navigator>
        </NavigationContainer>
    )
}
export default Nav;
