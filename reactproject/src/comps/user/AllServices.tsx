import React, { useState } from 'react'
import ShortServicesData from '../../interfaces/ShortServicesData'
import Services from './Services'
import './AllServices.css'
import CategoryFilter from '../../interfaces/CategoryFilter'
import Button from '@material-ui/core/Button';
import Num from './Num'
import Bool from './Bool'
import Str from './Str'

export default function AllServices(props: any) {
    const { id } = props.match.params
    console.log("id", id)
    //שליפת כל הספקים לפי קוד קטגוריה
    const arr: ShortServicesData[] = [
        {
            id: 1,
            name: "וגשל",
            img: "data:image/jpeg;base64,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",
            shortDescription: "אולם וגשל הוא בבני ברק שהוא בלה בלה בלה",
            prop: [{ idProp: 1, value: "300 700" }, { idProp: 2, value: "true" }, { idProp: 3, value: "מפואר" }]
        },
        {
            id: 2,
            name: "קונקורד",
            img: "https://www.atura-house.co.il/warehouse/dynamic/9739.jpg",
            shortDescription: "אולם  שהוא בלה בלה בלה",
            prop: [{ idProp: 1, value: "200 500" }, { idProp: 2, value: "true" }, { idProp: 3, value: "בוטיק" }]
        },
        {
            id: 3,
            name: "ארמונות חן",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu7m5Y9XBGAwOLiQegSMQC1n9vcHMeZAGxAA&usqp=CAU",
            shortDescription: "הארמון של בני ברק",
            prop: [{ idProp: 1, value: "200 700" }, { idProp: 2, value: "false" }, { idProp: 3, value: "סטנדרט" }]
        }
    ]
    const [arr1, setArr1] = useState<ShortServicesData[]>(arr)
    //שליפת כל המסננים לפי קוד קטגוריה
    const filters: CategoryFilter[] = [
        {
            idFilter: 1,
            nameFilter: "מספר ממות ישיבה",
            kindFilter: "num",
            values: "20 1000",
            selectedValue: "null"
        },
        {
            idFilter: 2,
            nameFilter: "גישה לנכים",
            kindFilter: "bool",
            values: "",
            selectedValue: "null"
        },
        {
            idFilter: 3,
            nameFilter: "סגנון אולם",
            kindFilter: "str",
            values: "סטנדרט בוטיק מפואר ",
            selectedValue: "null"
        }
    ];
    const filterChange = (idx: number, value: any) => {
        filters[idx].selectedValue = value;
    }
    const refreshServices = () => {
        let arr2 = [...arr];
        filters.forEach((item) => {
            arr2 = arr2.filter(i => {
                if (item.selectedValue === "null")
                    return i;
                else {
                    let service = i.prop.find((ff) => ff.idProp === item.idFilter)
                    if (item.kindFilter === "num") {
                        let sminMax = service?.value.split(" ");
                        if (sminMax && (sminMax[0] > item.selectedValue[0]) && (sminMax[0] < item.selectedValue[1]) || sminMax && (sminMax[1] < item.selectedValue[1]) && (sminMax[1] > item.selectedValue[0]))
                            return i;
                    }
                    else {
                        if (service?.value == item.selectedValue)
                            return i;
                    }
                }
            })
        })
        setArr1(arr2);
    }



    return (
        <div className="parent2">
            <div className="div1" style={{ width: '85%' }}>
                {
                    filters.map((item, idx) => {
                        if (item.kindFilter === "num")
                            return <div><Num idFilter={item.idFilter} nameFilter={item.nameFilter} kindFilter={item.kindFilter} values={item.values} selectedValue={item.selectedValue} filterChange={(value: any) => filterChange(idx, value)} /><br></br><br></br></div>
                        else if (item.kindFilter === "bool")
                            return <div><Bool idFilter={item.idFilter} nameFilter={item.nameFilter} kindFilter={item.kindFilter} values={item.values} selectedValue={item.selectedValue} filterChange={(value: any) => filterChange(idx, value)} /><br></br><br></br></div>
                        else if (item.kindFilter === "str")
                            return <div><Str idFilter={item.idFilter} nameFilter={item.nameFilter} kindFilter={item.kindFilter} values={item.values} selectedValue={item.selectedValue} filterChange={(value: any) => filterChange(idx, value)} /><br></br><br></br></div>
                    })
                }
                <Button variant="contained" color="primary"
                    onClick={refreshServices}>
                    סנן
                </Button>
                {/* <button onClick={() => console.log('aa', filters)}>adsfasd</button> */}
            </div>
            <div className="div2">
                {
                    arr1.map((item, idx) => {

                        return <Services key={idx} img={item.img} name={item.name} id={item.id} shortDescription={item.shortDescription} prop={item.prop} />
                    })
                }</div>
        </div >
    )
}

