import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({page}) =>{
  const navigation = useNavigation()
  if(page === "Home"){
    return(
      <View style={[style.container, style.containerHome]}>
        <Text style={style.title}>Olá, bem-vindo</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('StatusScreen') }}>
          <Text style={style.title}>Status</Text>
        </TouchableOpacity>
      </View> 
    )
  }else{
    return(
      <View style={style.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Text style={style.title}>Voltar</Text>
        </TouchableOpacity>
        <View style={style.textContainer}>
          <Text style={style.title}>Status</Text>
        </View>
      </View>
    )
  }
}

export default Header;