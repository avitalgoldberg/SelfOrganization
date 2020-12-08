import React from 'react'
import CategoryFilter from '../../interfaces/CategoryFilter'
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function valuetext(value: number) {
    return `${value}`;
}

export default function Num(props: CategoryFilter) {
    const minMax = props.values.split(" ");
    const [value, setValue] = React.useState<number[]>([(Number)(minMax[0]), (Number)(minMax[1])]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        props.filterChange && props.filterChange(newValue)
    };
    return (
        <FormControlLabel
            value="end"
            control={
                <Slider
                    max={(Number)(minMax[1])}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            }
            label={props.nameFilter}
            labelPlacement="top"
            style={{ width: '100%' }}
        />
    )

}