import React, { useState } from 'react'
import CategoryFilter from '../../interfaces/CategoryFilter'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Bool(props: CategoryFilter) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        props.filterChange && props.filterChange(!event.target.checked);
    };


    return (
        <div style={{ width: '100%' }}>
            <FormControlLabel
                value="end"
                control={<Checkbox color="primary" checked={checked} onChange={handleChange} />}
                label={props.nameFilter}
                labelPlacement="top"
                style={{ width: '100%' }}

            />
        </div>
    )

}