/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewAdvertiser from './loginbody'
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";

const Login = (props) => {
    const {
        buttonLabel,
        className

    } = props;

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal style={{ width: 310 }} isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                toggle={toggle} className={className}>
                {/* <ModalHeader  className=" alert-primary" toggle={toggle} style={{ height: 90, width: 310 }}> */}
                <MDBCardHeader className="form-header deep-blue-gradient rounded"
                    toggle={toggle}
                    style={{ height: 90, width: 310 }} >
                    <h3 className="my-3 text-center">
                        <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                            <strong>{<  EventAvailableIcon style={{ fontSize: 40 }} />}  SIGN</strong>
                            <a href='#!' className='blue-text font-weight-bold'>
                                <strong> UP</strong>
                            </a>
                        </h3>
                    </h3>
                </MDBCardHeader>
                {/* </ModalHeader> */}
                <ModalBody style={{ height: 385, width: 310 }}>
                    <NewAdvertiser />
                </ModalBody>
                <ModalFooter style={{ height: 80, width: 310 }}>


                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Login;