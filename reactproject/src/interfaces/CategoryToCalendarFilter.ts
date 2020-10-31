import ServiceData from './ServiceData'

export default interface CategoryToCalendarFilter {
    id: number;
    name: string;
    color: number;
    services: ServiceData[];
}