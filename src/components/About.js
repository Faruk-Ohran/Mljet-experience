import React, { useEffect } from "react";
import Slider from "./SimpleSlider";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({ duration: 20000, easing: "ease-in-sine" });
  }, []);
  return (
    <div
      className="about"
      style={{ height: "2000px", position: "relative", zIndex: "2" }}
    >
      <div
        className="w-70"
        data-aos="slide-right"
        data-aos-duration="1500"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      ></div>
      <div className="container">
        <div className="about-h2" style={{ padding: "50px 0 0 0" }}>
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            About Mljet
          </h2>
          <p
            style={{ padding: "50px 0 0 100px", margin: "0" }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="900"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            If you are an infrequent traveler you may need some tips to keep the
            wife
            <br /> happy while you are jet setting around the globe. Many
            individuals do not <br />
            realize the tolls that traveling can have on married life.
            Occasionally your <br />
            travels are going to take you to a location that your spouse would
            love to <br />
            attend. You may be servicing customers near your or your wifes
            childhood
            <br /> homes, you may be visiting a destination.
          </p>
        </div>
      </div>
      <div
        className="video-position"
        style={{ position: "relative" }}
        data-aos="fade-in"
        data-aos-easing="ease-in-quad"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="video-graphic"></div>
        <div
          className="video"
          style={{ margin: "0 8% 0 8%", padding: "50px 0 0 0" }}
          data-aos="fade-in"
          data-aos-easing="ease-in-quad"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <iframe
            width="100%"
            height="480"
            frameBorder="0"
            allowFullScreen
            title="Mljet promo"
            src="https://www.youtube.com/embed/EpxHKUoOkeY"
          ></iframe>
        </div>
      </div>
      <div className="container">
        <div className="beautis-of-mljet" style={{ padding: "50px 0 0 0" }}>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            Beauties of Mljet
          </h1>
          <p
            style={{ padding: "50px 0 0 100px", margin: "0" }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="900"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            If you are an infrequent traveler you may need some tips to keep the
            wife
            <br /> happy while you are jet setting around the globe. Many
            individuals do not <br />
            realize the tolls that traveling can have on married life.
            Occasionally your
            <br /> travels are going to take you to a location that your spouse
            would love to <br />
            attend. You may be servicing customers near your or your wifes
            childhood
            <br /> homes, you may be visiting a destination that she has always
            desired to be at, <br />
            she may simply want to spend some time with you.
          </p>
        </div>
        <div>
          <Slider />
        </div>
        <div className="quote container">
          <p
            data-aos="fade-in"
            data-aos-easing="ease-in-quad"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            “ Travel makes one modest. You see what a <br />
            tiny place you occupy in the world. ”
          </p>
          <p
            style={{ fontSize: "30px" }}
            data-aos="fade-in"
            data-aos-easing="ease-in-quad"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            Gustav Flaubert
          </p>
        </div>
        <div
          className="banner"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-quad"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        ></div>
      </div>
    </div>
  );
}

export default About;