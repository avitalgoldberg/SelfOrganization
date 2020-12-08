export default interface CategoryFilter {
    idFilter: number;
    nameFilter: string;
    kindFilter: string;
    values: string;
    selectedValue: any;
    filterChange?: Function;
}