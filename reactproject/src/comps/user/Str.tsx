import React from 'react'
import CategoryFilter from '../../interfaces/CategoryFilter'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Str(props: CategoryFilter) {
    const click = (value: any, newValue: any) => {
        props.filterChange && props.filterChange(newValue);
    }
    return (
        <FormControlLabel
            control={<div style={{ width: '100%' }}>
                <Autocomplete
                    onChange={click}
                    // id="combo-box-demo"
                    id={props.idFilter.toString()}
                    options={props.values.split(" ")}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
                /></div>
            }
            style={{ width: '100%' }}
            label={props.nameFilter}
            labelPlacement="top"
        />
    )

}