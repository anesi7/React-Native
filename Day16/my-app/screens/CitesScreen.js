import React from "react";
import{StyleSheet,View,Text,FlatList} from "react-native";

class CitesScreen extends Comment{
    constructor(props){
        super(props);
        this.state={
            cites:[],
        }
    }
    componentDidMount(){
        this.setState({cities:data})

    }
    renderItem = ({item})=>{
        const{name,contryCode,popullation,description}=item;
        return(
            <View style={styles.cardWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>contryCode{contryCode}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.popullation}>{popullation}</Text>

            </View>
        );
    };
    render(){
        return(
            <View>
            <Text style={styles.anesi}Cities></Text>

            <FlatList
            data={this.state.cities}
            keyExtractor={(item,index)=>
                item.id ? item.id.toString() :index.toString()
            }
            renderItem={this.renderItem}
            
            ></FlatList>
            </View>

        )
    }
}
export default CitiesScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
    padding:16,
    },
    anesi:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:12,
        textAlign:"center"
    },
    cardWrapper:{
        backgroundColor:"#f9f9f9",
        padding:12,
        marginBottom:10,
        borderRadius:8
    },
    title:{
        fontSize:14,
        fontWeight:"bold"
    },
    subtitle:{
        fontSize:14,
        marginTop:6,
        color:"#555"
    },
    description:{
         fontSize:14,
        marginTop:6,
        color:"#555"
    },
    small:{
         fontSize:14,
        marginTop:6,
        color:"#777"
    }
})