import React, {Component} from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
import Slider from 'react-slick';
class PortfolioSlider extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            pauseOnHover:true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return(
            <section className="portfolio_slider_area" id="portfolio">
                <div className="container">
                    <SectionTitleTwo tCenter="text-center" stitle="My Portfolio" btitle="Some of my latest works."/>
                    <Slider {...settings} className="portfolio_slider">
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../image/new1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>Poluchoromatic Logo</h4></a>
                                    <a href=".#">Branding Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../image/portfolio1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>Poluchoromatic Logo</h4></a>
                                    <a href=".#">Logo Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../image/portfolio2.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>Creative Design</h4></a>
                                    <a href=".#">App Design</a>
                                </div>
                            </div>
                        </div>
                        <div className="p_item">
                            <div className="portfolio_content">
                                <a href="./"><img src={require('../../image/portfolio1.jpg')} alt=""/></a>
                                <div className="text">
                                    <a href="./"><h4>John Portfolio Logo</h4></a>
                                    <a href=".#">UI/UX Design</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default PortfolioSlider;