import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native'
import RestaurantScreen from './screens/RestaurantScreen';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}
