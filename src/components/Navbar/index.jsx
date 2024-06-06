import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "flowbite-react";
import logo from "../../icons/earbuds.png";
import "../Navbar/style.css";

const CollapsibleExample = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const signedInUser = localStorage.getItem("user");
    if (signedInUser) {
      setUser(JSON.parse(signedInUser));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="padded" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Navbar fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black flex-row">
            Songify
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{ paddingBottom: "20px" }}>
          <Navbar.Link as={Link} to="/">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="#">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} to="/topsingers">
            Top Singers
          </Navbar.Link>
          <Navbar.Link as={Link} to="/topsongs">
            Top Songs
          </Navbar.Link>
          {user ? (
            <>
              <Navbar.Link href="#" disabled>
                {user.email}
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleSignOut}>
                Sign Out
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link as={Link} to="/signin">
                Sign In
              </Navbar.Link>
              <Navbar.Link as={Link} to="/signup">
                Sign Up
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CollapsibleExample;
