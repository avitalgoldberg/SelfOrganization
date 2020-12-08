import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'


export default function Header() {




    return (
        <div class="container-fluid-xl">
            <div class="row">
                <div class="col">
                    <Navbar fluid bg="danger" variant="danger" style={{ height: 80 }}>
                        <Navbar.Brand href="#" fluid >
                            
                        </Navbar.Brand>
                    </Navbar>
                </div>
            </div>
        </div>

    );
}












