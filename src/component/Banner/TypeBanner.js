import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Reveal from 'react-reveal/Reveal/';
import Typer from './Typer';
import FaceBookIcon from '../../image/social-icons/FaceBook.js';
import TwitterIcon from '../../image/social-icons/Twitter.js';
import LinkedinIcon from '../../image/social-icons/LinkedIn.js';
import GitHubIcon from '../../image/social-icons/GitHub.js';

// src/HeartIcon.js


const url={
  facebook:'https://www.facebook.com/meddle74/',
  twitter:'https://twitter.com/jpatricklloyd1',
  github:'https://github.com/Meddle74',
  linkedin:'https://www.linkedin.com/in/patrick-lloyd-bb1b945a/',
  
}

// /Users/patrickmac/Sites/Bootcamp /reactportfolio/src/HeartIcon.js

// /Users/patrickmac/Sites/Bootcamp /reactportfolio/src/component/Banner/TypeBanner.js
class TypeBanner extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section id='home'>
        <Parallax
          bgImage={require('../../image/new-hero.jpg')}
          strength={0}
          className='banner_area'
        >
          <div className='container'>
            <div className='banner_content'>
    
              <Reveal effect='fadeInUp' duration={1500}>
                <h2 className='wow fadeInLeft animated'>{jhonData.name}</h2>
              </Reveal>
              <Reveal effect='fadeInUp' duration={2000}>
                {' '}
                <Typer
                  heading={'I am a'}
                  dataText={['Developer', 'Freelancer', 'Designer']}
                />
              </Reveal>
                <a target='_blank' href={url.twitter} style={{ textDecoration: 'none' }}><TwitterIcon width='45px' height='45px'item style={{ marginLeft: 10 }}/></a>
                <a target='_blank' href={url.facebook} style={{ textDecoration: 'none' }}><FaceBookIcon width='45px' height='45px'item style={{ marginLeft: 10 }}/></a>
                <a target='_blank' href={url.github} style={{ textDecoration: 'none' }}><GitHubIcon width='45px' height='45px'item style={{ marginLeft: 10 }}/></a>
                <a target='_blank' href={url.linkedin} style={{ textDecoration: 'none' }}><LinkedinIcon width='45px' height='45px'item style={{ marginLeft: 10 }}/></a>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default TypeBanner;
