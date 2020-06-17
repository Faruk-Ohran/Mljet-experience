import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Aos from "aos";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 20000, easing: "ease-in-sine" });
  }, []);
  return (
    <div className="header">
      <div className="header-overlay">
        <div className="bg-lines"></div>
        <Navbar />

        <div className="header-wrapper">
          <div
            className="title"
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
            className="sub-text"
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

          <div className="eat-stay-amusement">
            <div
              className="rectangle"
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
              className="rectangle"
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
              className="rectangle"
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
          <div
            className="row"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div
              className="background"
              style={{
                backgroundImage:
                  "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/eaedc6cfdf7c4c37836cedc5db77a85b?quality=95&fake=.png)",
              }}
            ></div>
            <div
              className="info"
              style={{ width: "25.25vw", height: "45.6vh" }}
            >
              <p className="date">18. 03. 2019 | WHERE TO EAT</p>
              <h3>
                Get Ready Fast For <br />
                Fall Leaf restaurant
                <br /> Trips
              </h3>
              <p>
                Buying the right telescope to take your love of astronomy to the
                next level is a big next step in the development of your passion
                for the stars. In many ways, it is ...
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="two-pictures"
              data-aos="zoom-in-right"
              data-aos-duration="700"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
              style={{ marginRight: "0.95vw" }}
            >
              <div
                className="background"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/de8ce8b5b186458ea57b22c72d94969e?quality=95&fake=.png)",
                }}
              ></div>
              <div className="info">
                <p className="date">18. 03. 2019 | WHERE TO EAT</p>
                <h3>
                  Best food
                  <br /> restaurants on Mljet
                </h3>
              </div>
            </div>
            <div
              className="two-pictures"
              data-aos="zoom-in-left"
              data-aos-duration="700"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
              style={{ marginLeft: "0.95vw" }}
            >
              <div
                className="background"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/089874df6f7c411d9462f9d29dc7050d?quality=95&fake=.png)",
                }}
              ></div>
              <div className="info">
                <p className="date">18. 03. 2019 | WHERE TO EAT</p>
                <h3>
                  Best fish restaurants <br />
                  on island
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="three-pictures"
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
              style={{ marginRight: "0.835vw" }}
            >
              <div
                className="background"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/fa69b68cf5b7493ebef0d20169d25618?quality=95&fake=.png)",
                }}
              ></div>
              <div className="info">
                <p className="date">18. 03. 2019 | WHERE TO EAT</p>
                <h3>
                  Turkey Gravy Secrets
                  <br /> Revealed
                </h3>
              </div>
            </div>
            <div
              className="three-pictures"
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
              style={{ margin: "0 0.835vw 0 0.835vw" }}
            >
              <div
                className="background"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/a7edc51acffb4e40b7e31117946270c0?quality=95&fake=.png)",
                }}
              ></div>
              <div className="info">
                <p className="date">18. 03. 2019 | WHERE TO EAT</p>
                <h3>
                  Barbecue Party Tips For A <br />
                  Truly Amazing Event
                </h3>
              </div>
            </div>
            <div
              className="three-pictures"
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
              style={{ marginLeft: "0.835vw" }}
            >
              <div
                className="background"
                style={{
                  backgroundImage:
                    "url(https://marvel-live.freetls.fastly.net/canvas/2019/11/8a74db2d635e44ffb7f1de2b9dee76bb?quality=95&fake=.png)",
                }}
              ></div>
              <div className="info">
                <p className="date">18. 03. 2019 | WHERE TO EAT</p>
                <h3>
                  The Luxury Of Traveling
                  <br /> With Yacht Charter
                  <br /> Companies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
