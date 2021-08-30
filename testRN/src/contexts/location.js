import React, {createContext, useState, useEffect} from 'react';
import * as Service from '../services/connectionService'
import {HOST} from '../../env.json';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';

export const LocationContext = createContext({})

const LocationProvider = ({children}) => {
    const [syncPack, setSyncPack] = useState([])
    const [status, setStatus] = useState(false)
    //const [count, setCount] = useState(0)
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
            //setCount(list.length)
            await list.map(item=>getPackage(item))
            const uiniqueArr = Array.from(new Set(syncPack.map(a => a.id))).map(id => {
                return syncPack.find(a => a.id === id)
            })
           //console.log([...new Set(syncPack)])
            // const mySet = new Set(arr)
            setSyncPack(uiniqueArr)
            //console.log(syncPack)
    }

    const getPackage = async (id) => {
        const response = await Service.getLocation(host,id)
        // if(syncPack.length<count){
            const temp = response.points[0]
            const temp2 = {
                id: temp.id,
                latitude: temp.latitude,
                longitude: temp.longitude,
                speed: temp.speed,
                time: temp.time,
                status: true
            }
            syncPack.push(temp2)
        //}
    }
    const sendLocation = async (latitude,longitude,speed) => {
        const response = await Service.sendLocation(host,latitude,longitude,speed)
        //if(JSON.stringify(syncPack) !== JSON.stringify(response)){
            const temp = response.points[0]
            const temp2 = {
                id: temp.id,
                latitude: temp.latitude,
                longitude: temp.longitude,
                speed: temp.speed,
                time: temp.time,
                status: true
            }
            // mySet.add(temp2)
            // setSyncPack(...mySet)
            return temp2
        //}
    }

    const getList = async () => {
        const response = await Service.getList(host)
        const aux = response.keys
        return aux
    }

    useEffect(()=>{
        NetInfoSubscription =  NetInfo.addEventListener(handleConnectionChange);
        return () => NetInfoSubscription && NetInfoSubscription()
    },[])

    return(
        <LocationContext.Provider value={{ sendLocation, status, giveList, givePack, syncPack}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider