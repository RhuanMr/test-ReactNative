import React, { useContext, useEffect, useState } from 'react';
import {FlatList, View} from 'react-native';
import Header from '../../components/Header';
import Items from '../../components/Items';
import { LocationContext } from '../../contexts/location';
import style from './styles';

const  StatusScreen = () => {
  const [locationList, setLocationList] = useState([])
  const{syncPack} = useContext(LocationContext)

  console.log("to aki " + locationList)

  const handleLocationList = (item) =>{
    setLocationList(item)
  }

  useEffect(()=>{
    handleLocationList(JSON.stringify(syncPack))
  },[syncPack])


  return(
    <View>
      <Header page="StatusScreen" />
      <View style={style.container}>
        {locationList && 
          <FlatList 
            data={locationList}
            keyExtractor={(item) => item.id}
            renderItem={
              ({item}) => <Items data={item}/>
            }
          />
        }
      </View>
    </View>
  );
}

export default  StatusScreen;