import React from 'react'
import { View, StyleSheet,Text } from 'react-native'

const Spacer=({childern})=> {
    return <View style={styles.spacer}>{childern}</View>
    
}
const styles= StyleSheet.create({
    spacer:{
        padding:15

    }
})

export default Spacer
