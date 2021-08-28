import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, View} from 'react-native';
import style from './styles';

const SquareButton = ({data, onPress, select}) => {
  return(
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={select ? [style.container, style.defaultMode] : [style.container, style.selectedMode]}>
        <Text style={style.title}>{data.name}</Text>
      </View>
    </TouchableWithoutFeedback>
   );
}

export default SquareButton;