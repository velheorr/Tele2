import {createTheme} from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {countTotal, getGb, getMin, getSms} from "../store/AppSlice";

// рэндер слайдеров Минут, СМС, Интернета
const MySlider = ({marks, min, max, defaultValue, type}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        // передача значения по умолчанию в стейт
        dispatchType(defaultValue)
    },[])

    // передача текущего значения в стейт, исходя из вида слайдера
    const dispatchType =(val)=>{
        if (type === 'minutes') {
            dispatch(getMin(val))
        } else if (type === 'ethernet') {
            dispatch(getGb(val))
        } else if (type === 'sms') {
            dispatch(getSms(val))
        }
        dispatch(countTotal())
    }

    // установка черного цвета слайдеру
    const theme = createTheme({
        components: {
            MuiSlider: {
                styleOverrides: {
                    root: {
                        color: "black",
                    }
                }
            }
        }
    });

    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    return (
        <Box sx={{ width: 500, margin: '20px'}}>
            <Slider
                onChangeCommitted={(_, value) => dispatchType(value)}
                theme={theme}
                aria-label="Restricted values"
                defaultValue={defaultValue}
                valueLabelFormat={valueLabelFormat}
                step={null}
                valueLabelDisplay="off"
                marks={marks}
                min={min}
                max={max}
            />
        </Box>
    );
};

export default MySlider;