import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import StatusScreen from '../pages/StatusScreen'

const AppStack = createStackNavigator()

export default function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="Home"
                component={Home} 
                options={{headerShown: false}}
            />
            <AppStack.Screen 
                name="StatusScreen"
                component={StatusScreen} 
                options={{headerShown: false}}
            />
        </AppStack.Navigator>
    )
}