import { Color } from '@material-ui/core';
import ServiceData from './ServiceData'

export default interface CategoryToCalendarFilter {
    id: number;
    name: string;
    color: string;
    services: ServiceData[];
}