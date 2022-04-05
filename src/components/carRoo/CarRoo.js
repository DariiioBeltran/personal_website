import React from 'react';
import './CarRoo.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { SiPandas, SiTensorflow, SiScikitlearn, SiDjango, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';

import newTweet2 from './../../media/newTweet2.JPG';
import black from './../../media/black.webp';

function CarRoo() {

  return (
    <div>

      <Carousel interval={null}>

        <Carousel.Item>
          <img className="d-block w-100" style={{height: '100vh'}} src={black} alt="First slide" />

            <Carousel.Caption>
              <div className='centerOO'>
                <h1>Dario Beltran</h1>
                <hr />
                <h2>Sofware Engineer</h2>
              </div>
            </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" style={{height: '100vh'}} src={black} alt="Second slide" />
          <Carousel.Caption>
            <div className='educ'>
              <h1>Education</h1>
              <hr />

              {/* Option 2 */}
              <div className='educationTable'>
                <table>
                  <tr>
                    <td className='bachelors'>
                      <h4>University of Texas - Austin</h4>
                      <hr />
                    </td>
                    <td className='bachelors'>
                      <h4>University of Texas - Austin</h4>
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className='bachelors'>
                      <p>B.S. Mathematics</p>
                      <p>August 2017 - May 2021</p>
                      <p>GPA: 3.50</p>
                    </td>
                    <td className='bachelors'>
                      <p>B.B.A. Quantitative Finance</p>
                      <p>August 2017 - May 2021</p>
                      <p>GPA: 3.50</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" style={{height: '100vh'}} src={black} alt="Third slide" />
          <Carousel.Caption>
            <div className='bout'>
              <h1>About Me</h1>
              <hr />
              <p className='aboutMe'>My name is Dario Beltran III. I graduated from the University of Texas at Austin with a degree in mathematics and another
                degree in quantiative finance.
              </p>
              <p className='aboutMe'> I am extremely passionate about technology and problem solving. During my college career I realized how deep of an impact
                technology has on everybody's lives. What compounded my interest in technology is the creativity and problem solving required
                to develop good tech. I am unbelievably excited to enter the industry and contribute as much as I possibly can. I believe my
                curiousity will point me in the right direction, and my work ethic will take me there. I will learn, master, or create anything
                necessary to solve a problem.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" style={{height: '100vh'}} src={black} alt="Third slide" />
          <Carousel.Caption>
            <div className='proj'>
              <h1>Projects</h1>
              <hr />
              <div className='projectsTable'>
                <table>
                  <tr>
                    <td><h3>Oura Ring</h3></td>
                    <td><h3>PR Tracker</h3></td>
                    <td><h3>Collatz Conjecture</h3></td>
                  </tr>
                  <tr>
                    <td><hr /></td>
                    <td><hr /></td>
                    <td><hr /></td>
                  </tr>
                  <tr>
                    <td className='projectDesc'>
                      <p>Exported months worth of biometric data from Oura ring and cleaned it using Pandas.
                        Performed exprolaroty data analysis, then trained several machine learning models to predict
                        the next day's 'Readiness'. Evaluated models' perfomances with cross validation and a test set.
                      </p>
                      <p>Tech: <SiPandas className='pandas' size='1.25em' /> <SiTensorflow className='tensorFlow' size='1.25em' /> <SiScikitlearn className='scikit' size='1.25em' />
                      </p>
                      <a className='gitButton' href="https://github.com/DariiioBeltran/OuraRingProject"><Button variant="light" size='sm'>Code</Button></a>
                    </td>
                    <td className='projectDesc'>
                      <p>Web app used to keep track of perfomance in the gym. Using Django for the back end, the PR tracker
                        stores a user's workout and creates visualizations of their progress. The front end was created using
                        React and Chart JS.</p>
                      <p>Tech: <SiDjango clasName='django' size='1.25em' /> <SiReact className='reactRoo' size='1.25em' /> <SiHtml5 className='htmlIcon' size='1.25em' /> <SiCss3 className='cssIcom' size='1.25em' /></p>
                      <p>Coming Soon!</p>
                    </td>
                    <td className='projectDesc'>
                      <p>Web app created with React to visualize orbits of the Collatz conjecture. Taking a positive integer
                        as an argument, the visualizer creates an interesting visualization of the behavior of the number as
                        it computes the orbit of the input.
                      </p>
                      <p>Tech: <SiReact className='reactRoo' size='1.25em' /> <SiHtml5 className='htmlIcon' size='1.25em' /> <SiCss3 className='cssIcom' size='1.25em' /></p>
                      <p>Coming Soon!</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" style={{height: '100vh'}} src={newTweet2} alt="Third slide" />
          <Carousel.Caption>
            <div className='contact'>
              <h1>Contact Me</h1>
              <hr />
              <h5>dariiio.beltran@gmail.com</h5>
              <h5>(915) 346 - 3168</h5>
              <div className='contactTable'>
                <table>
                  <tr>
                    
                    <td className='weirdIcons'><a href="https://www.linkedin.com/in/dario-beltran-015995171/"><AiFillLinkedin className='linkedIn' size='2.25em' /></a></td>
                    <td className='weirdIcons'><a href="https://github.com/DariiioBeltran"><AiOutlineGithub className='gitHub' size='2.25em' /></a></td>
                  </tr>
                </table>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
  )
}

export default CarRoo