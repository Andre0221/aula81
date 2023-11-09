import React from "react";
import {createDrawerNavigator} from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "./TabNavigator";
import Profile from "../screens/profile";
const Drawer = createDrawerNavigator();
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="telaInicial" componet={BottomTabNavigator}/>
            <Drawer.Screen name="telaPerfil" componet={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;