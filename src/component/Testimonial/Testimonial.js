import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { Parallax} from 'react-parallax';

const Testimonial = () => {
  return(
      <section id="testimonial">
        <Parallax bgImage={require('../../image/portfolio/img-3.jpg')} strength={280} className="testimonial_area">
        <div className="container">
            <TestimonialSlider/>
        </div>
        </Parallax>
     </section>
  )
}
export default Testimonial;