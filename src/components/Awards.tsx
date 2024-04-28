// import React from 'react';
// import img from 'next/img';
import award_1 from '../assets/images/award_1.png';
import award_2 from '../assets/images/award_2.png';
import award_3 from '../assets/images/award_3.png';
import award_4 from '../assets/images/award_4.png';
import award_5 from '../assets/images/award_5.png';

const Awards = () => (
  <div className="awards-container" id="video">
    <div className="awards-container__inner-container">
      <iframe
        className="awards-container__video"
        src="https://www.youtube.com/embed/pyXyscYJjnE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="awards-container__awards">
        <div className="awards-container__award">
          <img
            className="awards-container__picture"
            src={award_1}
            alt="award 1"
          />
          <div className="awards-container__name">
            <div className="awards-container__header">
              <p>Reader Views:</p>
              <p>2009 Silver Award </p>
              <p>Winner</p>
            </div>
            <p className="awards-container__text">
              (Religion: Eastern/Western)
            </p>
          </div>
        </div>
        <div className="awards-container__award">
          <img
            className="awards-container__picture"
            src={award_2}
            alt="award 2"
          />
          <div className="awards-container__name">
            <div className="awards-container__header">
              <p>Pinnacle Achievement</p>
              <p>Award 2011 Best Book</p>
              <p>Winner</p>
            </div>
            <p className="awards-container__text">(Inspirational)</p>
          </div>
        </div>
        <div className="awards-container__award">
          <img
            className="awards-container__picture"
            src={award_3}
            alt="award 3"
          />
          <div className="awards-container__name">
            <div className="awards-container__header">
              <p>Readers Favorite:</p>
              <p>2010 Gold Medal </p>
              <p>Winner</p>
            </div>
            <p className="awards-container__text">(Christian-Devotion/Study)</p>
          </div>
        </div>
        <div className="awards-container__award">
          <img
            className="awards-container__picture"
            src={award_4}
            alt="award 4"
          />
          <div className="awards-container__name">
            <div className="awards-container__header">
              <p>The National Best Book Awards:</p>
              <p>2009 Best Book </p>
              <p>Finalist</p>
            </div>
            <p className="awards-container__text">(Prayer/Devotionals)</p>
          </div>
        </div>
        <div className="awards-container__award">
          <img
            className="awards-container__picture"
            src={award_5}
            alt="award 5"
          />
          <div className="awards-container__name">
            <div className="awards-container__header">
              <p> Premier Book Awards:</p>
              <p>2010 Best Book of the </p>
              <p>Year Winner</p>
            </div>
            <p className="awards-container__text">
              (Religion/Spirituality) by unanimous decision
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Awards;
