import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './componnents/MainScreen';
import MainScreen2 from './componnents/MainScreen';
import HomeScreen from './screens/HomeScreen';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
   <NaNvigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>

        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
