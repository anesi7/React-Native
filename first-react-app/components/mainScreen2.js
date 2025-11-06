import React from "react";
import {Text, StyleSheet, View}  from "react-native";


const MainScreen=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is main screen 2</Text>
        </View>


    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        alignItems:"center"
    },

    textStyle:{
        fontSize: 30,

    },
})
export default MainScreen2