import React, { Component } from "react";
import Slider from "react-slick";

const photos = [
  {
    id: 1,
    url:
      "https://marvel-live.freetls.fastly.net/canvas/2019/11/5d80d38b27864def9139bc23bc205fc6?quality=95&fake=.png",
  },
  {
    id: 2,
    url:
      "https://marvel-live.freetls.fastly.net/canvas/2019/11/b654431f3d064a6e9edaa0267ec5c8ee?quality=95&fake=.png",
  },
  {
    id: 3,
    url:
      "https://marvel-live.freetls.fastly.net/canvas/2019/11/af4b1982d51644c79d4647a2ac01fe27?quality=95&fake=.png",
  },
  {
    id: 4,
    url:
      "https://marvel-live.freetls.fastly.net/canvas/2019/11/eaedc6cfdf7c4c37836cedc5db77a85b?quality=95&fake=.png",
  },
];

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 3,
      arrows: false,
      autoplay: false,
      focusOnSelect: false,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div key={photo.id}>
                <img src={photo.url} alt=""></img>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
