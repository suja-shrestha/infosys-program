import React, { useEffect } from 'react';
import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';
import image3 from '../../assets/image3.png';
import { initializeSwiper } from './main.js';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  useEffect(() => {
    initializeSwiper();
  }, []);

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-dot-play">
        <div className="hero-explore">
          <p>Explore More Courses</p>
          <a href="https://www.facebook.com/login.php/"><img src={arrow_btn} alt=" " /></a>
        </div>
        <div>
          <ul className="hero-dots">
            <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
            <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
          </ul>
        </div>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>
      <div className="main-position">
        <h1 className='name-courses'>Popular Courses Now</h1>
        <div className="Courses">
          <div className="div">
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
            <img src={image3} alt="" />
            <div className="overlay">
              <h1>Title</h1>
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
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="swiper-slide text-light"><div className="swiper-review">
                  <img src="" alt="" />
                </div></div>
                <div className="swiper-slide text-light"><div className="swiper-review">
                  <img src="" alt="" />
                </div></div>
                
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
