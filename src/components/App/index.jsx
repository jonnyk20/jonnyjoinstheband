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
              <div className='col-md-12 py-5 text-success'>
                <h1> Hey Spotify </h1>
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
                <h4 className='text-success'>
                  allow me to show you what I've already done...
                </h4>
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
              <div className='col-md-12 py-5 header text-white'>
                <h3>I coded for the band,</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <a href='#'>
                  <div className='project'>
                    <div className='project-image'>
                      <img 
                        alt='project'
                        src='https://cdn-images-1.medium.com/max/1000/1*cWujB3kNjlm2_7S-2nyL8w.png' 
                      />
                    </div>
                    <div className='project-description'>
                      <h5 className='text-success'> Add To Spotify </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='#'>
                  <div className='project'>
                    <div className='project-image'>
                      <img 
                        alt='project'
                        src='https://cdn-images-1.medium.com/max/1000/1*cWujB3kNjlm2_7S-2nyL8w.png' 
                      />
                    </div>
                    <div className='project-description'>
                      <h5 className='text-success'> Oxcord </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='#'>
                  <div className='project'>
                    <div className='project-image'>
                      <img 
                        alt='project'
                        src='https://cdn-images-1.medium.com/max/1000/1*cWujB3kNjlm2_7S-2nyL8w.png' 
                      />
                    </div>
                    <div className='project-description'>
                      <h5 className='text-success'> Spotify-React Starter Kit </h5>
                    </div>
                  </div>
                </a>
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
            <div className='row px-2'>
              <div className='col-md-4'>
                <a href='https://medium.com/@jonnyk20/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13'>
                  <div className='article'>
                    <div className='article-image'>
                      <img 
                        alt='article'
                        src='https://cdn-images-1.medium.com/max/1000/1*cWujB3kNjlm2_7S-2nyL8w.png' 
                      />
                    </div>
                    <div className='article-description lead  text-muted'>
                      <h5> Now Playing: Using Spotify’s Awesome API with React</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='https://medium.com/@jonnyk20/progressive-web-apps-with-oauth-dont-repeat-my-mistake-16a4063ce113'>
                  <div className='article'>
                    <div className='article-image'>
                      <img 
                        alt='article'
                        src='https://cdn-images-1.medium.com/max/1000/1*ltHeV4wHQN9fQuGstQVAYg.png' 
                      />
                    </div>
                    <div className='article-description lead  text-muted'>
                      <h5> Progressive Web Apps with Oauth: Don’t Repeat My Mistake</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='https://medium.com/@jonnyk20/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13'>
                  <div className='article'>
                    <div className='article-image'>
                      <img 
                        alt='article'
                        src='https://cdn-images-1.medium.com/max/1000/1*cWujB3kNjlm2_7S-2nyL8w.png' 
                      />
                    </div>
                    <div className='article-description lead text-muted'>
                      <h5> Anatomy of a Chrome Extension</h5>
                    </div>
                  </div>
                </a>
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
              <div className='col-md-12 text-white my-3 py-3'>
                <h3>and I spoke for the band...</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='video'>
                  <iframe 
                    allowfullscreen 
                    frameborder="0" 
                    gesture="media" 
                    height="225"
                    src="https://www.youtube.com/embed/prayNyuN3w0?rel=0"
                    width="400"
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 my-3 py-3'>
                <h3>...in several languages</h3>
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
          <div className='section section-5 border'>
            <h3 className='text-success'> I would love to keep doing more, </h3>
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
