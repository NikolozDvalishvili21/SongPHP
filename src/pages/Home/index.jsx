import React from "react";
import CollapsibleExample from "../../components/Navbar";
import IndividualIntervalsExample from "../../components/TopBar";
import AboutUs from "../../components/AboutUs";
import TopSongs from "../../components/Songs";
import FooterMine from "../../components/Footer";
import "../../components/Navbar/style.css";
import Singers from "../../components/Singers";
const HomePage = () => {
  return (
    <>
      <CollapsibleExample />
      <IndividualIntervalsExample />
      <div id="AboutUs">
        <AboutUs />
      </div>
      <TopSongs />
      <Singers />
      <FooterMine />
    </>
  );
};

export default HomePage;
