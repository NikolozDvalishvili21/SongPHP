import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardImage,
  CButton,
} from "@coreui/react";
import "../Singers/style.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Singers = () => {
  const [topSingers, setTopSingers] = useState([]);

  useEffect(() => {
    const fetchTopSingersHome = async () => {
      try {
        const response = await axios.get(
          "http://localhost/Project/top4_singers.php"
        );
        console.log("Response data:", response.data); // Log the response data to check its structure
        if (response.data.status === "success") {
          setTopSingers(response.data.singers);
        } else {
          console.error(
            "Error fetching top singers for home:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching top singers for home:", error);
      }
    };

    fetchTopSingersHome();
  }, []);

  return (
    <div className="singers-content">
      <h1
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          paddingBottom: "0px",
          paddingLeft: "33px",
        }}
        className="top-ones"
      >
        Top Singers
      </h1>
      <div className="singers-cont">
        {topSingers.map((singer, index) => (
          <CCard key={index} style={{ width: "18rem" }}>
            <CCardImage orientation="top" src={singer.Picture} />{" "}
            <CCardBody>
              <CCardTitle>
                {singer.FirstName} {singer.LastName}
              </CCardTitle>
              <Nav.Link as={Link} to="/singer">
                <CButton color="primary" href="#">
                  See Profile
                </CButton>
              </Nav.Link>
            </CCardBody>
          </CCard>
        ))}
      </div>
      <Nav.Link href="#TopSingers" as={Link} to="/topsingers">
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100px",
            height: "50px",
            borderRadius: "8px",
            marginLeft: "720px",
          }}
        >
          See More
        </button>
      </Nav.Link>
    </div>
  );
};

export default Singers;
