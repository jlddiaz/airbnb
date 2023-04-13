import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackScreen } from './src/screens/location-list/MainStackScreen'
import { LocationDetailScreen } from './src/screens/location-detail/LocationDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LocationDetailWebScreen } from './src/screens/location-detail/LocationDetailWebScreen'
import { UserProvider } from './src/contexts/UserContext'

const LocationListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
            {/** //Pantallas con tab */}
            <LocationListStack.Screen name='Main' component={MainStackScreen} />
            {/** //Pantallas sin tab */}
            <LocationListStack.Screen name='LocationDetail' component={LocationDetailScreen} />
            <LocationListStack.Screen name='LocationDetailWeb' component={LocationDetailWebScreen} />
          </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  )
}
