import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeServicePrice, countTotal} from "../store/AppSlice";

// рэндер соцсетей и мессенджеров
export const renderServices = (data)=>{
    return data.map((item, i) => <Service key={i} item={item}/>)
}

const Service = ({item}) => {
    const additionalServices = useSelector(state => state.app.additionalServices);
    const dispatch = useDispatch()
    const {src, srcA, price, id, active} = item;

    // при  кол-ве смс 0 = будут активированы сервисы со след. id
    // так же данную задачу можно реализовать если id будут в стейте или приходить из бэка
    useEffect(()=>{
        if (additionalServices === true && (id === 13 || id === 21 || id === 22)){
                handleActive(id, true)
        }
    },[additionalServices])

    // ф-я чекбокса сервисов и пересчета стоимости тарифа
    const handleActive = (id, bool)=>{
        dispatch(changeServicePrice({id, bool}))
        dispatch(countTotal())
    }

    return (
        <div>
            <img src={active ? srcA : src} alt="img" onClick={()=> handleActive(id, false)}/>
            <span>{price} ₽</span>
        </div>
    );
};


