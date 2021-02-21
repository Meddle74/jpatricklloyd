import React, {Component} from 'react';
import {Reveal} from 'react-reveal/';

class frelencerBanner extends Component {
    render(){
        return(
            <section className="frelencer_banner_area" id="home">
                <div className="home_bubble">
                    <div className="bubble b_one"></div>
                    <div className="bubble b_two"></div>
                    <div className="bubble b_three"></div>
                    <div className="bubble b_four"></div>
                    <div className="bubble b_five"></div>
                    <div className="bubble b_six"></div>
                </div>
                <Reveal effect="fadeInRight" duration={500}>
                <img className="s_shap" src={require('../../image/banner_img.svg')}  alt=""/>
                </Reveal>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="frelencer_content">
                                <Reveal effect="fadeInUp" duration={500}>
                                    <h2 className="t_color">Hey there!<br/> I'm Martin Solonick Independent <span>Frelencer</span></h2>
                                </Reveal>
                                <Reveal effect="fadeInUp" duration={700}>
                                    <h4><span>I create thousand off website</span></h4>
                                </Reveal>
                                <Reveal effect="fadeInUp" duration={900}>
                                    <a href="./"className="theme_btn active">Hire me</a>
                                </Reveal>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="frelencer_img">
                            <Reveal effect="fadeInLeft" duration={1400}>
                                <img className="f_img_one" src={require('../../image/f_man.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInRight" duration={1200}>
                                <img className="f_img_two" src={require('../../image/table.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInDown" duration={1600}>
                                <img className="f_img_three" src={require('../../image/cup.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInDown" duration={1600}>
                                <img className="f_img_four" src={require('../../image/shadow.png')} alt=""/>
                            </Reveal>
                            <Reveal effect="fadeInDown" duration={2000}>
                                <div className="f_img_five">
                                    <img className="" src={require('../../image/php.png')} alt=""/>
                                </div>
                            </Reveal>
                                <div className="f_img_six">
                                    <img className="" src={require('../../image/c++.png')} alt=""/>
                                </div>
                                <div className="f_img_seven">
                                    <img className="" src={require('../../image/search.png')} alt=""/>
                                </div>
                                <div className="f_img_eight">
                                    <img className="" src={require('../../image/arrow.png')} alt=""/>
                                </div>
                                <div className="f_img_nine">
                                    <img className="" src={require('../../image/brakets.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default frelencerBanner;