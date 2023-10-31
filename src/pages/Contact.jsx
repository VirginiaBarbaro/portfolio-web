import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="text-center m-auto header-contact">
        <h6 className="text-muted">Get in touch</h6>
        <h2>Contact me</h2>
      </div>
      <div className="contact-container" id="contact">
        <section className="p-5">
          <div className="container">
            <div className="row row-query-contact">
              {/* Email  */}
              <div className="mt-4 mb-4 text-center d-flex justify-content-center col-4 col-contact">
                <Link
                  to={"mailto:virginiabarbaro@icloud.com?subject=&body="}
                  target="_blank"
                >
                  <button className="btn-see-live">
                    <span>
                      {" "}
                      <i className="bi bi-envelope-at me-2 fs-5 icon"></i>{" "}
                      virginiabarbaro@icloud.com
                    </span>
                  </button>
                </Link>
              </div>
              {/* Linkedin  */}
              <div className="mt-4 mb-4 text-center d-flex justify-content-center col-4 col-contact">
                <Link
                  to={"https://www.linkedin.com/in/virginia-barbaro/"}
                  target="_blank"
                >
                  <button className="btn-see-live">
                    <span>
                      {" "}
                      <i className="bi bi-linkedin me-2 fs-5 icon"></i> Virginia
                      Barbaro
                    </span>
                  </button>
                </Link>
              </div>
              {/* Phone */}
              <div className="mt-4 mb-4 text-center d-flex justify-content-center col-4 col-contact">
                <button className="btn-see-live">
                  <span>
                    {" "}
                    <i className="bi bi-telephone-outbound me-2 fs-5 icon"></i>{" "}
                    (+39) 351 8871157
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
