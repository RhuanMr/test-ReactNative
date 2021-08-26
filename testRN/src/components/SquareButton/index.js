import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, View} from 'react-native';
import style from './styles';

const SquareButton = () => {
  const [isSelected, setIsSelected] = useState(true);
  const onPress = () => setIsSelected(previousState => !previousState)
  return(
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={isSelected ? [style.container, style.defaultMode] : [style.container, style.selectedMode]}>
        <Text style={style.title}>10s</Text>
      </View>
    </TouchableWithoutFeedback>
   );
}

export default SquareButton;