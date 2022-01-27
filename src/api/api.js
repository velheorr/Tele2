import * as axios from "axios";


const baseURL = 'http://localhost:3030/'



export const api = {
    getData(type){
        let res = axios.get(`${baseURL}${type}`)
        return res
    },
    postData(data){
        axios.patch(`${baseURL}userData`, data)
    }
}