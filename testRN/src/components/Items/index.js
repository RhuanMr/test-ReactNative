import React, { useState } from 'react';
import { Text, View } from 'react-native';
import style from './styles';

const Items = () => {
  
  return(
    <View style={style.container}>
        <View>
            <Text style={style.title}>Pacote ID: XXXXX</Text>
            <Text>Pendente sincronizar</Text>
        </View>
        <View>
            <Text>11:32</Text>
        </View>
    </View>
   );
}

export default Items;