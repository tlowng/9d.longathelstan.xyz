import React, { Fragment, useEffect, useRef} from 'react'
import { Helmet } from 'react-helmet'
import MediaQuery from 'react-responsive'
import Typical from 'react-typical'

import FallingFlowers from '../components/fallingflower'
import Members from '../components/members'

import DiscordStatus from '../components/discordstatus'
import Firework from '../components/firework'
import AudioToggle from '../components/AudioToggle'
import Background from '../components/background'
import ViewCounter from '../components/viewcounter'

import './home.css'
import AnimatedGif from '../components/animated_gif'

// Import moved images from src/assets/images
import banner1 from '../assets/images/banner1.webp';
import insta200h from '../assets/images/insta-200h.webp';
import tik200w from '../assets/images/tik-200w.webp';
import nineDLny from '../assets/images/9D-lny.webp';

/**
 * Christmas Theme
 * import ReindeerAnimation from '../components/christmas_theme/reindeeranimation'
 */

const Home = (props) => {
  const viewCounterRef = useRef(null); 

  const handlePreloadClick = () => {
    console.log("++view");
  };
  const enterPage = () => {
    const preloadFrame = document.querySelector('.preload');
    if (preloadFrame) {
      preloadFrame.classList.add('hidden');
    }

    window.dispatchEvent(new Event('trigger-audio-autoplay'));
  };

  useEffect(() => {
    const preloadFrame = document.querySelector('.preload');
    if (preloadFrame) {
      preloadFrame.addEventListener('click', enterPage);
    }

    return () => {
      if (preloadFrame) {
        preloadFrame.removeEventListener('click', enterPage);
      }
    };
  }, []);
  return (
    <div className='homePage'>
      <Background/>
      <AudioToggle />
      <ViewCounter ref={viewCounterRef} pageId="homepage" /> 
    <div className="home-container10">
      <Helmet>
        <title>9D K21-25 NB</title>
        <meta property="og:title" content="9D K21-25 NB" />
      </Helmet>
      <FallingFlowers/>
      <div className="preload" onClick={() => {
        handlePreloadClick();
        viewCounterRef.current.handleIncrementView();
      }}>
        <div className="text">ấn vào đi...</div>
      </div>
      
     
      {/**
       * Christmas Theme
       * <ReindeerAnimation/>
      */}
      {
        /**
         * Animated Gif component
         * <AnimatedGif/>
         */
      }
      <div className="home-container11">
        <div className="home-container12">
        
        {/* Simplified banner image handling */}
        <img
          alt="image"
          src={banner1}
          className="home-image1"
        />
        </div>
        <div className="home-container13">
          <span className="home-text100">9D K21-25 NB</span>
          <span className="home-text101">
            <span>34 khứa</span>
            <br></br>
          </span>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <span className="home-text104">
              <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                'Chào mừng đến với website của class 9D :)',
                1000,
                'Được phát triển bởi Tlowng(longathelstan):3',
                500,
                'vào đây để làm gì ????',
                500,
                'tìm info của crush ak :)',
                2000,
                '© 9d.longathelstan.xyz, tlowng ft. toidicakhia All rights reserved.',
                1000
              ]}
              ></Typical>

            </span>
          </div>
          <div className="home-container16">
            <div className="home-container17">
              <span className="home-text105">
                <span>Về lớp chúng tớ</span>
                <br></br>
              </span>
              <span className="home-text108">
              <Typical
                  steps={[
                    'Vùng đất 9d chứa 18 cô công túa và 16 chàng quàng tử đã tạo thành một sự kết hợp hoàn hảo C₈H₁₁NO₂ (dopamine) + C₁₀H₁₂N₂O (seratonin) + C₄₃H₆₆N₁₃O₁₂S₂ "công thức hóa học của Tình yêu".',
                    1000,
                  ]}
                  loop={1}
                  wrapper="p"
                />
              </span>
            </div>
            <div className="home-container18">
              <span className="home-text109">
                <span>MXH của chúng tớ</span>
                <br></br>
              </span>
              <div className="home-container19">
                <a
                  href="https://www.instagram.com/d_k2125.nb/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-container20">
                    <div className="home-container21">
                      <img
                        alt="image"
                        src={insta200h}
                        className="home-image2"
                      />
                      <span className="home-text112">d_k2125.nb</span>
                    </div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="home-icon1"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@dk2125_nb"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <div className="home-container22">
                    <div className="home-container23">
                      <img
                        alt="image"
                        src={tik200w}
                        className="home-image3"
                      />
                      <span className="home-text113">dk2125_nb</span>
                    </div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      className="home-icon3"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-container24">
              <span className="home-text114">
                <span>Thành viên lớp chúng tớ</span>
                <br></br>
              </span>
            </div>
            <div className="home-container25">
              {/* Members component no longer needs individual text props */}
              <Members rootClassName="membersroot-class-name" />
            </div>
          </div>
        </div>
        <div className="home-container26"></div>
        <div className='avatar-and-status'>
        <img alt="image" src="https://cdn.discordapp.com/avatar-decoration-presets/a_3513b3b45624e47a4855f6951eea484d.png?size=600&passthrough=true" className='avatar_decorations'/>
        <img alt="image" src={nineDLny} className="home-image4" />
        <div className='thinking-indicator'/>
        <DiscordStatus/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
