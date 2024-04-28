// import React from "react";
// import { useState } from "react"
// import img from "next/image";
import book from '../assets/images/book3d.png';
// import Button from "./button"
// import BookOrderPopup from './book-order-popup'

// interface TopScreenProps {
//   openPopup: boolean;
//   setOpenPopup: (open: boolean) => void;
// }

// const TopScreen: React.FC<TopScreenProps> = ({ openPopup, setOpenPopup }) => {
// const [openPopup, setOpenPopup] = useState(false)
const TopScreen = () => {
  return (
    <div className="top-screen">
      <div className="top-screen__inner-container">
        <div className="top-screen__left">
          <p className="top-screen__hello">Hello, my name is Diana</p>
          <p className="top-screen__author-of-the-book">Author</p>
          <p className="top-screen__author-of-the-book">of the Book</p>
          <p className="top-screen__book-title--top">The Butterfly </p>
          <p className="top-screen__book-title--bottom">Cometh</p>
          <div className="top-screen__order-btn-container">
            {/* <button
              onClick={() => setOpenPopup(!openPopup)}
              className="top-screen__order-btn btn pointer"
            >
              Order the Book
            </button> */}
            <button className="top-screen__order-btn btn pointer">
              Order the Book
            </button>
            {/* <button className="top-screen__order-btn btn pointer">
            Order the Book
          </button> */}
          </div>
          <div className="top-screen__contact-btn-container">
            <a href="mailto:mail@gmail.com">
              <button className="top-screen__contact-btn btn pointer">
                Contact me
              </button>
            </a>
          </div>
        </div>
        <div className="top-screen__right">
          <img className="top-screen__book-image" src={book} alt="book" />
        </div>
        {/* <BookOrderPopup openPopup={openPopup} setOpenPopup={setOpenPopup} /> */}
      </div>
    </div>
  );
};

export default TopScreen;
