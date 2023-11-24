import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }
  
  return (

      <View style={ styles.container }>
        <StatusBar style="auto"/>
        <Text style={{ fontSize: 42 }}>
          { counter }
        </Text>
        <Text>Contador</Text>
        <Button onPress={increment} title="Incrementar" />
        <Button onPress={decrement} title="Decrementar" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
})