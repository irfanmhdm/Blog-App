import axios from "axios";
import React, { useState } from "react";

const Signup = () => {

    const [input, changeInput] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        cnfPass: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {

        if (input.password == input.cnfPass) {

            console.log(input)

        } else {
            alert("Password and Confirm Password do not match");
          return;
        }
    

        axios.post("http://localhost:3001/signup", input)
            .then((response) => {

                console.log(response.data);
                alert(response.data.status);

                changeInput({
                    name: "",
                    phone: "",
                    email: "",
                    password: ""
                });

            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });

    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">User Signup</h3>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={input.name}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={input.phone}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={input.email}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={input.password}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="cnfPass"
                                value={input.cnfPass}
                                onChange={inputHandler}
                            />
                        </div>



                        <div className="text-center">
                            <button
                                className="btn btn-success px-5"
                                onClick={readValue}
                            >
                                Sign Up
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;