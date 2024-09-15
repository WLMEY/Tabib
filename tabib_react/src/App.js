import React from "react";
import './style.css';
import './all.css';

const App = () => {
  return (
    <div>
      {/* Start codeing in 2024/9/11 03:00 AM */}
      {/* Day 1 */}
      <header className="nav_bar">
        <div className="title">
          <h1><span>T</span>abilb</h1>
        </div>
        <div className="titles">
          <span><a href="#Home">Home</a></span>
          <span><a href="#Services">Services</a></span>
          <span><a href="#Works">How it works</a></span>
          <span><a href="#Testimonials">Testimonials</a></span>
          <span><a href="#FAQ_s">FAQ's</a></span>
          <span className="Download"><a href="#Download_P">Download</a></span>
          <div className="circle">
            <div className="circle2"></div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="content">
        {/* Home */}
        <section id="Home" className="Home">
          <div className="left">
            <h1>
              Transforming <br />
              <span>Healthcare</span> at Your <br />
              Fingertips
            </h1>
            <p>
              We are here for your care. Your Health is our first priority. Access <br />
              Clinics, Doctors and get your Medicines easily anytime, anywhere <br />
              with Tabib app. <br />
            </p>
            <div className="btn_home">
              <button className="Download">Download Now</button>
              <button className="btn_inverse">Learn more</button>
            </div>
            <div className="end_home">
              <div className="container">
                <div className="circle_home"><i className="fa-regular fa-hospital"></i></div>
                <div className="right_container">
                  <h4>400+</h4>
                  <span>Clinics</span>
                </div>
              </div>
              <div className="container">
                <div className="circle_home"><i className="fa-solid fa-user-doctor"></i></div>
                <div className="right_container">
                  <h4>1K+</h4>
                  <span>Doctors</span>
                </div>
              </div>
              <div className="container">
                <div className="circle_home"><i className="fa-solid fa-users"></i></div>
                <div className="right_container">
                  <h4>50K+</h4>
                  <span>Users</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="./5ba1a398ac0aa7fe01480166fd2b818f.png" alt="app preview" />
          </div>
        </section>

        {/* Services */}
        <section className="Services" id="Services">
          <h3>Services</h3>
          <h1>Why Choose Tabib</h1>
          <div className="containers_s">
            <div className="container_style">
              <div className="circle_home"><i className="fa-solid fa-house-circle-check"></i></div>
              <h5>Book an Appointment</h5>
              <span>
                Choose your suitable doctor and book <br />
                appointments with just a few taps
              </span>
            </div>
            <div className="container_style">
              <div className="circle_home"><i className="fa-solid fa-user-tie"></i></div>
              <h5>Teleconsultation</h5>
              <span>
                Consult with doctors from the comfort <br />
                of your home
              </span>
            </div>
            <div className="container_style">
              <div className="circle_home"><i className="fa-solid fa-staff-snake"></i></div>
              <h5>Purchase Medicines</h5>
              <span>
                Buy all your medical products easily <br />
                from your nearest pharmacy
              </span>
            </div>
            <div className="container_style">
              <div className="circle_home"><i className="fa-solid fa-shield"></i></div>
              <h5>Health insurance</h5>
              <span>
                Use your health insurance to purchase <br />
                Medical products and book <br />
                appointments
              </span>
            </div>
          </div>
        </section>

        {/* Other sections like Works, Testimonials, Download, FAQ, and Footer can be similarly converted */}
      </div>
    </div>
  );
};

export default App;
