import {Counter} from './features/counter/Counter';
import './App.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import MySlider from "./assets/slider";
import {renderServices} from "./assets/service";


function App() {

    const minutes = [
        {
            value: 200,
            label: '200 мин',
        },
        {
            value: 400,
            label: '400 мин',
        },
        {
            value: 800,
            label: '800 мин',
        },
        {
            value: 1000,
            label: '1000 мин',
        },
    ];

    const ethernet = [
        {
            value: 10,
            label: '10 ГБ',
        },
        {
            value: 20,
            label: '20 ГБ',
        },
        {
            value: 35,
            label: '35 ГБ',
        },
        {
            value: 40,
            label: '40 ГБ',
        },
    ];


    const social = [
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
    ]

    const messengers = [
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
    ]


    const renderSocial = renderServices(social)
    const renderMessengers = renderServices(messengers)


    return (
        <div className="App">
            <div className='container'>
                <h1 className='header'>Настройте тариф</h1>
                <div className='title'>Минуты</div>
                <div>На Tele2 России безлимитно</div>
                <div>на другие мобильные номера домашнего региона</div>
                <MySlider marks={minutes} min={200} max={1000} defaultValue={200}/>
                <div>
                    <AddCircleOutlineRoundedIcon className='icon'/>
                     Используйте вместе с тарифом
                </div>
                <div className='title'>Интернет</div>
                <MySlider marks={ethernet} min={10} max={40} defaultValue={10}/>

                <div className='title'>Соцсети</div>
                <div className='services'>
                    {renderSocial}
                </div>

                <div className='title'>Мессенджеры</div>
                <div className='services'>
                    {renderMessengers}
                </div>


            </div>
            <div className='footer'>
                <div className='foot'>
                    420p/месяц
                </div>
            </div>

        </div>
    );
}

export default App;
