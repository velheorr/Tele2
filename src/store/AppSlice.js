import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    minutes: [
        {value: 100, label: '200 мин', price: 200},
        {value: 200, label: '400 мин', price: 280},
        {value: 300, label: '800 мин', price: 270},
        {value: 600, label: '1000 мин', price: 260},
    ],
    sms: [
        {value: 0, label: '200 смс', price: 200},
        {value: 50, label: '400 смс', price: 280},
        {value: 100, label: '800 смс', price: 270},
        {value: 150, label: '1000 смс', price: 260},
    ],
    ethernet: [
        {value: 5, label: '10 ГБ', price: 200},
        {value: 10, label: '20 ГБ', price: 280},
        {value: 15, label: '35 ГБ', price: 270},
        {value: 25, label: '40 ГБ', price: 260},
    ],
    social: [
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120014',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120004',
            price: '20'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m4580002',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m4580001',
            price: '20'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120015',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120005',
            price: '20'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1680034',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            price: '60'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340107',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340106',
            price: '60'
        }
    ],
    messengers: [
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120021',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120011',
            price: '10'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120019',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120009',
            price: '10'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120016',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m1120006',
            price: '10'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340101',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3340100',
            price: '20'
        },
        {
            src: 'https://msk.tele2.ru/api/media/asset?mediaId=m3230033',
            srcA: 'https://msk.tele2.ru/api/media/asset?mediaId=m3230032',
            price: '10'
        }
    ],
    currMin: 0,
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
    getMin, getGb, changeServicePrice
} = actions;