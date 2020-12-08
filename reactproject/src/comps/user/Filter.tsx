import React from 'react'
import CategoryToCalendarFilter from '../../interfaces/CategoryToCalendarFilter'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ServiceData from '../../interfaces/ServiceData'
import { hslToRgb } from '@material-ui/core/styles';
import ServiceToCallendar from '../../interfaces/ServiceToCallendar';

export interface FilterProps {
    filter: CategoryToCalendarFilter;
    selectFilter: Function;
}
export default function Filter(props: FilterProps) {
    const { services, id, name, color } = props.filter;

    const defaultProps = {
        options: services,
        getOptionLabel: (option: ServiceData) => option.name,

    };
    // const flatProps = {
    //     options: services.map((option) => option.name),
    // };
    const click = (value: any, newValue: any) => {
        let obj: ServiceToCallendar;
        if (newValue === null) {
            obj = {
                idCategory: id, colorCategory: color,
                idService: -1
            }
        }
        else {
            obj = {
                idCategory: id,
                colorCategory: color,
                idService: newValue.id
            }
        }
        props.selectFilter(obj);
    }
    return (

        <Autocomplete
            {...defaultProps}
            id={id.toString()}
            onChange={click}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label={name}
                        margin="normal"
                        fullWidth
                        InputLabelProps={{ style: { color: hslToRgb(color) } }}
                    />
                )
            }}
        />)

}