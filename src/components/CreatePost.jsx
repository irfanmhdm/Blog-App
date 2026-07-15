import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {

    const [input, changeInput] = useState({
        userId: localStorage.getItem("userId"),
        message: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {

        const token = localStorage.getItem("token");

        axios.post(
            "http://localhost:3001/create",
            input,
            {
                headers: {
                    token: token
                }
            }
        )
        .then((response) => {

            console.log(response.data);
            alert(response.data.status);

            changeInput({
                userId: localStorage.getItem("userId"),
                message: ""
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

                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Create Post
                        </h2>

                        <div className="mb-3">
                            <label className="form-label">
                                Post a Message
                            </label>

                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="What's on your mind?"
                                name="message"
                                value={input.message}
                                onChange={inputHandler}
                            ></textarea>
                        </div>

                        <div className="d-grid">
                            <button
                                className="btn btn-primary"
                                onClick={readValue}
                            >
                                Post
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default CreatePost;