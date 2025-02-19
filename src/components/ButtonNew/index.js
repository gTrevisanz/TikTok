import { Entypo } from '@expo/vector-icons'
import {View, StyleSheet, Text} from 'react-native'



export function ButtonNew({ size }){
    return (
    <View style={styles.container}>
       <View style={styles.inner}> 
       <Entypo name="plus" size={size} color="#000" />
       </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
      borderLeftWidth: 2,
      borderLeftColor: "#1ebfc7",
      borderRightWidth: 2,
      borderRightColor: "#f43071",
      borderRadius: 6
    },

    inner:{
        textAlign: 'center',
        backgroundColor: "#FFF",
        padding: 1,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 3
    }

})