import React from "react";
import moment from "moment";
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp';
// import { range } from "moment-range";
import './CallendarService.css'
export default class CallendarService extends React.Component {
    constructor(props) {
        super(props);
        console.log("callendarFilter", props.callendarFilter)
    }
    allBusyDates = [new Date()]
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.callendarFilter !== this.props.callendarFilter)
            console.log("callendarFilter", this.props.callendarFilter)

    }
    componentDidMount() {
        //קריאה לשרת לקבל את התאריכים התפוסים
        // this.allBusyDates=
        this.busyDateByMonth()
    }
    busyDateByMonth() {

        console.log("this month", this.month());
        let arr = [...this.state.busyDate]
        this.allBusyDates.forEach(a => {
            let m = moment(a);
            if (m.format("MMMM") === this.month())
                arr[m.date()] = true;
            else arr[m.date()] = false

        })
        this.setState({
            busyDate: arr
        })
        // =תאריכים תפוסים בחודש הנוכחי

    }
    weekdayshort = moment.weekdaysShort();

    state = {
        showYearTable: false,
        showMonthTable: false,
        showDateTable: true,
        dateObject: moment(),
        allmonths: moment.months(),
        selectedDay: null,
        busyDate: [] = new Array(32).fill(false)
    };
    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };
    year = () => {
        return this.state.dateObject.format("Y");
    };
    currentDay = () => {
        return this.state.dateObject.format("D");
    };
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject).startOf("month").format("d"); // Day of week 0...1..5...6
        return firstDay;
    };
    month = () => {
        return this.state.dateObject.format("MMMM");
    };
    showMonth = (e, month) => {
        this.setState({
            showMonthTable: !this.state.showMonthTable,
            showDateTable: !this.state.showDateTable
        });
    };
    setMonth = (month) => {
        console.log("month", month)
        let monthNo = this.state.allmonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("month", monthNo);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showDateTable: !this.state.showDateTable
        });
    };
    MonthList = (props) => {
        let months = [];
        props.data.map((data) => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={(e) => {
                        this.setMonth(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i === 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let monthlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                    <tr className="thead">
                        <th colSpan="4">Select a Month</th>
                    </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    };
    showYearTable = (e) => {
        this.setState({
            showYearTable: !this.state.showYearTable,
            showDateTable: !this.state.showDateTable
        });
    };

    onPrev = () => {
        let curr = "";
        if (this.state.showYearTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.subtract(1, curr)
        }, () => this.busyDateByMonth());
    };
    onNext = () => {
        let curr = "";
        if (this.state.showYearTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.add(1, curr)
        }, () => this.busyDateByMonth());
    };
    setYear = (year) => {
        // alert(year)
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showYearTable: !this.state.showYearTable
        });
    };
    onYearChange = (e) => {
        this.setYear(e.target.value);
    };
    getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate1 = moment(stopDate);
        while (currentDate <= stopDate1) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }
    YearTable = (props) => {
        let months = [];
        let nextten = moment().set("year", props).add("year", 12).format("Y");

        let tenyear = this.getDates(props, nextten);

        tenyear.map((data) => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={(e) => {
                        this.setYear(data);
                    }}
                >
                    <div>
                        <span>{data}</span>
                        {/* <span className="point">sfdsaf</span> */}
                    </div>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i === 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let yearlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                    <tr className="thead">
                        <th colSpan="4">Select a Yeah</th>
                    </tr>
                </thead>
                <tbody>{yearlist}</tbody>
            </table>
        );
    };
    onDayClick = (e, d) => {
        let bd = [...this.state.busyDate]
        if (!bd[d]) {
            bd[d] = true;
            this.allBusyDates.push(new Date(this.state.dateObject.year(), this.state.dateObject.month(), d))
        }
        else {

            bd[d] = false;
            this.allBusyDates = this.allBusyDates.filter(a => {
                let m = moment(a);
                return !(m.year() == this.year() && m.format("MMMM") === this.month() && m.date() === d)
            })
        }

        console.log(this.allBusyDates)
        this.setState(
            {
                selectedDay: d,
                busyDate: bd
            },
            () => {
                console.log("SELECTED DAY: ", this.state.selectedDay);

            }
        );
    };
    render() {
        let weekdayshortname = this.weekdayshort.map((day) => {
            return <th key={day}>{day}</th>;
        });
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let datemonth = moment();
            let currentDay = (d == this.currentDay() && this.month() == datemonth.format("MMMM") && this.year() == datemonth.format("Y")) ? "today" : "";
            let isBusyDate = this.state.busyDate[d];
            daysInMonth.push(
                <td key={d} className={`calendar-day ${currentDay}`} onClick={(e) => { this.onDayClick(e, d); }}>
                    <span>
                        {d}
                    </span>
                    {
                        isBusyDate && <VerifiedUserSharpIcon />
                    }
                </td>
            );
        }
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                // let insertRow = cells.slice();
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <div className="tail-datetime-calendar">
                <div className="calendar-navi">
                    <span
                        onClick={(e) => {
                            this.onPrev();
                        }}
                        class="calendar-button button-prev"
                    />
                    {!this.state.showMonthTable && (
                        <span
                            onClick={(e) => {
                                this.showMonth();
                            }}
                            class="calendar-label"
                        >
                            {this.month()}
                        </span>
                    )}
                    <span
                        className="calendar-label"
                        onClick={(e) => this.showYearTable()}
                    >
                        {this.year()}
                    </span>
                    <span
                        onClick={(e) => {
                            this.onNext();
                        }}
                        className="calendar-button button-next"
                    />
                </div>

                <div className="calendar-date">
                    {this.state.showYearTable && <this.YearTable props={this.year()} />}
                    {this.state.showMonthTable && (
                        <this.MonthList data={moment.months()} />
                    )}
                </div>

                {this.state.showDateTable && (
                    <div className="calendar-date">
                        <table className="calendar-day">
                            <thead>
                                <tr className="thead">{weekdayshortname}</tr>
                            </thead>
                            <tbody>{daysinmonth}</tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}
