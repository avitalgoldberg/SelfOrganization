/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import NewAdvertiser from './signinbody'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Advertiser from '../../Advertiser/advertiser'
import Link from '@material-ui/core/Link';
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
import Login from '../Login/login';

const Signin = (props) => {
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
                                <strong> IN</strong>
                            </a>
                        </h3>
                    </h3>
                </MDBCardHeader>
                {/* </ModalHeader> */}
                <ModalBody style={{ height: 385, width: 310 }}>
                    <NewAdvertiser />
                </ModalBody>
                <ModalFooter style={{ height: 80, width: 310 }}>

                    <Link href='/home'>
                        <h6> {< EventBusyIcon />}D'ont sign-in ? click here !!!</h6>
                    </Link>



                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Signin;