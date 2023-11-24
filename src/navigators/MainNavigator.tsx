import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { COLORS } from '../shared/theme';


const Stack = createStackNavigator();


export const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: COLORS.bg_body
                }
            }}
        
        >
            <Stack.Screen name='HomeScreen' component={ HomeScreen } />
        </Stack.Navigator>
    )
}
