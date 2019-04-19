import React, { Component } from "react";
import Carousel from "./Carousel";

class MainPage extends Component {
  render() {
    return (
      <div id="mainPageDisplay">
        <div id="carousel-slider">
          <Carousel />
        </div>
        <div id="infoSection" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="display-4 text-center mb-3">Our philosophy</div>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla deleniti similique ex earum. Id, quisquam atque neque,
                  provident maiores earum exercitationem rem quidem architecto
                  quo dolorem nihil magni eius? Cum perspiciatis quam esse animi
                  quisquam repellendus officia pariatur commodi qui quis
                  deserunt neque atque, quia molestiae fuga ea eligendi vero
                  similique odio. Esse earum autem deserunt perspiciatis et
                  consequuntur sed laborum, numquam assumenda facere libero
                  beatae ullam sunt obcaecati recusandae nostrum sit ipsam,
                  magni quae. Cum aspernatur quas eius eum natus dolor corrupti
                  nam non quisquam! Ullam voluptatem neque laboriosam asperiores
                  amet veritatis dolore quaerat! Deleniti accusantium
                  reprehenderit provident ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="noticeboard">
          <div className="row text-white">
            <div className="col-md-6 bg-primary">
              <div className="p-4">
                <div className="display-4">Notice board</div>
                <button className="btn btn-lg btn-warning mt-3">
                  View latest
                </button>
              </div>
            </div>
            <div className="col-md-6 bg-info p-4">
              <div className="display-4">Upcoming Events</div>
              <button className="btn btn-lg btn-warning mt-3">
                View latest
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
