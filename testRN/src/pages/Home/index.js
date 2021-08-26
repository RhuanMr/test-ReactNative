import React, { useState } from 'react';
import { Image, Text, View, Switch } from 'react-native';
import Header from '../../components/Header';
import SquareButton from '../../components/SquareButton';
import COLORS from '../../styles/colors';
import style from './styles';

const Home = ()=>{
  const [status, setStatus] = useState(true)
  const [serviceStatus, setServiceStatus] = useState(true)

  const toggleSwitch = () => setServiceStatus(previousState => !previousState);
  return(
    <View style={style.container}>
      <Header page="Home"/>
      <View style={style.logoCard}>
        <Image source={require("../../assets/compass.png")}/>
        <View style={style.titleContainer}>
          <Text style={style.title}>My GPS - Tracking</Text>
          <Text style={status ? style.online : style.offline}>{status ? "Online" : "Offline"}</Text>
        </View>
      </View>
      <View style={style.statusContainer}>
        <View>
          <Text style={style.statusTitle}>Status do serviço</Text>
          <Text>Serviço ativo</Text>
        </View>
        <View style={style.switchContainer}>
          <Switch
            trackColor={COLORS.LINE_GRAY}
            thumbColor={serviceStatus ? COLORS.GREEN : "#f4f3f4"}
            ios_backgroundColor={COLORS.LINE_GRAY}
            onValueChange={toggleSwitch}
            value={serviceStatus}
          />
        </View>
      </View>
      <View style={style.intervalContainer}>
        <Text style={style.statusTitle}>Intervalo de comunicação</Text>
        <SquareButton />
      </View>
    </View>
  )
}

export default Home;