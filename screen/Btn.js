import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
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
    
        width: 140,
        paddingVertical: 3,
        marginVertical: 5,
        marginHorizontal : 75
      }}>
      <Text style={{color: textColor, fontSize: 16, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
    
  );
}