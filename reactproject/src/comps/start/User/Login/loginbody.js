import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './login.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
class NewAdvertiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: "",
                email: "",
                phone_number: ""
            },
            errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
            // Do you ajax calls here.
        }
    }

    render() {
        return (<React.Fragment>
            <form onSubmit={this.form.handleSubmit}>
                <p>
                    <label >
                        {<PersonIcon style={{ color: "blue" }} />}  Name
                <input style={{ width: 250 }}

                            id="exampleFormControlInput1"
                            type="text"
                            name="name"
                            onBlur={this.form.handleBlurEvent}
                            onChange={this.form.handleChangeEvent}
                            value={this.state.fields.name}
                            className={this.state.errors.name ? 'input-error form-control' : "form-control"}

                        />
                    </label>
                    <label className="error">
                        {this.state.errors.name ? this.state.errors.name : ""}
                    </label>
                </p>

                <p>
                    <label for="exampleFormControlInput1">
                        {< VisibilityIcon style={{ color: "blue" }} />} Email
                <input style={{ width: 250 }}
                            id="exampleFormControlInput1"
                            type="email"
                            name="email"
                            onBlur={this.form.handleBlurEvent}
                            onChange={this.form.handleChangeEvent}
                            value={this.state.fields.email}
                            className={this.state.errors.email ? 'input-error form-control' : "form-control"}
                        />
                    </label>
                    <label className="error">
                        {this.state.errors.email ? this.state.errors.email : ""}
                    </label>
                </p>

                <p>
                    <label>
                        {<  PhoneInTalkIcon style={{ color: "blue" }} />} Phone
                <input
                            id="exampleFormControlInput1"
                            style={{ width: 250 }}
                            type="tel"
                            name="phone_number"
                            onBlur={this.form.handleBlurEvent}
                            onChange={this.form.handleChangeEvent}
                            value={this.state.fields.phone_number}
                            className={this.state.errors.phone_number ? 'input-error form-control' : "form-control"}

                        />
                    </label>
                    <label className="error">
                        {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                    </label>
                </p>
                <p>
                    <Button type="submit" variant="contained" color="primary" style={{ width: 250 }} startIcon={<ThumbUpAltIcon />}>
                        Submit
                    </Button>

                </p>
            </form>
        </React.Fragment>)
    }
}



export default NewAdvertiser;