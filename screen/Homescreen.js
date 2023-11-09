import React from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Icon from 'react-native-vector-icons/AntDesign';
import { darkGreen, green, yellow } from './Constant';

const Home = (props) => {
  return (
    <Background>

      <View style={{ marginHorizontal: 40, marginVertical: 20 }}>

        <Text style={{ color: 'white', fontSize: 64 }}></Text>
        <Text style={{ color: 'white', fontSize: 64,  }}></Text>
        <Image source={require("./images/image2.png")} style={{width : 320,marginVertical :55} }/>
        
        <Text style = {{color : 'yellow' , fontSize : 24 , fontWeight :'bold',alignItems : 'center', paddingVertical : 5, marginHorizontal : 100}}> SIGN IN</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 300,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          
          <Icon name="user" size={22} color="white" />
          <TextInput

            placeholder="Email Here"
            placeholderTextColor="white"
            style={{ flex: 1, paddingHorizontal: 10, color: 'white', fontSize: 14 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 16,
            paddingHorizontal: 10,
          }}>
          <Icon name="lock" size={22} color="white" />
          <TextInput

            placeholder="Password"
            placeholderTextColor="white"
            style={{ flex: 1, paddingHorizontal: 10, color: 'white', fontSize: 16 }}

          />
          


        </View>
        <Text style = {{color :'white', alignItems : 'center', marginLeft : 40,marginVertical : 10, color : 'yellow', fontWeight :'bold'}}>Forget Password ? Reset Password</Text>

        <View>
          <Btn bgColor={yellow} textColor='black'  btnLabel="LOGIN" Press={() => props.navigation.navigate("Login")} />
        </View>
        <Text style ={{color :'white', alignItems : 'center',  color : 'yellow', fontWeight :'bold', fontSize : 13,marginBottom : 30,marginVertical : 10}}>Don't have an account? <Btn style ={{fontSize : 12,marginHorizontal : 20}} bgColor={yellow} textColor='black' fontSize = '12'  btnLabel="SIGN UP" Press={() => props.navigation.navigate("Signup")} /></Text>
        


      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
