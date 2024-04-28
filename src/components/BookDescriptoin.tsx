import React from 'react';
// import { useRef } from "react"
// import Button from "./button"
// import PaypalButton from "./paypal-button"

// const BookDescription = ({ handleScroll }) => {
const BookDescription = () => {
  return (
    <div className="book-description">
      <div className="book-description__text" id="order">
        The book is a 171-day journey about being grateful in the gifts God gave
        us. It is a reflective odyssey into peeling back the onion layers of
        one’s life and seeing the true self. Life is about making things nicer
        for others. It is not about self anymore, nor is it about how many
        Benjamins we have in the bank. It is about how we love and how well we
        love in this world and whether we believe the sacrifice at Calvary was
        good enough. It is about how we labor in the vineyard of the purpose for
        which we were created.
      </div>
      <h1 className="book-description__header">
        In her book, author Diana Webb takes us on a unique sojourn during which
        the readeris encouraged to:{' '}
      </h1>
      <div className="book-description__points">
        <div className="book-description__points__column">
          <div className="book-description__point">
            <div className="book-description__scale--1"> </div>
            <div className="book-description__point-text">
              Moisturize the soul
            </div>
          </div>
          <div className="book-description__point">
            <div className="book-description__scale--2"> </div>
            <div className="book-description__point-text">Mend a hurt</div>
          </div>
          <div className="book-description__point">
            <div className="book-description__scale--3"> </div>
            <div className="book-description__point-text">
              Travel without so much baggage
            </div>
          </div>
        </div>
        <div className="book-description__points__column">
          <div className="book-description__point">
            <div className="book-description__scale--4"> </div>
            <div className="book-description__point-text">Rejuvenate</div>
          </div>
          <div className="book-description__point">
            <div className="book-description__scale--5"> </div>
            <div className="book-description__point-text">
              Appreciate the little things
            </div>
          </div>
          <div className="book-description__point">
            <div className="book-description__scale--6"> </div>
            <div className="book-description__point-text">
              Sleep in serenity
            </div>
          </div>
        </div>
      </div>
      {/* <PaypalButton /> */}
      <div className="book-description__order-btn">
        {/* <a href="#order"> */}
        {/* <button onClick={handleScroll} className="btn pointer">
          Order the Book
        </button> */}
        <button className="btn pointer">Order the Book</button>
        {/* <div className="btn pointer">Order the Book</div> */}
        {/* </a> */}
      </div>
      {/* <button onClick={handleScroll}>test scroll</button> */}
    </div>
  );
};

export default BookDescription;
