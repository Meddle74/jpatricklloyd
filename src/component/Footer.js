import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FaceBookIcon from '../image/social-icons/FaceBook.js';
import TwitterIcon from '../image/social-icons/Twitter.js';
import LinkedinIcon from'../image/social-icons/LinkedIn.js';
import GitHubIcon from '../image/social-icons/GitHub.js';

// src/HeartIcon.js

const url = {
  facebook: 'https://www.facebook.com/meddle74/',
  twitter: 'https://twitter.com/jpatricklloyd1',
  github: 'https://github.com/Meddle74',
  linkedin: 'https://www.linkedin.com/in/patrick-lloyd-bb1b945a/',
};
class Footer extends Component {
  render() {
    return (
      <section className='footer-area'>
        <div className='container'>
          <div className='footer-content'>
            <Fade top cascade>
              <a
                target='_blank'
                href={url.twitter}
                style={{ textDecoration: 'none' }}
              >
                <TwitterIcon
                  width='45px'
                  height='45px'
                  item
                  style={{ marginLeft: 10 }}
                />
              </a>
              <a
                target='_blank'
                href={url.facebook}
                style={{ textDecoration: 'none' }}
              >
                <FaceBookIcon
                  width='45px'
                  height='45px'
                  item
                  style={{ marginLeft: 10 }}
                />
              </a>
              <a
                target='_blank'
                href={url.github}
                style={{ textDecoration: 'none' }}
              >
                <GitHubIcon
                  width='45px'
                  height='45px'
                  item
                  style={{ marginLeft: 10 }}
                />
              </a>
              <a
                target='_blank'
                href={url.linkedin}
                style={{ textDecoration: 'none' }}
              >
                <LinkedinIcon
                  width='45px'
                  height='45px'
                  item
                  style={{ marginLeft: 10 }}
                />
              </a>
            </Fade>
            <p item style={{ marginTop: 20 }}>
              © 2021 J.Patrick Lloyd - All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
