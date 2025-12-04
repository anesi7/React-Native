import React from "react";
import { View ,Text,StyleSheet} from "react-native-web";
import StudentInfo from "../components/StudentsInfo";
function ProfileScreen(){
    return(
       <View>
        <StudentInfo
        fullName={"Donjeta"}
        position={"Developer"}
        desc={"I am developer"}

        
        
        >

        </StudentInfo>
       </View>
    );
}



export default ProfileScreen;