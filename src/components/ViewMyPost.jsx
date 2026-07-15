import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewMyPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchMyPosts();
    }, []);

    const fetchMyPosts = () => {

        const token = localStorage.getItem("token");

        axios.post(
            "http://localhost:3001/viewmypost",
            {},
            {
                headers: {
                    token: token
                }
            }
        )
        .then((response) => {

            console.log(response.data);

            if (response.data.status === "success") {
                setPosts(response.data.posts);
            } else {
                alert(response.data.status);
            }

        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong");
        });
    };

    return (
        <div>

            <div className="container mt-5">

                <h2 className="text-center mb-4">
                    My Posts
                </h2>

                <div className="row">

                    {posts.length > 0 ? (

                        posts.map((post) => (

                            <div className="col-md-6 mb-4" key={post._id}>

                                <div className="card shadow">

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            My Post
                                        </h5>

                                        <p className="card-text">
                                            {post.message}
                                        </p>

                                    </div>

                                    <div className="card-footer">

                                        <small>
                                            {new Date(post.postedDate).toLocaleString()}
                                        </small>

                                    </div>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="text-center">
                            <h4>No Posts Found</h4>
                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default ViewMyPost;