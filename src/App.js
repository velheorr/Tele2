import './App.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import MySlider from "./assets/slider";
import {renderServices} from "./assets/service";
import {useSelector} from "react-redux";


function App() {
    const minutes = useSelector(state => state.app.minutes);
    const ethernet = useSelector(state => state.app.ethernet);
    const social = useSelector(state => state.app.social);
    const messengers = useSelector(state => state.app.messengers);

    const totalPrice = useSelector(state => state.app.totalPrice);
    const currMin = useSelector(state => state.app.currMin);
    const currGB = useSelector(state => state.app.currGB);
    const servicePrice = useSelector(state => state.app.servicePrice);


    const renderSocial = renderServices(social)
    const renderMessengers = renderServices(messengers)

    const finalPrice = totalPrice + currMin + currGB + servicePrice


    return (
        <div className="App">
            <div className='container'>
                <h1 className='header'>Настройте тариф</h1>
                <div className='title'>Минуты</div>
                <div>На Tele2 России безлимитно</div>
                <div>на другие мобильные номера домашнего региона</div>
                <MySlider marks={minutes} min={200} max={1000} defaultValue={200} type='minutes'/>
                <div>
                    <AddCircleOutlineRoundedIcon className='icon'/>
                     Используйте вместе с тарифом
                </div>
                <div className='title'>Интернет</div>
                <MySlider marks={ethernet} min={10} max={40} defaultValue={10} type='ethernet'/>

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
                <div className='foot'>{finalPrice} ₽/месяц</div>
            </div>

        </div>
    );
}

export default App;
