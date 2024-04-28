// import React from 'react';
// import { useState } from "react"
import Button from './Button';
// import BookOrderPopup from './book-order-popup'
// import img from 'next/img';
import book_1 from '../assets/images/book_1.png';
import award_1 from '../assets/images/award_1.png';
import award_2 from '../assets/images/award_2.png';
import award_3 from '../assets/images/award_3.png';
import award_4 from '../assets/images/award_4.png';
import award_5 from '../assets/images/award_5.png';

// import book_1 from '../../public/book_1.png';

// const BookOrder = ({ orderRef, openPopup, setOpenPopup }) => {
const BookOrder = () => {
  return (
    // <div className="book-order" id="book-order-id" ref={orderRef}>
    <div className="book-order" id="book-order-id">
      <div className="book-order__inner-container">
        <img className="book-order__photo" src={book_1} alt="book" />
        <div className="book-order__text">
          <h1 className="book-order__header">
            The Butterfly Cometh offers powerful insight into putting the color
            back into life
          </h1>
          <div className="book-order__awards-small-icons">
            <img
              className="book-order__awards-small-icon-1"
              src={award_1}
              alt="award 1"
            />
            <img
              className="book-order__awards-small-icon-2"
              src={award_2}
              alt="award 2"
            />
            <img
              className="book-order__awards-small-icon-3"
              src={award_3}
              alt="award 3"
            />
            <img
              className="book-order__awards-small-icon-4"
              src={award_4}
              alt="award 4"
            />
            <img
              className="book-order__awards-small-icon-5"
              src={award_5}
              alt="award 5"
            />
          </div>
          <p className="book-order__paypal">
            {/* <a className="book-order__link" href="http:localhost:3000">
              Order the Book{" "}
            </a> */}
            {/* <span
              onClick={() => setOpenPopup(!openPopup)}
              className="book-order__link"
            >
              Order the Book{' '}
            </span> */}
            <span className="book-order__link">Order the Book </span>
            with Autographed Copy From the Author
          </p>
          <div className="book-order__paypal-desktop">
            {/* <Button openPopup={openPopup} setOpenPopup={setOpenPopup} /> */}
            <Button />
            {/* <button className="btn pointer" onClick={() => {
              console.log("openPopup => ", openPopup);
              setOpenPopup(!openPopup)
            }}>Order the Book</button> */}
            <div className="book-order__paypal-desktop__text">
              <p>Autographed Copy</p>
              <p>From the Author</p>
            </div>
          </div>
          <div className="book-order__links">
            <p className="book-order__link-text">
              Or buy the Book on{' '}
              <a
                className="book-order__link"
                target="_blank"
                rel="noreferrer"
                href="https://www.amazon.com/Butterfly-Cometh-Putting-Color-Back/dp/1432728970/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1616022304&sr=8-1"
              >
                Amazon
              </a>{' '}
              :{' '}
              <a
                className="book-order__link"
                target="_blank"
                rel="noreferrer"
                href="https://www.barnesandnoble.com/w/the-butterfly-cometh-diana-webb/1113552490?ean=9781432728977"
              >
                Barnes & Noble
              </a>{' '}
              :{' '}
              <a
                className="book-order__link"
                target="_blank"
                rel="noreferrer"
                href="https://www.amazon.com/Butterfly-Cometh-Putting-Color-Back-ebook/dp/B004Q9TYO4"
              >
                Kindle
              </a>{' '}
              :{' '}
              <a
                className="book-order__link"
                target="_blank"
                rel="noreferrer"
                href="https://www.barnesandnoble.com/w/the-butterfly-cometh-diana-webb/1113552490;jsessionid=7E398FE3EE8C64F270A12F1B1D769132.prodny_store02-atgap16?ean=2940012275400"
              >
                Nook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOrder;
