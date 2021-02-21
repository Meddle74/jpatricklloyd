import React, {Component} from 'react';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
class ServiceTwo extends Component{
    render(){
        let {rowFlex} = this.props;
        return(
            <div className="service_area_two bg_color" id="service">
                <div className="container">
                    <div className={`row align-items-center ${rowFlex}`}>
                        <div className="col-lg-5">
                            <div className="service_content">
                                <SectionTitleTwo stitle="What I do ?" btitle="Innovative solutions to grow your creative projects"/>
                                <p>I’m John, a <span>visual designer</span> based in UK. I specialize in helping startups grow their businesses.</p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                            UX & UI Design
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                            Mobile & App Design 
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                            3D Modeling &  Motion
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="service_img">
                                        <img src={require ('../image/service.svg')} alt=""/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="service_img">
                                        <img src={require ('../image/service.svg')} alt=""/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="service_img">
                                        <img src={require ('../image/service.svg')} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceTwo;
