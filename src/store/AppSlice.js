import {createSlice, current} from '@reduxjs/toolkit'
import {api} from "../api/api";


const initialState = {
    minutes: [
        {value: 100, label: '100 мин', price: 150},
        {value: 200, label: '200 мин', price: 200},
        {value: 300, label: '300 мин', price: 270},
        {value: 600, label: '600 мин', price: 400},
    ],
    sms: [
        {value: 0, label: '0 смс', price: 0},
        {value: 50, label: '50 смс', price: 70},
        {value: 100, label: '100 смс', price: 120},
        {value: 150, label: '150 смс', price: 170},
    ],
    ethernet: [
        {value: 5, label: '5 ГБ', price: 100},
        {value: 10, label: '10 ГБ', price: 180},
        {value: 15, label: '15 ГБ', price: 220},
        {value: 25, label: '25 ГБ', price: 300},
    ],
    social: [
        {
            id: 12,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120014',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120004',
            price: 20,
            active: false
        },
        {
            id: 13,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m4580002',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m4580001',
            price: 10,
            active: false
        },
        {
            id: 14,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120015',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120005',
            price: 20,
            active: false
        },
        {
            id: 15,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1680034',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            price: 60,
            active: false
        },
        {
            id: 16,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340107',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340106',
            price: 60,
            active: false
        }
    ],
    messengers: [
        {
            id: 21,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120021',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120011',
            price: 10,
            active: false
        },
        {
            id: 22,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120019',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120009',
            price: 10,
            active: false
        },
        {
            id: 23,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120016',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120006',
            price: 10,
            active: false
        },
        {
            id: 24,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340101',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340100',
            price: 20,
            active: false
        },
        {
            id: 25,
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3230033',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3230032',
            price: 10,
            active: false
        }
    ],
    additionalServices: false,
    currMin: 0,
    currSms: 0,
    currGB: 0,
    servicePrice: 0,
    total: 0
}




const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getMin: (state, action) => {
            const price = initialState.minutes.find(i => i.value === action.payload)
            state.currMin = price.price
            api.postData({minutes: state.currMin})

        },
        getSms: (state, action) => {
            const price = initialState.sms.find(i => i.value === action.payload)
            if (price.value === 0) {
                state.additionalServices = true
            } else {
                state.additionalServices = false
            }
            state.currSms = price.price
            api.postData({sms: state.currSms})
        },
        getGb: (state, action) => {
            const price = initialState.ethernet.find(i => i.value === action.payload)
            state.currGB = price.price
            api.postData({ethernet: state.currGB})
        },
        changeServicePrice: (state, action) => {
            const searchArr = state.messengers.concat(state.social)
            const el = searchArr.find(i => i.id === action.payload.id)
            el && action.payload.bool ? el.active = true : el.active = !el.active

            let count = 0
            searchArr.forEach(i => {
                if(i.active) {count = count + i.price}
            })
            state.servicePrice = count
        },
        countTotal: (state,action) => {
            state.total = state.currMin + state.currSms + state.currGB + state.servicePrice
        }
    },
});

const {actions, reducer} = appSlice;

export default reducer;
export const {
    getMin, getSms, getGb, changeServicePrice, countTotal
} = actions;