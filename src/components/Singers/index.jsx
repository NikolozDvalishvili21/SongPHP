import React from "react";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardImage,
  CButton,
} from "@coreui/react";
import ReactImg from "../../Images/lamar.jpg";
import drake from "../../Images/drake.jpg";
import ye from "../../Images/ye.jpg";
import mosdef from "../../Images/mosdef.png";
import "../Singers/style.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Singers = () => {
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
        <CCard style={{ width: "18rem" }}>
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>Kendrick Lamar</CCardTitle>
            <CButton color="primary" href="#">
              See Profile
            </CButton>
          </CCardBody>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <CCardImage orientation="top" src={drake} />
          <CCardBody>
            <CCardTitle>Drake</CCardTitle>
            <Nav.Link href="#Singer" as={Link} to="/singer">
              <CButton color="primary" href="#">
                See Profile
              </CButton>
            </Nav.Link>
          </CCardBody>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <CCardImage orientation="top" src={ye} />
          <CCardBody>
            <CCardTitle>Kanye West</CCardTitle>

            <CButton color="primary" href="#">
              See Profile
            </CButton>
          </CCardBody>
        </CCard>
        <CCard style={{ width: "18rem" }}>
          <CCardImage orientation="top" src={mosdef} />
          <CCardBody>
            <CCardTitle>Mos Def</CCardTitle>
            <CButton color="primary" href="#">
              See Profile
            </CButton>
          </CCardBody>
        </CCard>
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
