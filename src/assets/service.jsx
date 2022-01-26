import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeServicePrice} from "../store/AppSlice";

export const renderServices = (data)=>{
    let renderData = data.map((item, i) => <Service key={i} item={item}/>)
    return renderData
}




const Service = ({item}) => {
    const servicePrice = useSelector(state => state.app.servicePrice);
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const {src, srcA, price} = item;

    const handleActive = ()=>{
        setActive(!active)
        let x
        if (!active) {x = servicePrice + parseInt(price)}
        else {x = servicePrice - parseInt(price)}
        dispatch(changeServicePrice(x))
    }

    return (
        <div>
            <img src={active ? srcA : src} alt="img" onClick={handleActive}/>
            <span>{price} ₽</span>
        </div>
    );
};


