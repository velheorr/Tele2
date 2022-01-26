import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    minutes: [
        {value: 200, label: '200 мин', price: 200},
        {value: 400, label: '400 мин', price: 280},
        {value: 800, label: '800 мин', price: 270},
        {value: 1000, label: '1000 мин', price: 260},
    ],
    ethernet: [
        {value: 10, label: '10 ГБ', price: 200},
        {value: 20, label: '20 ГБ', price: 280},
        {value: 35, label: '35 ГБ', price: 270},
        {value: 40, label: '40 ГБ', price: 260},
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
    totalPrice: 0,
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