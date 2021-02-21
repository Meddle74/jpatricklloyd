import React, { Component } from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {
  state = {
    activeItem: '*',
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded('.grid');

    imgLoad.on('progress', function (instance, image) {
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
      });
    }

    // this.iso.arrange({ filter: newFilter });

    if (newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? 'active' : '');
  render() {
    return (
      <div>
        <div className='grid row'>
          <div className='col-md-3 col-sm-6 col-xs-12 grid-item tech develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/ruff3.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h6 className='sm-titl'>WEB DESIGN</h6>
                  <div className='icons'>
                    <a href='.#'>
                      <i className='icon-magnifying-glass'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-xs-12 grid-item market web develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/ruff2.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h6 className='sm-titl'>WEB DESIGN</h6>
                  <div className='icons'>
                    <a href='.#'>
                      <i className='icon-magnifying-glass'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12 grid-item market develop'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/ruff1.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h6 className='sm-titl'>WEB DESIGN</h6>
                  <div className='icons'>
                    <a href='.#'>
                      <i className='icon-magnifying-glass'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12 grid-item web'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/bike1.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h6 className='sm-titl'>WEB DESIGN</h6>
                  <div className='icons'>
                    <a href='.#'>
                      <i className='icon-magnifying-glass'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12 grid-item web'>
            <div className='portfolio hover-style'>
              <img src={require('../../image/portfolio/bike2.png')} alt='' />
              <div className='item-img-overlay'>
                <div className='overlay-info text-center'>
                  <h6 className='sm-titl'>WEB DESIGN</h6>
                  <div className='icons'>
                    <a href='.#'>
                      <i className='icon-magnifying-glass'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemGrid;
