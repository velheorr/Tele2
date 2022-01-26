import './App.scss';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import MySlider from "./assets/slider";
import {renderServices} from "./assets/service";
import {useSelector} from "react-redux";


function App() {
    const minutes = useSelector(state => state.app.minutes);
    const sms = useSelector(state => state.app.sms);
    const ethernet = useSelector(state => state.app.ethernet);
    const social = useSelector(state => state.app.social);
    const messengers = useSelector(state => state.app.messengers);

    const currMin = useSelector(state => state.app.currMin);
    const currSms = useSelector(state => state.app.currSms);
    const currGB = useSelector(state => state.app.currGB);
    const servicePrice = useSelector(state => state.app.servicePrice);


    const renderSocial = renderServices(social)
    const renderMessengers = renderServices(messengers)

    const finalPrice =  currMin + currSms + currGB + servicePrice


    return (
        <div className="App">
            <div className='container'>
                <h1 className='header'>Настройте тариф</h1>
                <div className='title'>Минуты</div>
                <div>На Tele2 России безлимитно</div>
                <div>на другие мобильные номера домашнего региона</div>
                <MySlider marks={minutes} min={100} max={600} defaultValue={100} type='minutes'/>
                <div>
                    <AddCircleOutlineRoundedIcon className='icon'/>
                     Используйте вместе с тарифом
                </div>
                <div className='title'>СМС</div>
                <MySlider marks={sms} min={0} max={150} defaultValue={0} type='sms'/>
                <div className='title'>Интернет</div>
                <MySlider marks={ethernet} min={5} max={25} defaultValue={5} type='ethernet'/>

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
