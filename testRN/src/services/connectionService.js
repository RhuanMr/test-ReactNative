import { makeid } from "../utils/idGenerator";

export const sendLocation = async (host,latitude,longitude,speed) => {
    const id = makeid();
    const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.parse({
            id: id,
            latitude: latitude,
            longitude: longitude,
            speed: speed,
            time: new Date(),
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