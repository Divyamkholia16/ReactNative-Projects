import { View, Text,TextInput,Image,props} from 'react-native'
import React, { useState } from 'react'
import Background from './Background';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { darkGreen, green, yellow,bhagwa } from './Constant';
import Btn from './Btn';
import Btn2 from './Btn2';
import CheckBox from '@react-native-community/checkbox';


const Signup = (props) => {
  
const [isSelected ,setSelection] = useState(false);
  return (
    <Background>
    <View style = {{}}>
    <Image source={require("./images/image3.png")} style={{width : 250,marginVertical :15,marginHorizontal :20} }/>
      <Text style = {{fontWeight:'700',color:'white',paddingVertical:8, fontSize : 20,fontWeight:'600', alignItems : 'center',flex:1,marginVertical : 5,paddingHorizontal:5,marginHorizontal:60}}> SIGNUP/CREATE ACCOUNT</Text>
    </View>
    <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 320,
            borderRadius: 50,
            backgroundColor :'white',
            borderWidth: 1,
            marginVertical : 8,
            borderColor: 'white',
            fontWeight :'bold',
            marginTop: 5,
            paddingHorizontal: 10,
            marginHorizontal : 40
          }}>
          
          <Icon name="user-alt" size={22} color="orange" />
          <TextInput

            placeholder="First Name"
            placeholderTextColor="black"
            style={{ flex: 1,backgroundColor:'white',paddingVertical:8,borderRadius:50,width :'80%',fontWeight:'600',paddingHorizontal: 10, color: 'black', fontSize: 14 }}
          />
          
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 320,
            borderRadius: 50,
            backgroundColor :'white',
            marginVertical : 8,
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 10,
            paddingHorizontal: 10,
            marginHorizontal : 40
          }}>
          
          <Icon name="user-alt" size={22} color="orange" />
          <TextInput

            placeholder="Last Name"
            placeholderTextColor="black"
            style={{ flex: 1, paddingHorizontal: 10,paddingVertical:8, color: 'white', fontWeight:'600',fontSize: 14 }}
          />
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 320,
            borderRadius: 50,
            backgroundColor :'white',
            marginVertical : 8,
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 10,
            paddingHorizontal: 10,
            marginHorizontal : 40
          }}>
          
          <Icon name="mail-bulk" size={22} color="orange" />
          <TextInput

            placeholder="Email"
            placeholderTextColor="black"
            style={{ flex: 1, paddingHorizontal: 10,paddingVertical:8, color: 'white',fontWeight:'600', fontSize: 14 }}
          />
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 320,
            borderRadius: 50,
            borderWidth: 1,
            backgroundColor :'white',
            marginVertical : 8,
            borderColor: 'white',
            marginTop: 10,
            paddingHorizontal: 10,
            marginHorizontal : 40
          }}>
          
          <Icon name="user-alt" size={22} color="orange" />
          <TextInput

            placeholder="Username"
            placeholderTextColor="black"
            style={{ flex: 1, paddingHorizontal: 10, paddingVertical:8,color: 'white',fontWeight:'600', fontSize: 14 }}
          />
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 320,
            borderRadius: 50,
            marginVertical : 8,
            backgroundColor :'white',
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 10,
            paddingmarginVertical : 10,
            paddingHorizontal: 10,
            marginHorizontal : 40
          }}>
          
          <Icon name="lock" size={22} color="orange" />
          <TextInput

            placeholder="Password"
            placeholderTextColor="black"
            style={{ flex: 1, paddingHorizontal: 10,paddingVertical:8, color: 'white',fontWeight:'600', fontSize: 14 }}
          />
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width : 320,
            borderRadius: 50,
            backgroundColor :'white',
            
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 10,
            paddingHorizontal: 10,
            paddingmarginVertical : 10,
            marginHorizontal : 40
          }}>
          
          <Icon name="lock" size={22} color="orange" />
          <TextInput

            placeholder="Confirm Password"
            placeholderTextColor="black"
            style={{ flex: 1, paddingHorizontal: 10,paddingVertical:8, color: 'white',fontWeight:'600', fontSize: 14 }}
          />
           
        </View>
        

        <View style={{marginHorizontal:30}}>
          <CheckBox/>
      
        <Text style={{color:'white',marginHorizontal:60,}}>I agree to the Terms & Conditions and
             Privacy Policy</Text>
             
        <View style = {{marginHorizontal:10,marginVertical :20,}}>      
          <Btn2 bgColor={yellow} textColor='white'  btnLabel="CREATE ACCOUNT" Press={() => props.navigation.navigate("Check")} />
          
          
        </View>
        <Text style ={{color :'white',fontSize :14,marginHorizontal:110,fontWeight:'700',}}>Signup With</Text>

        <Image source={require("./images/image4.png")} style={{width :110,marginHorizontal :100,marginVertical:5} }/>

        <Text style = {{fontSize:14 ,fontWeight:'600',color :'white',marginHorizontal:50,marginVertical:5}}>Already have an account? Login</Text>
        <Text style ={{color:'yellow',fontSize:12,marginHorizontal:140,fontWeight:'700'}}>Skip</Text>

      </View>
      
    
    </Background>
  )
}

export default Signup;