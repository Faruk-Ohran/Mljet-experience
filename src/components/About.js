import React, { useEffect } from "react";
import Slider from "./SimpleSlider";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({ duration: 20000, easing: "ease-in-sine" });
  }, []);
  return (
    <div className="about">
      <div
        className="w-70"
        data-aos="slide-right"
        data-aos-duration="1500"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      ></div>

      <div className="about-h2">
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          About Mljet
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="700"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          If you are an infrequent traveler you may need some tips to keep the
          wife happy while you are jet setting around the globe. Many
          individuals do not realize the tolls that traveling can have on
          married life. Occasionally your travels are going to take you to a
          location that your spouse would love to attend. You may be servicing
          customers near your or your wifes childhood homes, you may be visiting
          a destination.
        </p>
      </div>
      <div
        className="video-position"
        style={{ position: "relative" }}
        data-aos="fade-in"
        data-aos-easing="ease-in-quad"
        data-aos-duration="1000"
        data-aos-delay="800"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="video-graphic"></div>
        <div
          className="video"
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
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Mljet promo"
            src="https://www.youtube.com/embed/EpxHKUoOkeY"
          ></iframe>
        </div>
      </div>
      <div className="about-h2">
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          Beauties of Mljet
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          If you are an infrequent traveler you may need some tips to keep the
          wife happy while you are jet setting around the globe. Many
          individuals do not realize the tolls that traveling can have on
          married life. Occasionally your travels are going to take you to a
          location that your spouse would love to attend. You may be servicing
          customers near your or your wifes childhood homes, you may be visiting
          a destination that she has always desired to be at, she may simply
          want to spend some time with you.
        </p>
      </div>
      <Slider />
      <div className="quote">
        <h1
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          “ Travel makes one modest. You see what a <br />
          tiny place you occupy in the world. ”
        </h1>
        <p
          data-aos="fade-in"
          data-aos-easing="ease-in-quad"
          data-aos-duration="1000"
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
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      ></div>
    </div>
  );
}

export default About;
