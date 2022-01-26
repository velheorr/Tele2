import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeServicePrice, countTotal} from "../store/AppSlice";

export const renderServices = (data)=>{
    let renderData = data.map((item, i) => <Service key={i} item={item}/>)
    return renderData
}


const Service = ({item}) => {
    const additionalServices = useSelector(state => state.app.additionalServices);
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const {src, srcA, price, id} = item;

    useEffect(()=>{
        if (additionalServices === true){
            if (id === 13 || id === 21 || id === 22){
                 setActive(true)
            }
        }
    },[additionalServices])

    const handleActive = ()=>{
        setActive(!active)
        let x
        if (!active) {x = price}
        else {x = -price}
        dispatch(changeServicePrice(x))
        dispatch(countTotal())
    }

    return (
        <div>
            <img src={active ? srcA : src} alt="img" onClick={handleActive}/>
            <span>{price} ₽</span>
        </div>
    );
};


