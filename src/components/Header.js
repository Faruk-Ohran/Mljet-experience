import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Aos from "aos";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 20000, easing: "ease-in-sine" });
  }, []);
  return (
    <div className="header">
      <div className="overlay"></div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="title col-md-12"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <h1>
              Get Ready Fast For Fall
              <br /> Leaf Viewing Trips
            </h1>
          </div>
          <div
            className="sub-text col-md-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <p>
              Buying the right telescope to take your love of astronomy to the
              next level <br />
              is a big next step in the development of your passion for the
              stars.
              <br />
              In many ways, it is ...
            </p>
          </div>
        </div>
        <div
          className="row eat-stay-amusement"
          style={{ fontWeight: "bold", paddingTop: "50px" }}
        >
          <div
            className="rectangle col-md-4"
            style={{ padding: "0 7.5px 0 0" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              className="rectangle-image"
              style={{
                backgroundImage:
                  "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/1dfcc59974384676bcf1f93369008523?quality=95&fake=.png)",
              }}
            ></div>
            <div>
              <h5>Where to eat</h5>
            </div>
          </div>
          <div
            className="rectangle col-md-4"
            style={{ padding: "0 7.5px 0 7.5px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              className="rectangle-image"
              style={{
                backgroundImage:
                  "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/e3eab220a5104e179d8de435a97e481c?quality=95&fake=.png)",
              }}
            ></div>
            <div>
              <h5>Where to stay</h5>
            </div>
          </div>
          <div
            className="rectangle col-md-4"
            style={{ padding: "0 0 0 7.5px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1800"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              className="rectangle-image"
              style={{
                backgroundImage:
                  "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/45b341a74e754273a974cbbd58fac04a?quality=95&fake=.png)",
              }}
            ></div>
            <div>
              <h5>Amusement</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="bg-lines"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div
                  className="background col-md-8"
                  style={{
                    backgroundImage:
                      "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/eaedc6cfdf7c4c37836cedc5db77a85b?quality=95&fake=.png)",
                  }}
                ></div>
                <div className="info col-md-4" style={{ height: "400px" }}>
                  <p>18. 03. 2019 | WHERE TO EAT</p>
                  <h3>
                    Get Ready Fast For <br />
                    Fall Leaf restaurant
                    <br /> Trips
                  </h3>
                  <p>
                    Buying the right telescope to take your love of astronomy to
                    the next level is a big next step in the development of your
                    passion for the stars. In many ways, it is ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: "15px" }}>
            <div className="col-md-6">
              <div
                className="row"
                style={{ paddingRight: "7.5px", height: "240px" }}
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div
                  className="background col-md-6"
                  style={{
                    backgroundImage:
                      "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/de8ce8b5b186458ea57b22c72d94969e?quality=95&fake=.png)",
                  }}
                ></div>
                <div className="info col-md-6">
                  <p>18. 03. 2019 | WHERE TO EAT</p>
                  <h5>
                    Best food
                    <br /> restaurants on Mljet
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="row"
                style={{ paddingLeft: "7.5px", height: "240px" }}
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div
                  className="background col-md-6"
                  style={{
                    backgroundImage:
                      "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/089874df6f7c411d9462f9d29dc7050d?quality=95&fake=.png)",
                  }}
                ></div>
                <div className="info col-md-6">
                  <p>18. 03. 2019 | WHERE TO EAT</p>
                  <h5>
                    Best fish restaurants <br />
                    on island
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "15px", height: "492px" }}>
            {" "}
            <div
              className="col-md-4"
              style={{ padding: "0 7.5px 0 0" }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className="background col-md-12"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/fa69b68cf5b7493ebef0d20169d25618?quality=95&fake=.png)",
                  height: "288px",
                }}
              ></div>
              <div className="info col-md-12" style={{ height: "204px" }}>
                <p>18. 03. 2019 | WHERE TO EAT</p>
                <h5>
                  Turkey Gravy Secrets
                  <br /> Revealed
                </h5>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{ padding: "0 7.5px 0 7.5px" }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className="background col-md-12"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/a7edc51acffb4e40b7e31117946270c0?quality=95&fake=.png)",
                  height: "288px",
                }}
              ></div>
              <div className="info col-md-12" style={{ height: "204px" }}>
                <p>18. 03. 2019 | WHERE TO EAT</p>
                <h5>
                  Barbecue Party Tips For A <br />
                  Truly Amazing Event
                </h5>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{ padding: "0 0 0 7.5px" }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className="background col-md-12"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/8a74db2d635e44ffb7f1de2b9dee76bb?quality=95&fake=.png)",
                  height: "288px",
                }}
              ></div>
              <div className="info col-md-12" style={{ height: "204px" }}>
                <p>18. 03. 2019 | WHERE TO EAT</p>
                <h5>
                  The Luxury Of Traveling
                  <br /> With Yacht Charter
                  <br /> Companies
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
