import React, { useState } from 'react';
import ServiceToCallendar from '../../interfaces/ServiceToCallendar';
import './Calendar.css';
import Callendar from './Callendar'
import CallendarFilter from './CallendarFilter'

export default function Calendar() {
    const [callendarFilter, setCallendarFilter] = useState<ServiceToCallendar[]>([])
    const selectFilter = (obj: ServiceToCallendar) => {
        console.log("filter", JSON.stringify(obj))
        let objHelp = [...callendarFilter];
        let index = objHelp.findIndex(o => o.idCategory === obj.idCategory);
        if (obj.idService === -1) {
            if (index === -1)
                return;
            objHelp = objHelp.filter(o => o.idCategory !== obj.idCategory);
        }
        else {
            // קריאה לקבלת התאריכים התפוסים 
            // את התאריכים התפוסיםobj הוספה ל

            let dates = [new Date(2021, 1, 1), new Date(2021, 1, 30), new Date(2020, 12, 24), new Date(2018, 12, 20)];
            obj.BusyDateToService = dates;
            if (index === -1)
                objHelp.push(obj);
            else {

                objHelp[index].idService = obj.idService;
                //לעדכן את התאריכים
                objHelp[index].BusyDateToService = dates;
            }
        }
        setCallendarFilter(objHelp)
    }
    return (
        <div className="parent11">
            <div className="callendar">
                <Callendar callendarFilter={callendarFilter} />
            </div>
            <div className="filter">
                <CallendarFilter selectFilter={(filter: ServiceToCallendar) => selectFilter(filter)} />
                <div className="clean"></div>
            </div>
            <div className="back"></div>
            <div className="next"></div>
        </div>
    )
}
