import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div id="projects" className="project-section">
        <section>
          <h6 className="text-muted text-center">Browse My Recent</h6>
          <h2 className="text-center">Projects</h2>
          {/* Ecozy  */}
          <div className="container project-container">
            <div className="row">
              <div className="col-6 left-col-img">
                <img src="/ecozy_2.png" className="rounded" />
              </div>
              <div className="col-6 right-col">
                <h5 className="fw-bold text-center pb-3">
                  Ecozy Luxury | E-Commerce
                </h5>
                <div className="p-2">
                  <p>
                    Ecozy Luxory is an online store that allows buyers to
                    registers, log in, browse through multiple categories of
                    forniture, pick out products, and them to cart and complete
                    the purchase. Additionally, it features an administrative
                    panel that allows administrators to perform operations on
                    inventory and users.
                  </p>
                  <p>
                    <strong>Tech used:</strong> ORM, MERN Stack, React, Redux,
                    Bootstrap, Material UI
                  </p>
                </div>
                <div className="mt-4 text-center d-flex justify-content-center">
                  <Link to="https://ecozy-luxury.vercel.app/" target="_blank">
                    <button className="btn-see-live">
                      <span>See Live</span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/VirginiaBarbaro"
                    target="_blank"
                    className="git-link"
                  >
                    <i className="bi bi-github ms-4 fs-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Twitter  */}
          <div className="container twitter-project">
            <div className="row">
              <div className="col-6 right-col">
                <h5 className="fw-bold text-center pb-3">
                  Twitter Clone | Social Media
                </h5>
                <div className="p-2">
                  <p>
                    This platform allows users to create an account, make posts,
                    delete posts, give likes, and follow other users.
                  </p>
                  <p>
                    <strong>Tech used:</strong> ODM, MERN Stack, React, Redux,
                    Bootstrap,
                  </p>
                  <p>
                    <strong className="my-2">Demo account:</strong>
                  </p>
                  <span className="d-block">
                    <strong>E-mail:</strong> user@twitter.com
                  </span>
                  <span>
                    <strong>Password:</strong> 1234
                  </span>
                </div>
                <div className="mt-4 mb-4 text-center d-flex justify-content-center">
                  <Link
                    to="https://twitter-front-ecru.vercel.app/"
                    target="_blank"
                  >
                    <button className="btn-see-live">
                      <span>See Live</span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/VirginiaBarbaro"
                    target="_blank"
                    className="git-link"
                  >
                    <i className="bi bi-github ms-4 fs-3"></i>
                  </Link>
                </div>
              </div>
              <div className="col-6 left-col-img">
                <img src="/twitter.png" className="rounded" />
              </div>
            </div>
          </div>
          {/* TODO List */}
          <div className="container todo-project">
            <div className="row">
              <div className="col-6 left-col-img">
                <img src="/to-do-list.png" className="rounded" />
              </div>
              <div className="col-6 right-col">
                <h5 className="fw-bold text-center pb-3">
                  TO-DO List | Social Media
                </h5>
                <div className="p-2">
                  <p>
                    TO-DO is a web application that enables users to create
                    lists, add items, mark them as completed, or delete them.
                  </p>
                  <p>
                    <strong>Tech used:</strong> React, Redux, Bootstrap, Chakra
                    UI
                  </p>
                </div>
                <div className="mt-5 text-center d-flex justify-content-center">
                  <Link
                    to="https://todo-list-sage-two.vercel.app"
                    target="_blank"
                  >
                    <button className="btn-see-live">
                      <span>See Live</span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/VirginiaBarbaro"
                    target="_blank"
                    className="git-link"
                  >
                    <i className="bi bi-github ms-4 fs-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Hackflix */}
          <div className="container twitter-project">
            <div className="row">
              <div className="col-6 right-col">
                <h5 className="fw-bold text-center pb-3">
                  Hackflix | Streaming platform
                </h5>
                <div className="p-2">
                  <p>
                    Hackflix is a movie streaming platform that uses The Movie
                    Database API to select its content. The infinite scroll
                    feature has been implemented, allowing users to filter
                    movies by rating or search by title.
                  </p>
                  <p>
                    <strong>Tech used:</strong> Ext. API, React, Redux,
                    Bootstrap
                  </p>
                </div>
                <div className="mt-4 mb-4 text-center d-flex justify-content-center">
                  <Link to="https://hackflix-two.vercel.app/" target="_blank">
                    <button className="btn-see-live">
                      <span>See Live</span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/VirginiaBarbaro"
                    target="_blank"
                    className="git-link"
                  >
                    <i className="bi bi-github ms-4 fs-3"></i>
                  </Link>
                </div>
              </div>
              <div className="col-6 left-col-img">
                <img src="/hackflix.png" className="rounded" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
