import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import 'src/assets/stylesheets/base.scss';
import { log } from 'util';


function App({ name }) {
  return (
    <div className='text-center'>
      {/********* Section 1 ********/}
      <div className='row'>
        <div className='col-md-12'>
          <div className='section section-1 border'>
            <div className='row'>
              <div className='col-md-12 py-5'>
                <h2> Hey Spotify </h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-5 offset-md-3'>
                <p className='lead'>
                  I’m Jonny, a web developer and designer with a passion for cultures an languages. 
                  I would love to join the band as a Web Development Intern.
                </p>
              </div>
              <div className='col-md-2 d-flex justify-content-center align-items-center'>
                <div className='card intro-image'>[Image]</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 py-5'>
                <p className='lead'>
                  Instead of telling you what I can do for Spotify,
                </p>
                <h5>
                  allow me to show you what I've already done...
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/********* Section 2 ********/}
      <div className='row'>
        <div className='col-md-12'>
          <div className='section section-2 border'>
            <div className='row'>
              <div className='col-md-12 py-5 header'>
                <h3>I coded for the band,</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='border project'>
                  [Project]
                </div>
              </div>
              <div className='col-md-4'>
                <div className='border project'>
                  [Project]
                </div>
              </div>
              <div className='col-md-4'>
                <div className='border project'>
                  [Project]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/********* Section 3 ********/}
      <div className='row'>
        <div className='col-md-12'>
          <div className='section section-3 border'>
            <div className='row'>
              <div className='col-md-12 py-5 header'>
                <h3>I wrote for the band,</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='border article'>
                  [Article]
                </div>
              </div>
              <div className='col-md-4'>
                <div className='border article'>
                  [Article]
                </div>
              </div>
              <div className='col-md-4'>
                <div className='border article'>
                  [Article]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/********* Section 4 ********/}
      <div className='row'>
        <div className='col-md-12'>
          <div className='section section-4 border'>
            <div className='row'>
              <div className='col-md-12'>
                <h3>and I spoke for the band...</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='border video'>
                  [Video]
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <h4>...in several languages</h4>
              </div>
            </div>            
            <div className='row'>
              <div className='col-md-4'>
                <div className='border video'>
                [Video]
                </div>
              </div>
              <div className='col-md-4'>
                <div className='border video'>
                [Video]
                </div>
              </div>
              <div className='col-md-4'>
                <div className='border video'>
                [Video]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/********* Section 5 ********/}
      <div className='row'>
        <div className='col-md-12'>
          <div className='section section-4 border'>
            <h3> I would love to keep doing more, </h3>
            <h6> so if you feel like I belong, then let’s work together! </h6>
            [Contact Buttons]
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
