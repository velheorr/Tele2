import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeServicePrice, countTotal} from "../store/AppSlice";

export const renderServices = (data)=>{
    let renderData = data.map((item, i) => <Service key={i} item={item}/>)
    return renderData
}


const Service = ({item}) => {
    const additionalServices = useSelector(state => state.app.additionalServices);
    const dispatch = useDispatch()
    const {src, srcA, price, id, active} = item;

    useEffect(()=>{
        if (additionalServices === true){
            if (id === 13 || id === 21 || id === 22){
                handleActive(id, true)
            }
        }
    },[additionalServices])

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


