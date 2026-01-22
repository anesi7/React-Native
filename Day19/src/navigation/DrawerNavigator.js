import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigatior from "./TabNavigator";

import { AboutStackNavigator } from "./StackNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
        name="Home"
        component={BottomTabNavigatior}
       />

        <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
       />
    </Drawer.Navigator>
    )
}
export default DrawerNavigator