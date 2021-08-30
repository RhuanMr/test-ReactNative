import React, { useContext, useEffect, useState } from 'react';
import {FlatList, View} from 'react-native';
import Header from '../../components/Header';
import Items from '../../components/Items';
import { LocationContext } from '../../contexts/location';
import style from './styles';
import { useIsFocused } from "@react-navigation/native";

const  StatusScreen = () => {
  const [locationList, setLocationList] = useState([])
  const{giveList, givePack, syncPack} = useContext(LocationContext)
  const isFocused = useIsFocused();

  const handleLocationList = async (item) => {
    await givePack(item)
    setLocationList(syncPack)
    const uiniqueArr = Array.from(new Set(syncPack.map(a => a.id))).map(id => {
      return syncPack.find(a => a.id === id)
  })
    setLocationList(uiniqueArr)
  }

  const handleIdList = async () => {
    const aux = await giveList()
    handleLocationList(aux)
  }

  useEffect(()=>{
     if(isFocused){
       handleIdList()
     }
  },[isFocused])


  return(
    <View>
      <Header page="StatusScreen" />
      <View style={style.container}>
        {locationList && 
          <FlatList 
            data={locationList}
            style={style.list}
            keyExtractor={(item) => item.id}
            renderItem={
              ({item}) => <Items data={item}/>
            }
          />}
      </View>
    </View>
  );
}

export default  StatusScreen;