import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeServicePrice} from "../store/AppSlice";

export const renderServices = (data)=>{
    let renderData = data.map((item, i) => <Service key={i} item={item}/>)
    return renderData
}


const Service = ({item}) => {
    const servicePrice = useSelector(state => state.app.servicePrice);
    const additionalServices = useSelector(state => state.app.additionalServices);
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const {src, srcA, price} = item;

    if (additionalServices === true && item.id === 13 && item.id === 21){
        setActive(!active)
    }
    useEffect(()=>{
        if (additionalServices === true){
            if (item.id === 13 || item.id === 21 || item.id === 22){
                setActive(!active)
            }
        }
    },[additionalServices])
    console.log(additionalServices)

    const handleActive = ()=>{
        setActive(!active)
        let x
        if (!active) {x = servicePrice + price}
        else {x = servicePrice - price}
        dispatch(changeServicePrice(x))
    }

    return (
        <div>
            <img src={active ? srcA : src} alt="img" onClick={handleActive}/>
            <span>{price} ₽</span>
        </div>
    );
};


