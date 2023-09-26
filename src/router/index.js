import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";

export default function Router(){
    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )

}