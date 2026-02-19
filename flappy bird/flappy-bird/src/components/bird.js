import React from "react";
import View from "react-native"

const Bird=(bridBottom)=>{
    return(
        <View
        style={{
            position:"absolute",
            width:50,
            height:50,
            backgroundColor:"blue",
            left:100,
            bottom:bridBottom
        }}>
        </View>
    )
    }

export default Bird