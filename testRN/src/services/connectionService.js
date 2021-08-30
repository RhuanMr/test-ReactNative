import { makeid } from "../utils/idGenerator";

export const sendLocation = async (host, id,latitude,longitude,speed,time) => {
    const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            latitude: latitude,
            longitude: longitude,
            speed: speed,
            time: time,
        }),
    }
    const fetchResponse= await fetch(`${host}/points/${id}`, settings);
    try{
        const data = await fetchResponse.json();
        if(data.status){
            return data
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getLocation = async (host,id) => {
    try{
        const fetchResponse = await fetch(`${host}/points/${id}`)
        const data = await fetchResponse.json()
        return data
    } catch (error){
        console.error('Error:', error);
    }
}

export const getList = async (host) => {
    try{
        const fetchResponse = await fetch(`${host}/points`)
        const data = await fetchResponse.json()
        return data
    } catch (error){
        console.error('Error:', error);
    }
}