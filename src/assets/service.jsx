import {useState} from "react";

export const renderServices = (data)=>{
    let renderData = data.map((item, i) => <Service key={i} item={item}/>)
    return renderData
}




const Service = ({item}) => {
    const [active, setActive] = useState(false)
    const {src, srcA, price} = item;

    const handleActive = ()=>{
        setActive(!active)
    }

    return (
        <div>
            <img src={active ? srcA : src} alt="img" onClick={handleActive}/>
            <span>{price} ₽</span>
        </div>
    );
};


