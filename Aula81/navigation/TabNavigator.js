import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";

const Tab=createBottomTabNavigator();
const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator
          screenOptions={({route}) =>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if (route.name === "feed"){
                      iconName=focused
                      ? "book"
                      : "book-outline";
                }else if(route.name=== "createStory"){
                    iconName=focused
                    ? "create"
                    : "create-outline";
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            }
          })}>
         <Tab.Screen name="feed" componet={Feed}/>
         <Tab.Screen name="createStory" componet={CreateStory}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;