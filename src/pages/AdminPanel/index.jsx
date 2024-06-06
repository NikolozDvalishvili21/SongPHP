import React from "react";
import { useNavigate } from "react-router-dom";
import CollapsibleExample from "../../components/Navbar";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <CollapsibleExample onSignOut={handleSignOut} />
    </>
  );
};

export default AdminPanel;
