import React from "react";
import Form from "react-bootstrap/Form";
import "../SignIn/style.css";
import icon from "../../icons/icon.png";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const SignIn = () => {
  return (
    <>
      <Nav>
        <Nav.Link as={Link} to="/">
          <img src={icon} alt="" className="back-to-home" />
        </Nav.Link>
      </Nav>
      <div className="form_content">
        <h1 className="header">
          Sign Up To The Best
          <br />
          Music App
        </h1>
        <Form className="fields">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button type="submit" className="sign_in" style={{backgroundColor: "blue "}}>
            Sign Up
          </button>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
