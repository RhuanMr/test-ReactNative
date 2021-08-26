import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import Items from '../../components/Items';
import style from './styles';

const  StatusScreen = () => {
  return(
    <View>
      <Header page="StatusScreen" />
      <View style={style.container}>
        <Items />
      </View>
    </View>
  );
}

export default  StatusScreen;