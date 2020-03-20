import React, { useState } from 'react'
import { Input,Text, Button } from 'react-native-elements';
import Spacer from '../Component/Spacer';
import { View, StyleSheet } from 'react-native';

 const SignupScreen=({navigation}) =>{
     const[email,Setemail]=useState('');
     const[Password,SetPassword]=useState('');
    return (
        <View style={styles.container}>
           
            <Text h3 style={{margin:10}}>Sign Up For Tracks</Text> 
            <Spacer />
            <Input label="E-mail" 
                    value={email} 
                    onChangeText={Setemail} 
                    autoCorrect={false} 
                    autoCapitalize="none" />
            <Spacer />
            <Input label="Password"  
                    secureTextEntry
                    value={Password} 
                    onChangeText={SetPassword} 
                    autoCorrect={false} 
                    autoCapitalize="none"/>
            <Spacer />
            <Button title="SignUp" style={{borderRadius:1,margin:15}} autoCorrect={false} autoCapitalize="none"/>
           

        </View>
    )
}

SignupScreen.navigationOptions=()=>{
    return {
        header:null
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:100

}})
export default SignupScreen
