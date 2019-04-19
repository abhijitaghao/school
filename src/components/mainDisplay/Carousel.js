import React from "react";
import painting from "../../img/display2.jpg";
import science from "../../img/display3.jpg";

export default function Carousel() {
  return (
    <div>
      <div id="slider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li className="active" data-target="#slider" data-slide-to="0" />
          <li data-target="#slider" data-slide-to="1" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={science}
              alt="First slide"
              className="d-block img-fluid carousel-img"
            />
            <div className="carousel-caption d-none d-md-block text-right mr-5">
              <h3>Learning by doing</h3>
              <p>
                Give your prodigy an apportunity to learn the right way. We at
                school_name have intigrated our curriculum to make our student
                get involve in the learning process.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={painting}
              alt="Second Slide"
              className="d-block img-fluid carousel-img"
            />
            <div className="carousel-caption d-none d-md-block mr-5">
              <h3>Encourage to to learn new things</h3>
              <p>
                In modern ira it has become vital for everyone to learn beyond
                the boundries of books and explore the self. We give the
                opportunity and support to try different things and discover the
                self.
              </p>
              <button className="btn-info btn-lg">Read more</button>
            </div>
          </div>

          <a href="#slider" className="carousel-control-prev" data-slide="prev">
            <i className="carousel-control-prev-icon" />
          </a>

          <a href="#slider" className="carousel-control-next" data-slide="next">
            <i className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
