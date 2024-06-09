import React, { useState, useEffect } from "react";

const UserForm = ({ user, onUpdate }) => {
    const [userData, setUserData] = useState({
        id: "",
        email: "",
        password: "",
        role: "",
    });

    useEffect(() => {
        if (user) {
            setUserData({
                userID: user.id,
                email: user.email,
                password: user.password,
                role: user.roles,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(userData); // Sending the correct keys
      };
      

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                style={{ height: "30px" }}
                name="userID"
                placeholder="User ID"
                value={userData.userID}
                onChange={handleChange}
                readOnly
            />
            <input
                type="text"
                style={{ height: "30px" }}
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                style={{ height: "30px" }}
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
            />
            <input
                type="number"
                style={{ height: "30px" }}
                name="role"
                placeholder="Role"
                value={userData.role}
                onChange={handleChange}
            />
            <button
                type="submit"
                style={{ backgroundColor: "black", color: "white", padding: "5px" }}
            >
                Edit
            </button>
        </form>
    );
};

export default UserForm;
