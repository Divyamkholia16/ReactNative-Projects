import { View, Text,Image,props} from 'react-native'
import React from 'react'
import Background from './Background'
import Btn3 from './Btn3'
import Btn2 from './Btn2'
import { blue,yellow } from './Constant'

const Check = (props) => {
  return (
    <Background>
    <View>
    <Image source={require("./images/image3.png")} style={{width : 250,marginVertical:20,marginHorizontal:10} }/>
    
    <Text style ={{fontFamily:'Poppins',fontSize :20,fontWeight :'600',color:'#FEA01A',marginHorizontal:110}}>You Are Ready To</Text>
    <Text style = {{fontFamily:'Poppins',fontSize :38,fontWeight :'700',color:'white',marginHorizontal:110}}>DO JADU</Text>
    <Text style = {{fontFamily:'Poppins',fontSize :14,fontWeight :'500',color:'white',marginHorizontal:110}}>Thank you for signing-up
      We have sent a verification link
       on your registered Email.</Text>
    <Image source={require("./images/image5.png")} style={{width : 340,marginHorizontal:20} }/>

    <Btn3 bgColor={blue} textColor='white'  btnLabel="GO TO REGISTERED EMAIL & VERIFY NOW" Press={() => props.navigation.navigate("Check")} />
    </View>
    <View style ={{marginVertical :30,marginHorizontal:40}}>
      <Text style ={{color :'white',fontSize:14,fontWeight:'600',marginHorizontal:40,marginVertical:15}}>Did not receive verification email?</Text>
      <Btn2 bgColor={yellow} textColor='black'  btnLabel="RESEND NOW" Press={() => props.navigation.navigate("Check")} />
    </View>
    
    </Background>
  )
}

export default Check