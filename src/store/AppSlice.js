import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    minutes: [
        {value: 100, label: '100 мин', price: 150},
        {value: 200, label: '200 мин', price: 200},
        {value: 300, label: '300 мин', price: 225},
        {value: 600, label: '600 мин', price: 400},
    ],
    sms: [
        {value: 0, label: '0 смс', price: 0},
        {value: 50, label: '50 смс', price: 280},
        {value: 100, label: '100 смс', price: 270},
        {value: 150, label: '150 смс', price: 260},
    ],
    ethernet: [
        {value: 5, label: '5 ГБ', price: 100},
        {value: 10, label: '10 ГБ', price: 180},
        {value: 15, label: '15 ГБ', price: 220},
        {value: 25, label: '25 ГБ', price: 300},
    ],
    social: [
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120014',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120004',
            price: 20
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m4580002',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m4580001',
            price: 20
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120015',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120005',
            price: 20
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1680034',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            price: 60
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340107',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340106',
            price: 60
        }
    ],
    messengers: [
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120021',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120011',
            price: 10
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120019',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120009',
            price: 10
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120016',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120006',
            price: 10
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340101',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340100',
            price: 20
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3230033',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3230032',
            price: 10
        }
    ],
    currMin: 0,
    currSms: 0,
    currGB: 0,
    servicePrice: 0
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getMin: (state, action) => {
            const price = initialState.minutes.find(i => i.value === action.payload)
            state.currMin = price.price
        },
        getSms: (state, action) => {
            const price = initialState.sms.find(i => i.value === action.payload)
            state.currSms = price.price
        },
        getGb: (state, action) => {
            const price = initialState.ethernet.find(i => i.value === action.payload)
            state.currGB = price.price
        },
        changeServicePrice: (state, action) => {
            state.servicePrice = action.payload
        }
    },
});

const {actions, reducer} = appSlice;

export default reducer;
export const {
    getMin, getSms, getGb, changeServicePrice
} = actions;