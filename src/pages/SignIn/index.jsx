import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import icon from "../../icons/icon.png";
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const signedInUser = localStorage.getItem("user");
    if (signedInUser) {
      setUser(JSON.parse(signedInUser));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost/Project/signin.php`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      if (response.data.status === "success") {
        const user = response.data.user;
        console.log("User data received:", user);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        // Check user role and navigate accordingly
        if (user.roles === '1') {
          console.log("Navigating to admin panel");
          navigate("/admin");
        } else {
          console.log("Navigating to home page");
          navigate("/");
        }
      } else {
        console.error(response.data.message);
        setMessage("User Does Not Exist!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Nav>
        <Nav.Link as={Link} to="/">
          <img src={icon} alt="home-icon" className="back-to-home" />
        </Nav.Link>
      </Nav>
      <div className="form_content">
        <h1 className="header">
          Sign In To The Best
          <br />
          Music App
        </h1>
        <Form className="fields" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </Form.Group>
          <button type="submit" className="sign_in" style={{backgroundColor: "blue"}}>
            Sign In
          </button>
        </Form>
        {message && <p style={{color: "red"}}>{message}</p>}
      </div>
    </>
  );
};

export default SignIn;
