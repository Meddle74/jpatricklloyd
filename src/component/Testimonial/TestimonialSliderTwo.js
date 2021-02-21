import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSliderTwo extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider_Two">
                <div className="item">
                    <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
                    <div className="media">
                        <div className="author_img">
                            <img src={require('../../image/slider2.png')} alt=""/>
                        </div>
                        <div className="media-body">
                            <h6>Alex Smith</h6>
                            <span>Envato Customer</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
                    <div className="media">
                        <div className="author_img">
                            <img src={require('../../image/our-coaches-2.jpg')} alt=""/>
                        </div>
                        <div className="media-body">
                            <h6>Michael Bean</h6>
                            <span>Graphic Designer</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
                    <div className="media">
                        <div className="author_img">
                            <img src={require('../../image/our-coaches-7.jpg')} alt=""/>
                        </div>
                        <div className="media-body">
                            <h6>Edward Evans</h6>
                            <span>Envato Customer</span>
                        </div>
                    </div>
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSliderTwo;