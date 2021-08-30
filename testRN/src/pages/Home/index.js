import React, { useEffect, useState, useContext} from 'react';
import { Image, Text, View, Switch, FlatList, PermissionsAndroid } from 'react-native';
import Header from '../../components/Header';
import SquareButton from '../../components/SquareButton';
import COLORS from '../../styles/colors';
import style from './styles';
import Geolocation from '@react-native-community/geolocation';
import * as ID from "../../utils/idGenerator";
import {LocationContext} from '../../contexts/location'

const Home = ()=>{
  const [serviceStatus, setServiceStatus] = useState(false)
  const [currentLatitude, setCurrentLatitude] = useState('')
  const [currentLongitude, setCurrentLongitude] = useState('')
  const [speed, setSpeed] = useState('')
  const [selectedTime, setSelectedTime] = useState({id: '1', name: '10s', value: 10000})
  const [sec] = useState([
    {id: '1', name: '10s', value: 10000},
    {id: '2', name: '5s', value: 5000},
    {id: '3', name: '3s', value: 3000},
    {id: '4', name: '1s', value: 1000},
  ])

  const [interval1, setInterval1] = useState(null)
  const { status, sendLocation } = useContext(LocationContext)
  const toggleSwitch = () =>{
    setServiceStatus(!serviceStatus)
  }

  const handleInterval = (temp) =>{
    if(interval1){
      clearInterval(interval1)
      setInterval1(null)
    }
    const auxInterval = setInterval(() => {
      callLocation()
    }, temp.value)
    setInterval1(auxInterval)
  }

  useEffect(()=>{
    if(serviceStatus){
      handleInterval(selectedTime)
    }else{
      clearInterval(interval1)
      setInterval1(null)
    }
  }, [selectedTime, serviceStatus])
  
  const callLocation = () => {
      if(Platform.OS === 'ios') {
        getLocation();
      } else {
        const requestLocationPermission = async () => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Permissão de Acesso à Localização",
              message: "Este aplicativo precisa acessar sua localização.",
              buttonNeutral: "Pergunte-me depois",
              buttonNegative: "Cancelar",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          } else {
            alert('Permissão de Localização negada')
          }
        };
        requestLocationPermission()
      }
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude)
        const currentLongitude = JSON.stringify(position.coords.longitude)
        const speed = JSON.stringify(position.coords.speed)
        setCurrentLatitude(currentLatitude)
        setCurrentLongitude(currentLongitude)
        setSpeed(speed)
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true }
    );
    sendLocation(ID.makeid(),currentLatitude,currentLongitude,speed,new Date())
  }

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
        <FlatList 
          horizontal
          data={sec}
          extraData={selectedTime.id}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            const backgroundColor = 
              item.id === selectedTime.id ? false : true
            return(
              <SquareButton 
                data={item}
                onPress={() =>setSelectedTime(item)}
                select={backgroundColor}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

export default Home;