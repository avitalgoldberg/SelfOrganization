import React from 'react'
import CategoryToCalendarFilter from '../../interfaces/CategoryToCalendarFilter'
import ServiceToCallendar from '../../interfaces/ServiceToCallendar'
import Filter from './Filter'

const arr: CategoryToCalendarFilter[] = [
    {
        id: 1,
        name: "אולם",
        color: "hsl(1, 100, 50)",
        services: [{ id: 1, name: "וגשל" }, { id: 2, name: "קונקורד" }, { id: 3, name: "ארמונות חן" }]
    },
    {
        id: 2,
        name: "זמרים",
        color: "hsl(16, 100, 50)",
        services: [{ id: 4, name: "אברהם פריד" }, { id: 5, name: "ישי לפידות" }, { id: 6, name: "אריה ברונר" }]
    },
    {
        id: 3,
        name: "תזמורות",
        color: "hsl(31, 100, 50)",
        services: [{ id: 7, name: "עמירן דביר" }, { id: 8, name: "יואלי דיקמן" }, { id: 9, name: "המנגנים" }]
    }
]
export interface CallendarFilterProps {
    selectFilter: Function;
}
export default function CallendarFilter(props: CallendarFilterProps) {
    return (
        <div>
            {arr.map((item, idx) => {

                return <Filter key={idx} filter={item} selectFilter={(obj: ServiceToCallendar) => props.selectFilter(obj)} />
            })
            } </div>
    )
}