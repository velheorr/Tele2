import {createTheme} from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";


const MySlider = ({marks, min, max, defaultValue}) => {
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