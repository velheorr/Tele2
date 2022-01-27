import * as axios from "axios";


const baseURL = 'http://localhost:3030/'


// api отправки данных на json сервер
// отправка после каждого изминения стейта
export const api = {
    postData(data){
        axios.patch(`${baseURL}userData`, data)
        api.getData()
    },
    // вывод текущего выбранного тарифа в консоль
    async getData(){
        const res = await axios.get(`${baseURL}userData`)
        console.log('Данные отправлены на сервер',res.data)
    }
}