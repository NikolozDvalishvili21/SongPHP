"use client";

import { Footer } from "flowbite-react";
import earbuds from "../../icons/earbuds.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
export function FooterMine() {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Footer container>
      <div className="w-full text-center p-16 bg-#1956A1">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Nav.Link href="#home" as={Link} to="/">
            <Footer.Brand
              href="#Home"
              src={earbuds}
              alt="Flowbite Logo"
              // name="Flowbite"
            />
          </Nav.Link>
          <Footer.LinkGroup>
            <Footer.Link
              href="#"
              onClick={() => handleScroll("AboutUs")}
              style={{ color: "black" }}
            >
              About
            </Footer.Link>
            <Footer.Link href="#" style={{ color: "black" }}>
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" style={{ color: "black" }}>
              Licensing
            </Footer.Link>
            <Footer.Link href="#" style={{ color: "black" }}>
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="GarGari" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterMine;
