import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from './src/navigators/MainNavigator';
export default function App() { 
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}