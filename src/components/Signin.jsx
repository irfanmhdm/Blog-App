import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

    const navigate = useNavigate();
    const [input, changeInput] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {

        axios.post("http://localhost:3001/signin", input)
            .then((response) => {

                console.log(response.data);

                if (response.data.status === "success") {

                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.id);

                    alert("Login Successful");

                     navigate("/create")

                    changeInput({
                        email: "",
                        password: ""
                    });

                    // Navigate to home page if required
                    // window.location.href = "/home";

                } else {
                    
                    let token = response.data.token;
                    let userId = response.data.userId;

                    console.log("Token:", token)
                    console.log("User ID:", userId)

                    sessionStorage.setItem("token", token);
                    sessionStorage.setItem("userId", userId);

                    alert(response.data.status);

                   
                }

            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });

    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Sign In
                        </h2>

                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={input.email}
                                onChange={inputHandler}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={input.password}
                                onChange={inputHandler}
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="d-grid">
                            <button
                                className="btn btn-primary"
                                onClick={readValue}
                            >
                                Sign In
                            </button>
                        </div>

                        <hr />

                        <div className="text-center">
                            <span>New User? </span>

                            <Link
                                to="/signup"
                                className="text-decoration-none fw-bold"
                            >
                                Sign Up
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Signin;