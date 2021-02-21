import React from 'react';
import Particles from 'react-particles-js/';
import Img1 from '../../image/img-1.png';
import Img2 from '../../image/h_pijom1.png';
import Img3 from '../../image/wave.png';
import Img4 from '../../image/tr_two.png';
import Img5 from '../../image/img-6.png';
import Img6 from '../../image/img-8.png';

const ParticlesComponent = () => {
  return (
      <React.Fragment>
        <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 8,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Img1}`,
                  width: 50,
                  height: 53,
                },
                {
                  src: `${Img2}`,
                  width: 100,
                  height: 100,
                },
                {
                  src: `${Img3}`,
                  width: 100,
                  height: 90,
                },
                {
                  src: `${Img4}`,
                  width: 30,
                  height: 30,
                },
                {
                  src: `${Img5}`,
                  width: 50,
                  height: 53,
                },
                {
                  src: `${Img6}`,
                  width: 50,
                  height: 53,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 15,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.8, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 100,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      </React.Fragment>
  );
};
export default ParticlesComponent;
