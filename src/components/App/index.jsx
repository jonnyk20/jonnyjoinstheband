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
              <div className='col-md-6 border mx-auto intro text-white'>
                <div className='row'>
                  <div className='col-md-9 d-flex flex-column justify-content-center '>
                    <span className='lead pr-2'>
                    I’m Jonny, a web developer and designer with a passion for cultures an languages. 
                    I would love to join the band as a Web Development Intern.
                    </span>
                  </div>
                  <div className='col-md-3 d-flex justify-content-end align-items-center p-0'>
                    <div className='intro-image'>
                      <img 
                        alt='me in an ice cave'
                        src='https://s3.ca-central-1.amazonaws.com/jonnyk-misc/images/Jonathan+Kalambay_preview.jpeg' 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3 pt-3'>
              <div className='col-md-12 py-5 mt-3'>
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
              <div className='col-md-12 py-5 header text-white tall'>
                <h3>I coded for the band,</h3>
              </div>
            </div>
            <div className='row p-2'>
              <div className='col-md-4'>
                <a href='https://chrome.google.com/webstore/detail/add-to-spotify/fppjinncdppodkekhchkfejnmocdlpna?hl=en'>
                  <div className='project'>
                    <div className='project-image'>
                      <img 
                        alt='project'
                        src='https://s3.ca-central-1.amazonaws.com/jonnyk-misc/spotify/screen-ats.png' 
                      />
                    </div>
                    <div className='project-description'>
                      <h5 className='text-success'> Add To Spotify </h5>
                      <p className='text-white lead'>
                        A chrome extension that lets you quickly look up songs and add them to any of your playlists.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='https://www.oxcord.io'>
                  <div className='project'>
                    <div className='project-image'>
                      <img 
                        alt='project'
                        src='https://s3.ca-central-1.amazonaws.com/jonnyk-misc/spotify/screen-oxcord.png' 
                      />
                    </div>
                    <div className='project-description'>
                      <h5 className='text-success'> Oxcord.io </h5>
                      <p className='text-white lead'>
                        A collaborative jukebox. This Progressive Web App lets you host a playlist and have guests add songs and vote them up/down the queue.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href='https://github.com/jonnyk20/spotify-node-react-starter-kit'>
                  <div className='project'>
                    <div className='project-image'>
                      <img 
                        alt='project'
                        src='https://s3.ca-central-1.amazonaws.com/jonnyk-misc/spotify/screen-starter-kit.png' 
                      />
                    </div>
                    <div className='project-description'>
                      <h5 className='text-success'> Spotify-React Starter Kit </h5>
                      <p className='text-white lead'>
                        A boilerplate using Node.js and React that is set up to connect to Spotify's API using the authorization-code method.
                      </p>
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
              <div className='col-md-12 py-5 header tall'>
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
                <a href='#'>
                  <div className='article'>
                    <div className='article-image'>
                      <img 
                        alt='article'
                        src='https://image.flaticon.com/icons/png/512/31/31117.png' 
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
              <div className='col-md-12 text-white my-3 py-3 tall'>
                <h3>and I spoke for the band...</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='mx-auto'>
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
              <div className='col-md-12 my-3 py-3 tall'>
                <h3>...in several languages</h3>
              </div>
            </div>            
            <div className='row'>
              <div className='col-md-4'>
                <div className='border video mx-auto'>
                  <img 
                    alt='loading'
                    src='https://image.flaticon.com/icons/png/512/31/31117.png' 
                  />
                </div>
                <h3 className='text-white m-3'> French </h3>
              </div>
              <div className='col-md-4'>
                <div className='border video mx-auto'>
                  <img 
                    alt='loading'
                    src='https://image.flaticon.com/icons/png/512/31/31117.png' 
                  />
                </div>
                <h3 className='text-white m-3'> Spanish </h3>
              </div>
              <div className='col-md-4'>
                <div className='border video mx-auto'>
                  <img 
                    alt='loading'
                    src='https://image.flaticon.com/icons/png/512/31/31117.png' 
                  />
                </div>
                <h3 className='text-white m-3'> Japanese </h3>
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
            <div className='social-buttons mb-2'>
              <a href='https://www.jonnykalambay.com'>
                <button className='btn btn-success mx-2'>
                  <i className='fa fa-globe' />
                </button>
              </a>
              <a href='https://github.com/jonnyk20'>
                <button className='btn btn-success mx-2'>
                  <i className='fa fa-github' />
                </button>
              </a>
              <a href='https://www.linkedin.com/in/jonnykalambay'>  
                <button className='btn btn-success mx-2'>
                  <i className='fa fa-linkedin' />
                </button>
              </a>
              <a href='https://codepen.io/jonnnyk20'>
                <button className='btn btn-success mx-2'>
                  <i className='fa fa-codepen' />
                </button>
              </a>
              <a href='https://medium.com/@jonnyk20'>
                <button className='btn btn-success mx-2'>
                  <i className='fa fa-medium' />
                </button>
              </a>
              <a href='https://www.youtube.com/channel/UCUm0chMKj4MA7q9CWZXWhiA'>
                <button className='btn btn-success mx-2'>
                  <i className='fa fa-youtube' />
                </button>
              </a>
            </div>
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
