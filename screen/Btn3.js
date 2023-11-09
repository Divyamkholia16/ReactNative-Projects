import {View, Text, TouchableOpacity,props} from 'react-native';
import React from 'react';

export default function Btn3({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        flex :1,
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        bottom : 0,
        fontWeight : '600',
    
        width: 350,
        paddingVertical: 15,
        marginVertical: 3,
        marginHorizontal : 20
      }}>
      <Text style={{color: textColor, fontSize: 14, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
    
  );
}