import React, { Fragment, useEffect, useRef} from 'react'
import { Helmet } from 'react-helmet'
import MediaQuery from 'react-responsive'
import Typical from 'react-typical'

import FallingFlowers from '../components/fallingflower'
import Members from '../components/members'

import DiscordStatus from '../components/discordstatus'
import Firework from '../components/firework'
import AudioPlayer from '../components/audio'
import Background from '../components/background'
import ViewCounter from '../components/viewcounter'

import './home.css'

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
    const audioElement = document.querySelector('.myAudio');
    if (audioElement) {
      audioElement.play();
    }
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
      <ViewCounter ref={viewCounterRef} pageId="homepage" /> 
    <div className="home-container10">
      <Helmet>
        <title>9D K21-25 NB</title>
        <meta property="og:title" content="9D K21-25 NB" />
      </Helmet>
      <FallingFlowers/>
      <Firework/>
      <div className="preload" onClick={() => {
        handlePreloadClick();
        viewCounterRef.current.handleIncrementView();
      }}>
        <div className="text">ai mời...</div>
      </div>
      <AudioPlayer />
      <div className="home-container11">
        <div className="home-container12">
        
        <MediaQuery minWidth={768}>
          <img
            alt="image"
            src="/banner_large.webp"
            className="home-image1"
          />
        </MediaQuery>
        <MediaQuery maxWidth={767} minWidth={480}>
            <img
            alt="image"
            src="/banner_medium.webp"
            className="home-image1"
            />
        </MediaQuery>
        <MediaQuery maxWidth={479}>
          <img
          alt="image"
          src="/banner_small.webp"
          className="home-image1"
          />
        </MediaQuery>
        </div>
        <div className="home-container13">
          <span className="home-text100">9D K21-25 NB</span>
          <span className="home-text101">
            <span>34 bé</span>
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
                        src="/insta-200h.webp"
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
                        src="/tik-200w.webp"
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
              <Members
                text2={
                  <Fragment>
                    <span className="home-text117">
                      <span>Lớp trưởng</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="home-text120">Website owner</span>
                  </Fragment>
                }
                text4={
                  <Fragment>
                    <span className="home-text121">Quỳnh Nhi</span>
                  </Fragment>
                }
                text5={
                  <Fragment>
                    <span className="home-text122">Việt Anh</span>
                  </Fragment>
                }
                text21={
                  <Fragment>
                    <span className="home-text123">
                      <span>Website owner</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text22={
                  <Fragment>
                    <span className="home-text126">
                      <span>Quàng Tử</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text31={
                  <Fragment>
                    <span className="home-text129">Công Túa</span>
                  </Fragment>
                }
                text41={
                  <Fragment>
                    <span className="home-text130">Thăng Long</span>
                  </Fragment>
                }
                text42={
                  <Fragment>
                    <span className="home-text131">
                      <span>Đức Anh</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text51={
                  <Fragment>
                    <span className="home-text134">
                      <span>Diệp Chi</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text421={
                  <Fragment>
                    <span className="home-text137">
                      <span>Vũ Nguyên</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text422={
                  <Fragment>
                    <span className="home-text140">
                      <span>Hoài Nam</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text423={
                  <Fragment>
                    <span className="home-text143">
                      <span>Bảo Nam</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text424={
                  <Fragment>
                    <span className="home-text146">
                      <span>Quốc Khánh</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text425={
                  <Fragment>
                    <span className="home-text149">
                      <span>Đức Huy</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text426={
                  <Fragment>
                    <span className="home-text152">
                      <span>Tuấn Dũng</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text427={
                  <Fragment>
                    <span className="home-text155">
                      <span>Anh Dũng</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text428={
                  <Fragment>
                    <span className="home-text158">
                      <span>Lâm Dũng</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text429={
                  <Fragment>
                    <span className="home-text161">
                      <span>Xuân Bình</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text511={
                  <Fragment>
                    <span className="home-text164">
                      <span>Thuỳ Dương</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text512={
                  <Fragment>
                    <span className="home-text167">
                      <span>Minh Giang</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text513={
                  <Fragment>
                    <span className="home-text170">
                      <span>Thu Hiền</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text514={
                  <Fragment>
                    <span className="home-text173">
                      <span>Khánh Huyền</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text515={
                  <Fragment>
                    <span className="home-text176">
                      <span>Bảo Thi</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text516={
                  <Fragment>
                    <span className="home-text179">
                      <span>Hà Linh</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text517={
                  <Fragment>
                    <span className="home-text182">
                      <span>Hoàng Linh</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text518={
                  <Fragment>
                    <span className="home-text185">
                      <span>Diệu Linh</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text519={
                  <Fragment>
                    <span className="home-text188">
                      <span>Kim Ngân</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text4210={
                  <Fragment>
                    <span className="home-text191">
                      <span>Tống Bảo</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text4211={
                  <Fragment>
                    <span className="home-text194">
                      <span>Lê Bảo</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text4212={
                  <Fragment>
                    <span className="home-text197">
                      <span>Chí Thành</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text4213={
                  <Fragment>
                    <span className="home-text200">
                      <span>Tuấn Việt</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5110={
                  <Fragment>
                    <span className="home-text203">
                      <span>Thảo Như</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5111={
                  <Fragment>
                    <span className="home-text206">
                      <span>Lan Phương</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5112={
                  <Fragment>
                    <span className="home-text209">
                      <span>Mai Quyên</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5113={
                  <Fragment>
                    <span className="home-text212">
                      <span>Huyền Tâm</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5114={
                  <Fragment>
                    <span className="home-text215">
                      <span>Hồng Thắm</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5115={
                  <Fragment>
                    <span className="home-text218">
                      <span>Khánh Linh</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                text5116={
                  <Fragment>
                    <span className="home-text219">
                      <span>Thảo Vy</span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                rootClassName="membersroot-class-name"
              ></Members>
            </div>
          </div>
        </div>
        <div className="home-container26"></div>
        <div className='avatar-and-status'>
        <img alt="image" src="/logo-200h.webp" className="home-image4" />
        <div className='thinking-indicator'/>
        <DiscordStatus/>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Home
