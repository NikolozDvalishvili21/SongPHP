import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../SignIn/style.css";
import icon from "../../icons/icon.png";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/Project/signup.php', {
        email,
        password
      });

      if (response.data.status === 'success') {
        setMessage("User registered successfully!");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

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
        <Form className="fields" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <button type="submit" className="sign_in" style={{backgroundColor: "blue "}}>
            Sign Up
          </button>
        </Form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default SignIn;
