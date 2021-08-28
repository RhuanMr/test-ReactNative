import React, {createContext, useState, useEffect} from 'react';
import * as Service from '../services/connectionService'
import {HOST} from '../../env.json';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';

export const LocationContext = createContext({})

const LocationProvider = ({children}) => {
    const [list, setList] = useState(null)
    const [syncPack, setSyncPack] = useState([])
    const [status, setStatus] = useState(false)
    const host = `${HOST}`

    const mySet = new Set()

    let NetInfoSubscription = null;
    const handleConnectionChange = (state) => {
        let connection = state.isConnected
        setStatus(connection)
    };

    const giveList = async () => {
        await getList()
    }

    const givePack = () => {
        list.map(item=>getPackage(item))
    }

    const getPackage = async (id) => {
        const response = await Service.getLocation(host,id)
        if(JSON.stringify(syncPack) !== JSON.stringify(response)){
            const temp = response.points[0]
            const temp2 = {
                id: temp.id,
                latitude: temp.latitude,
                longitude: temp.longitude,
                speed: temp.speed,
                time: temp.time,
                status: true
            }
            mySet.add(temp2)
            setSyncPack(...mySet)
            console.log(syncPack)
        }
    }
    const sendLocation = async (latitude,longitude,speed) => {
        const response = await Service.sendLocation(host,latitude,longitude,speed)
        if(JSON.stringify(syncPack) !== JSON.stringify(response)){
            const temp = response.points[0]
            const temp2 = {
                id: temp.id,
                latitude: temp.latitude,
                longitude: temp.longitude,
                speed: temp.speed,
                time: temp.time,
                status: true
            }
            mySet.add(temp2)
            setSyncPack(...mySet)
        }
    }

    const getList = async () => {
        const response = await Service.getList(host)
        if(JSON.stringify(list) !== JSON.stringify(response)){
            const aux = response.keys
            setList(aux)
            if(list){
                givePack()
            }
        }
    }

    useEffect(()=>{
        NetInfoSubscription =  NetInfo.addEventListener(handleConnectionChange);
        return () => NetInfoSubscription && NetInfoSubscription()
    },[])

    useEffect(()=>{
        if(status){
            giveList()
        }
    },[status])

    useEffect(()=>{
        console.log("test" + syncPack)
    },[syncPack])

    return(
        <LocationContext.Provider value={{ sendLocation, status, syncPack}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider