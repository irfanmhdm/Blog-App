import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAll = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await axios.post(
                "http://localhost:3001/viewall",
                {},
                {
                    headers: {
                        token: token
                    }
                }
            );

            console.log(response.data);

            if (response.data.status === "success") {
                setPosts(response.data.posts);
            } else {
                alert(response.data.status);
            }

        } catch (error) {
            console.log(error);
            alert("Unable to fetch posts");
        }
    };

    return (
        <div>


            <div className="container mt-5">

                <h2 className="text-center fw-bold mb-4">
                    All Posts
                </h2>

                <div className="row">

                    {posts.length > 0 ? (

                        posts.map((post) => (

                            <div className="col-md-6 col-lg-4 mb-4" key={post._id}>

                                <div className="card shadow border-0 h-100">

                                    <div className="card-body">

                                        <h5 className="card-title text-primary">
                                            Blog Post
                                        </h5>

                                        <p className="card-text">
                                            {post.message}
                                        </p>

                                    </div>

                                    <div className="card-footer bg-white border-0">

                                        <small className="text-muted">
                                            Posted on
                                        </small>

                                        <br />

                                        <small>
                                            {new Date(post.postedDate).toLocaleString()}
                                        </small>

                                    </div>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="text-center">

                            <h4>No Posts Available</h4>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default ViewAll;