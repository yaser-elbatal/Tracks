import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'

 const TrackListScreen=({navigation}) =>{
    return (
        <>
            <Text>
                 TrackListScreen
            </Text>  
            <Button title="go to TrackDetailes" onPress={()=>navigation.navigate('TrackDetaile')} />
        </>
    )
}
const Styles= StyleSheet.create({})

export default TrackListScreen
