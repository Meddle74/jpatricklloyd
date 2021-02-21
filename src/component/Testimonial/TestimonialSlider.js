import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider">
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/slider2.png')} alt=""/>
                    </div>
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/our-coaches-2.jpg')} alt=""/>
                    </div>
                    <h6>MICHAEL BEAN</h6>
                    <span>Graphic Designer</span>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../image/our-coaches-7.jpg')} alt=""/>
                    </div>
                    <h6>Edward Evans</h6>
                    <span>Envato Customer</span>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSlider;