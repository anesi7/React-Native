import React from "react";
import{
    View,
    Text,
    StyleSheet,
    Image

}from "react-native";

const Item = ({item})=>{
    return(
        <View style={styles.cardContainer}>
            <Image source={{uri:item.image}}
                style={styles.img}

                >
                    <View style={styles.textContainer}>
                        <Text styles={styles.name}>{item.name}</Text>
                        <Text styles={styles.category}>{item.category}</Text>
                        <Text styles={styles.desc}>{item.desc}</Text>
                        <Text styles={styles.price}>{item.price}</Text>


                    </View>




            </Image>


        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer:{
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderRadius:8,
        marginBottom:18,
        padding:8
    },
    img:{
        width:100,
        height:100,
        borderRadius:8
    },
textContainer:{
    paddingHorizontal:10,
    flex:1,
    },
    name:{
        fontSize:16,
        fontWeight:"bold",
    },
    category:{
        color:"#2bbdff"
    },
    desc:{
        fontSize:12,
        marginVertical:5
    },
    desc:{
        fontSize:12,
        marginVertical:5
    },
    price:{
        backgroundColor:"#2bbdff",
        color:"#fff",
        alignSelf:"flex-start",
        paddingHorizontal:10,
        borderRadius:12
    }




})