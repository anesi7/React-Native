import React from "react";
import { View,Text,StyleSheet,FlatList,ScrollView,TochableOpacity } from "@react-navigation/stack";

import data from "../data/data.json";
import Item from "../components/Item";

class Ios extends React.Component{
    constructor(){
        super();
        this.state = {
            product:[],
        };

    
    }

    componentDidMount(){
        this.setState({
            product:data,
        })
    }
    render(){
        return(
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={Styles.desc}>
                        Lefblilililililililililivyifgopbiuiuiuiuiuiuiuiuiuiuiuiuiuiuiuiubtwv
                    </Text>
                </View>
                <View style={Styles.productContainer}>
                    <FlatList
                        data={this.state.product.Ios}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item})  =><Item item={item}></Item>}
                        >
                    </FlatList>
                </View>

                <TochableOpacity style={Styles.btn}>
                    <Text style={Styles.btnText}>View More</Text>
                </TochableOpacity>


            </ScrollView>
        )
    }
}
export default Ios



const Styles = StyleSheet.create({
    container:{
        padding:15,
    },
    desc:{
        marginBottom:15,
        fontSize:14,
    },
    productContainer:{
        marginBottom:20
    },
    btn:{
        backgroundColor:"#2f3b52",
        padding:12,
        borderRadius:8,
        alginItems:"center"
    },
    btnText:{
        color:"#fff"
    }
})