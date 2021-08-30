import React, {createContext, useState, useEffect} from 'react';
import * as Service from '../services/connectionService'
import {HOST} from '../../env.json';
import NetInfo from "@react-native-community/netinfo";
import { makeid } from '../utils/idGenerator';
import AsyncStorage from '@react-native-community/async-storage';

export const LocationContext = createContext({})

const LocationProvider = ({children}) => {
    const [syncPack, setSyncPack] = useState([])
    const [offlineSyncPack, setOffilineSyncPack] = useState([])
    const [unsendPacks, setUnsendPacks] = ([])
    const [status, setStatus] = useState(false)
    const host = `${HOST}`

    let NetInfoSubscription = null;
    const handleConnectionChange = (state) => {
        let connection = state.isConnected
        setStatus(connection)
    };

    const giveList = async () => {
        const list = await getList()
        return list
    }

    const givePack = async (list) => {
        await list.map(item=>getPackage(item))
    }

    const getPackage = async (id) => {
        const response = await Service.getLocation(host,id)
            const temp = response.points
            const temp2 = {
                id: temp.id,
                latitude: temp.latitude,
                longitude: temp.longitude,
                speed: temp.speed,
                time: temp.time,
                status: true
            }
            syncPack.push(temp2)
            storageSave(temp2)
    }
    const sendLocation = async (id,latitude,longitude,speed,time) => {
        if(status){
            const response = await Service.sendLocation(host,id,latitude,longitude,speed,time)
            const temp = response.points
            const temp2 = {
                id: temp.id,
                latitude: temp.latitude,
                longitude: temp.longitude,
                speed: temp.speed,
                time: temp.time,
                status: true
            }
            syncPack.push(temp2)
            storageSave(temp2)
        }else{
            const temp2 = {
                id: makeid(),
                latitude: latitude,
                longitude: longitude,
                speed: speed,
                time: time,
                status: false
            }
            unsendPacks.push(temp2)
            storageSave(temp2)
        }
    }

    const getList = async () => {
        const response = await Service.getList(host)
        const aux = response.keys
        return aux
    }

    const storageSave = async (data) => {
        const savedSyncPack = await AsyncStorage.getItem('syncList')
        if(savedSyncPack){
            const aux1 = JSON.parse(savedSyncPack)
            const aux2 = [...aux1,data]
            const jsonvalue = JSON.stringify(aux2)
            await AsyncStorage.setItem('syncList', jsonvalue)
            //await AsyncStorage.clear()
        }else{
            const aux = [data]
            const jsonvalue = JSON.stringify(aux)
            await AsyncStorage.setItem('syncList', jsonvalue)
        }
    }

    const loadOffilineList = async () => {
        if(unsendPacks){
            await unsendPacks.map(item => sendLocation(item.id,item.latitude,item.longitude,item,speed,item.time))
        }
    }

    const loadStorage = async () => {
        const savedSyncPack = await AsyncStorage.getItem('syncList')
        const aux = JSON.parse(savedSyncPack)
        aux.map(item => offlineSyncPack.push(item))
    }

    useEffect(()=>{
        NetInfoSubscription =  NetInfo.addEventListener(handleConnectionChange);
        return () => NetInfoSubscription && NetInfoSubscription()
    },[])

    return(
        <LocationContext.Provider value={{ sendLocation, status, giveList, givePack, syncPack, offlineSyncPack, loadStorage, loadOffilineList}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider