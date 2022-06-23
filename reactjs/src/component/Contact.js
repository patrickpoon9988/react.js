import React, { Component } from 'react'
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';
import {Link} from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div>
                <h4 className='d-flex container justify-content-center'>Our staff</h4>
                <div className='d-inline-flex'>          
                <Breadcrumb>
                <BreadcrumbItem><Link to='/Main'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact us</BreadcrumbItem>
                </Breadcrumb>
                </div>

                <div className = 'container'>
                    
                <Form>
                    <FormGroup row>
                        <Label for ="account" sm={2}>Account</Label>
                        <Col sm={10}>
                        <Input type = 'text' id= 'account' name = 'account_name'  placeholder = 'chan123'/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for ="password">Password</Label>
                        <Input type = 'password' id= 'password' name = 'password_name' />
                    </FormGroup>
                    <FormGroup>
                        <Label for ="email">email</Label>
                        <Input type = 'text' id= 'email' name = 'email_name' />
                    </FormGroup>
                    <FormGroup>
                        <Label for ="email">email</Label>
                        <Input type = 'text' id= 'email' name = 'email_name' placeholder= 'please write N/A if nothing to say'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for ="comment">comment</Label>
                        <FormText>Feel Free to write everything</FormText>
                        <Input type = 'textarea' id= 'comment' name = 'comment_name' />
                    </FormGroup>
                    <FormGroup>
                        <FormText>HI</FormText>
                    </FormGroup>
                    <FormGroup>
                    <Button type = 'submit'>Submit</Button>
                    </FormGroup>
                </Form>
                </div>
                
            </div>
        )
    }
}

export default Contact
