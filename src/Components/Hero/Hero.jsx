import React, { useEffect, useState } from 'react';
import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';
import image3 from '../../assets/image3.png';
import hacking from '../../assets/hacking.png';
import hack from '../../assets/hack.png';
import app from '../../assets/app.png';
import code from '../../assets/code.png';
import digital from '../../assets/digital.png';
import mrketing from '../../assets/mrketing.png';
import seo from '../../assets/seo.png';
import socialmedia from '../../assets/socialmedia.png';
import web from '../../assets/web.png';
import web1 from '../../assets/web1.png';
import profile from '../../assets/profile.png';
import { initializeSwiper } from './main.js';
const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(playStatus);

  useEffect(() => {
    initializeSwiper();
  }, []);

  useEffect(() => {
    setIsVideoPlaying(playStatus);
  }, [playStatus]);

  return (
    <div className='hero'>
      {!isVideoPlaying && (
        <div className="hero-text">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
      )}

      <div className="hero-dot-play">
        <div className="hero-explore">
          <p>Explore More Courses</p>
          <img src={arrow_btn} alt=" " />

        </div>
        <div>
          <ul className="hero-dots">
            <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
          </ul>
        </div>
        <div className="hero-play">
          <img 
            onClick={() => {
              const newPlayStatus = !playStatus;
              setPlayStatus(newPlayStatus);
              setIsVideoPlaying(newPlayStatus);
            }} 
            src={playStatus ? pause_icon : play_icon} 
            alt="" 
          />
          <p>See the video</p>
        </div>
      </div>
      <div className="main-position">
        <h1 className='name-courses'>Popular Courses Now</h1>
        <div className="Courses">
          <div className="div">
            <img src={hacking} alt="" />
            <div className="overlay">
              <h1>Computer Science</h1>
              <p>Covers the basics of computer science, including programming, algorithms.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={hack} alt="" />
            <div className="overlay">
              <h1>Ethical Hacking</h1>
              <p>Teaches how to identify and exploit vulnerabilities in systems in a legal and ethical manner</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={web} alt="" />
            <div className="overlay">
              <h1>Web Development</h1>
              <p>Focuses on building and designing websites using HTML, CSS, and JavaScript. </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={web1} alt="" />
            <div className="overlay">
              <h1>Digital Marketing</h1>
              <p>Provides a broad overview of digital marketing concepts, tools, and strategies.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={socialmedia} alt="" />
            <div className="overlay">
              <h1>Data Science and Machine Learning</h1>
              <p>Teaches how to analyze data, build predictive models, and implement machine learning algorithms</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={mrketing} alt="" />
            <div className="overlay">
              <h1>Cloud Computing</h1>
              <p>ntroduces cloud services and platforms such as AWS, Azure, and Google Cloud.`</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={seo} alt="" />
            <div className="overlay">
              <h1>Search Engine Optimization (SEO)</h1>
              <p>Focuses on improving a website’s visibility in search engine results pages (SERPs).</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={app} alt="" />
            <div className="overlay">
              <h1>DevOps Practices</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus fugit nisi</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={digital} alt="" />
            <div className="overlay">
              <h1>Blockchain Technology</h1>
              <p>Introduces the concepts behind blockchain, including how it works and its applications.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={code} alt="" />
            <div className="overlay">
              <h1>Web Design</h1>
              <p>Covers the basics of web design, including HTML, CSS, and design principles. It provides a foundation for understanding how websites are built and styled.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={web} alt="" />
            <div className="overlay">
              <h1>Graphic Design</h1>
              <p>Provides a foundational understanding of graphic design principles, including color theory, typography, layout, and design software.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
          <div className="div">
            <img src={socialmedia} alt="" />
            <div className="overlay">
              <h1>App Development</h1>
              <p> Provides an overview of the app development process, including the lifecycle of an app, basic programming concepts, and different types of applications.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button>View Course</button>
            </div>
          </div>
        </div>
        <div className='button-flex py-3 pt-4 d-flex justify-content-center'>
          <button>More Courses<img src={arrow_btn} alt=" " /></button>
        </div>
        <div className='text-center'>
          <h1 className='text-center pt-5 border-bottom courses-list '>Our Courses list</h1>
        </div>
        <div className="course-status d-flex py-4 gap-4 px-4 text-center">
          <div className="status1 rounded-4">
            <img src="" alt="" />
            <div className="overlay-1 ">
              <div className="status-div">
                <h1>Running Courses</h1>
                <h1>100+</h1>
              </div>
              <div className="status-div">
                <p>We provide more than 100 courses </p>
                <button>See All</button>
              </div>
            </div>
          </div>
          <div className="status1 rounded-4">
            <img src="" alt="" />
            <div className="overlay-1">
              <div className="status-div">
                <h1>Running Courses</h1>
                <h1>100+</h1>
              </div>
              <div className="status-div">
                <p>We provide more than 100 courses </p>
                <button>See All</button>
              </div>
            </div>
          </div>
          <div className="status1 rounded-4">
            <img src="" alt="" />
            <div className="overlay-1">
              <div className="status-div">
                <h1>Running Courses</h1>
                <h1>100+</h1>
              </div>
              <div className="status-div">
                <p>We provide more than 100 courses </p>
                <button>See All</button>
              </div>
            </div>
          </div>
        </div>
        <div className="contain border-top">
          <div className="board">
            <h2 className='text-light'>Our Reviews</h2>
            <p className='text-light'>Some of our satisfied students</p>
            <div className="swiper">
              <div className="swiper-wrapper d-flex jus">
                <div className="swiper-slide text-light">
                  <div className="swiper-review">
                    <img className='profile' src={profile} alt="" />
                    <p className='z-index'>The courses provided by this infosys is excellent as it provide both practical and theoritical courses.</p>

                  </div>
                </div>
                <div className="swiper-slide text-light"><div className="swiper-review">
                  <img className='profile' src={profile} alt="" />
                  <p className='z-index'>The courses provided by this infosys is excellent as it provide both practical and theoritical courses.</p>
                </div></div>
                <div className="swiper-slide text-light"><div className="swiper-review">

                  <img className='profile' src={profile} alt="" />
                  <p className='z-index'>The courses provided by this infosys is excellent as it provide both practical and theoritical courses.</p>

                </div></div>

              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-box ">
            <div className="row">
              <div className="col"><ol>
                <h2>Our Services</h2>
                <li> Web Development</li>
                <li> Digital Marketing</li>
                <li> Mobile App Development</li>
                <li> IT Consulting & Strategy</li>
                <li> Cloud Solutions</li>
                <li> Cybersecurity Services</li>
              </ol>
              </div>
              <div className="col">

                <h2>Need Help?</h2>

                <h5>Contact Us:</h5>
                <h6>Email:  <a href="#"> Shresthasujal949@gmail.com</a></h6>
                <h6>Number: <span> 9810129627 </span></h6>
                <h6>Phone No:<span> 7777923</span></h6>



              </div>
              <div className="col">
                
                  <h2>About Us</h2>
                  <p>Welcome to TechFlare, where innovation meets excellence. Founded with a passion for technology and a commitment to quality. We specialize in delivering tailored services that range from software development and web design to digital marketing and IT consultancy.</p>
                
              </div>
              <div className="col">
                <div>
                  <h2>Stay Connected</h2>
                  
                    
                      <a href="http://127.0.0.1:5500/src/Components/login-real.html/loginn.html">
                        <button type="button" className="signup-btn">Signup</button>

                      </a>
                      <a href="http://127.0.0.1:5500/src/Components/login-real.html/loginn.html">
                        <button type="button" className="signup-btn m-3 ">Login</button>

                      </a>
                    
                
                </div>

              </div>

            </div>
            
    <p className='privacy'>
        <strong>Privacy Policy:</strong> Your privacy is important to us.  please read our full <a href="privacy-policy.html">Privacy Policy</a>.
    </p>


          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
