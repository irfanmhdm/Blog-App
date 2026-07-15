import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-dark">
              Share Your Ideas With The World
            </h1>

            <p className="lead text-secondary mt-4">
              Create, publish and explore meaningful stories from developers,
              writers and creators around the globe.
            </p>

            <div className="mt-4">
              <Link
                to="/signup"
                className="btn btn-primary btn-lg px-4 me-3"
              >
                Get Started
              </Link>

              <Link
                to="/signin"
                className="btn btn-outline-dark btn-lg px-4"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900"
              alt="Blog"
              className="img-fluid rounded-4 shadow"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="container py-5">
        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body p-4">
                <h3 className="mb-3">✍️ Write</h3>
                <p className="text-secondary">
                  Publish articles and express your thoughts effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body p-4">
                <h3 className="mb-3">📖 Explore</h3>
                <p className="text-secondary">
                  Discover posts shared by other users from around the world.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body p-4">
                <h3 className="mb-3">🚀 Grow</h3>
                <p className="text-secondary">
                  Build your audience by sharing knowledge consistently.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="bg-light py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            A Simple Platform For Every Writer
          </h2>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "750px" }}
          >
            Whether you're documenting your learning journey, sharing technical
            tutorials, or writing about your experiences, BlogApp gives you a
            clean and distraction-free platform to publish your ideas.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <h4 className="mb-2">BlogApp</h4>

        <p className="mb-1 text-light">
          Built using React, Node.js, Express & MongoDB
        </p>

        <small className="text-secondary">
          © 2026 BlogApp. All Rights Reserved.
        </small>
      </footer>
    </div>
  );
};

export default Home;