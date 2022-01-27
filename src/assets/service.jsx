import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeServicePrice, countTotal} from "../store/AppSlice";

// рэндер соцсетей и мессенджеров
export const renderServices = (data)=>{
    return data.map((item, i) => <Service key={i} item={item}/>)
}

const Service = ({item}) => {
    const additionalServices = useSelector(state => state.app.additionalServices);
    const dependFromSMS = useSelector(state => state.app.dependFromSMS);
    const dispatch = useDispatch()
    const {src, srcA, price, id, active} = item;

    // при  кол-ве смс 0 = будут активированы сервисы со след. id
    useEffect(()=>{
        if (additionalServices === true && dependFromSMS.includes(id)){
                handleActive(id, true)
        }
    },[additionalServices])

    // ф-я чекбокса сервисов и пересчета стоимости тарифа
    const handleActive = (id, bool)=>{
        if (additionalServices === true && dependFromSMS.includes(id)) {
            dispatch(changeServicePrice({id, bool: true}))
        } else {
            dispatch(changeServicePrice({id, bool}))
        }
        dispatch(countTotal())
    }

    return (
        <div>
            <img src={active ? srcA : src} alt="img" onClick={()=> handleActive(id, false)}/>
            <span>{price} ₽</span>
        </div>
    );
};


