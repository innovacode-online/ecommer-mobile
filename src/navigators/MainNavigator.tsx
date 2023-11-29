import { createStackNavigator } from '@react-navigation/stack'

import { COLORS } from '../shared/theme';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductScreen } from '../screens/ProductScreen';


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
            <Stack.Screen name='ProductScreen' component={ ProductScreen } />
        </Stack.Navigator>
    )
}
