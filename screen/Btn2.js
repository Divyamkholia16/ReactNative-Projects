import {View, Text, TouchableOpacity,props} from 'react-native';
import React from 'react';

export default function Btn2({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        flex :1,
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        bottom : 0,
        fontWeight : 'bold',
    
        width: 200,
        paddingVertical: 10,
        marginVertical: 3,
        marginHorizontal : 45
      }}>
      <Text style={{color: textColor, fontSize: 16, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
    
  );
}