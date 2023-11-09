import { View, Text, TextInput,props,Image } from 'react-native'
import React from 'react'
import Background from './Background';

import Icon from 'react-native-vector-icons/AntDesign';
import { darkGreen, green, yellow } from './Constant';
import Btn2 from './Btn2';

const Login = () => {
    return (
        <Background>
           <View style={{ marginHorizontal: 40,  }}>


            <Text style={{ color: 'white', fontSize: 64 }}></Text>
            <Text style={{ color: 'white', fontSize: 64,  }}></Text>
            <Image source={require("./images/image2.png")} style={{width : 320,marginVertical :70} }/>
                <Text style={{ color: 'yellow', fontSize: 22, fontWeight: '900', alignItems: 'center', paddingVertical: 5, marginHorizontal: 40, marginVertical : 3}}> FORGOT PASSWORD</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 300,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'white',
                        marginTop: 10,
                        paddingHorizontal: 12,
                        marginVertical : 20
                    }}>

                    <Icon name="mail" size={22} color="white" />
                    <TextInput

                        placeholder="Email Here"
                        placeholderTextColor="white"
                        style={{ flex: 1,alignItems :'center', paddingHorizontal: 10, color: 'white', fontSize: 14,fontWeight : 'bold'}}
                    />
                    
                </View>
                <Btn2 bgColor={yellow} textColor='black' btnLabel="RESET PASSWORD" Press2={() => props.navigation.navigate("Homescreen")} />
                <Text style = {{color : 'yellow', fontWeight : 'bold',marginVertical: 7,marginHorizontal :90}}>Back to SIGN-IN</Text>
                <Text style = {{fontSize : 14, color : 'white', marginVertical : 12, marginHorizontal :40}}>Please Enter a Valid Email Address</Text>
                <Text style = {{color : 'yellow', fontWeight:'bold',marginHorizontal : 130,marginVertical : 12}}>Skip</Text>

           

            </View>
            
           


        
        
    </Background >
  );
}

export default Login;