import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import PackageDetails from "./packageDetails";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PackageDetails" component={PackageDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}