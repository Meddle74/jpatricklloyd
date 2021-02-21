import React, { Component } from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';
import { Icon } from '@iconify/react';
import bxlReact from '@iconify-icons/bx/bxl-react';


class Service extends Component {
  render() {
    let jhonData = this.props.jhonData;
    var { wClass } = this.props;
    const test = bxlReact;
    return (
      <section className={`${wClass}`} id='service'>
        <div className='container'>
          <Sectiontitle
            Title="What I'm Doing"
            TitleP='I love what I do. I take great pride in what I do.'
          />
          <Fade bottom cascade duration={1000}>
              
            <Icon icon={test} width='100' height='100' />

            <div className='row'>
              {jhonData.service &&
                jhonData.service.map((item) => {
                  return (
                    <div className='col-lg-4 col-sm-6' key={item.id}>
                      <div
                        className='work_item wow fadeInUp'
                        data-wow-delay='0.1s'
                      >
                        <i className={item.iconName}></i>
                        <a href='.#'>
                          <h2 className='t_color'>{item.serviceTitle}</h2>
                        </a>
                        <p>{item.sDetails}</p>
                        <Icon icon={item.icon} width='100' height='100' />
                      </div>
                    </div>
                  );
                })}
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Service;
