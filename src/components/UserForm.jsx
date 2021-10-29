import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
    };

    const fNameMessage = () => {
        if (firstName.length < 2 && firstName.length != 0) {
            return "First name must be at least 2 characters";
        }
    }
    const lNameMessage = () => {
        if (lastName.length < 2 && lastName.length != 0) {
            return "Last name must be at least 2 characters";
        }
    }

    const emailMessage = () => {
        if (email.length < 5 && email.length != 0) {
            return "Email must be at least 5 characters";
        }
    }

    const passwordMessage = () => {
        if (password.length < 8 && password.length != 0) {
            return "Password must be at least 8 characters";
        }
    }

    const confirmPasswordMessage = () => {
        if (password !== confirmPassword && confirmPassword.length != 0) {
            return "Passwords do not match!";
        }
    };


    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                    <h3>{fNameMessage()}</h3>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setlastName(e.target.value)} />
                    <h3>{lNameMessage()}</h3>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setemail(e.target.value)} />
                    <h3>{emailMessage()}</h3>
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <h3>{passwordMessage()}</h3>

                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                    <h3>{confirmPasswordMessage()}</h3>
                </div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </form>
        </>
    );
};
export default UserForm;
