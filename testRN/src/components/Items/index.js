import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { timeSplit } from '../../utils/timeSplit';
import style from './styles';

const Items = ({data}) => {
  return(
    <View style={style.container}>
        <View>
            <Text style={style.title}>Pacote ID: {data && data.id}</Text>
            <Text>{data && data.status ? "Sincronizado" : "Pendente sincronizar"}</Text>
        </View>
        <View>
            <Text>{timeSplit(data.time)}</Text>
        </View>
    </View>
   );
}

export default Items;