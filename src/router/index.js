import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'react-native';
import Home from "../pages/home";
import Theme from "../pages/theme";
import Topic from "../pages/topic";

export default function Router(){
    const Stack = createStackNavigator()
    

    return(
        <NavigationContainer>
            <StatusBar barStyle="dark-content"/>
            <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Theme" component={Theme}/>
            <Stack.Screen name="Topic" component={Topic}/>
            
            </Stack.Navigator>
        </NavigationContainer>
    )

}