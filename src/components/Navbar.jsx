import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate("/");

    };

    return (

        <nav
            className="navbar navbar-expand-lg shadow-lg"
            style={{
                background: "linear-gradient(90deg,#0f172a,#1e3a8a)"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand text-white fw-bold fs-3"
                    to="/"
                >
                     BlogApp
                </Link>

                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link text-white fw-semibold"
                                to="/"
                            >
                                 Home
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link text-white fw-semibold"
                                to="/create"
                            >
                                 Create Post
                            </Link>
                        </li>

                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/viewmypost"
                                >
                                    My Posts
                                </Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/viewall"
                                >
                                    All Posts
                                </Link>
                            </li>



                    </ul>

                    

                </div>

            </div>
        </nav>

    );
};

export default Navbar;