import React, { forwardRef } from "react";

function About() {
  return (
    <>
      <div id="about">
        <div className="text-center m-auto">
          <h6 className="text-muted">Get to know more</h6>
          <h2>About me</h2>
        </div>
        <div className="col-9 m-auto mt-4 p-3 description">
          <p className="text-center p-3 m-auto">
            I am a <strong>Full Stack</strong> developer with a passion for
            creating impactful applications for users. I have knowledge in both
            <strong> front-end</strong> and <strong>back-end</strong>{" "}
            development, and I am <strong>exicited</strong> to apply my skills
            in professional environments. I am a <strong>quick learner</strong>{" "}
            and a <strong>collaborative</strong> team player, capable of{" "}
            <strong>quickly adapting</strong> and{" "}
            <strong>contributing effectively</strong>.
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-center">About my</h6>
          <h2 className="text-center">Soft skills</h2>
          <section className="section-skills">
            <div className="row mt-5 about-container">
              <div className="row m-auto">
                <div className="d-flex row m-auto">
                  <div className="col-4 col-sm-6 col-md-4 box-icon-skills d-flex flex-column">
                    <div className="box-img">
                      <img src="/teamwork1.png" className="img-about" />
                    </div>
                    <p className="text-center fw-bold">
                      <i className="bi bi-people me-2"></i>
                      Teamwork
                    </p>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4 box-icon-skills d-flex flex-column">
                    <div className="box-img-other">
                      <img
                        src="/data_analysis1.png"
                        className="img-about-other"
                      />
                    </div>
                    <p className="text-center mt-1 fw-bold">
                      <i className="bi bi-database me-2"></i>
                      Data analysis
                    </p>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4 box-icon-skills">
                    <div className="box-img-other">
                      <img
                        src="/problem_solving1.png"
                        className="img-about-other"
                      />
                    </div>
                    <p className="text-center fw-bold">
                      <i className="bi bi-lightbulb me-2"></i>
                      Problem solving
                    </p>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4 box-icon-skills">
                    <div className="box-img-other">
                      <img src="/details1.png" className="img-about" />
                    </div>
                    <p className="text-center mt-4 fw-bold">
                      <i className="bi bi-eye me-2"></i>
                      Attention to details
                    </p>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4 box-icon-skills">
                    <div className="box-img-other">
                      <img src="/goals1.png" className="img-about-other" />
                    </div>
                    <p className="text-center mt-5 fw-bold">
                      <i className="bi bi-speedometer2 me-2"></i>
                      Goal orientated
                    </p>
                  </div>
                  <div className="col-4 col-sm-6 col-md-4 box-icon-skills">
                    <div className="box-img-adapt">
                      <img
                        src="/adaptability1.png"
                        className="img-about-other"
                      />
                    </div>
                    <p className="text-center mt-2 fw-bold">
                      <i className="bi bi-person-plus me-2"></i>
                      Adaptability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="custom-shape-divider-top-1684855587">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default About;
