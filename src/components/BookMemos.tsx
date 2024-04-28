// import React from 'react';
// import Button from "./button"
// import PaypalButton from './paypal-button'
import avatar from '../assets/images/avatar.png';
// import Image from 'next/image';

// const BookMemos = ({ handleScroll }) => (
const BookMemos = () => (
  <div className="book-memos">
    <div className="book-memos__inner-container">
      <div className="book-memos__column-top">
        <div className="book-memos__questions">
          <p className="book-memos__question">
            Do you harbor dark secrets and painful memories?
          </p>
          <p className="book-memos__question">
            Do you want to see all of life&apos;s radiant colors?
          </p>
          <p className="book-memos__question">
            Find peace in being your natural self. Attain a tranquil existence!
          </p>
        </div>
        <div className="book-memos__avatar-container">
          <div className="book-memos__avatar">
            <img
              className="book-memos__avatar-image"
              src={avatar}
              alt="avatar"
            />
            <div className="book-memos__avatar-white-rectangle"></div>
          </div>
        </div>
      </div>
      <div className="book-memos__column-bottom">
        {/* <PaypalButton /> */}
        {/* <Button/> */}
        {/* <button onClick={handleScroll} className="btn pointer">
          Order the Book
        </button> */}
        <button className="btn pointer">Order the Book</button>
      </div>
    </div>
  </div>
);

export default BookMemos;
