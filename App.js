
import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from './src/Screen/AccountScreen'
import SigninScreen from './src/Screen/SigninScreen'
import SignupScreen from './src/Screen/SignupScreen'
import TrackListScreen from './src/Screen/TrackListScreen'
import TrackDetailesScreen from './src/Screen/TrackDetailesScreen'
import TrackCreateScreen from './src/Screen/TrackCreateScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import{Provider as AuthProvider} from './src/Context/AuthContext'

const SwitchNavigator = createSwitchNavigator({  
      loginflow:createStackNavigator( {  
       Signup: SignupScreen,
       Signin:SigninScreen 
  }) ,
       mainflow:createBottomTabNavigator({
       tracklistflow:createStackNavigator({
        TrackList:TrackListScreen,
        TrackDetaile:TrackDetailesScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
});  
const App = createAppContainer(SwitchNavigator);

export default ()=>{
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}