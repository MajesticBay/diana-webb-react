import React from 'react';
import styled from 'styled-components';
import PaypalButton from './paypal-button';

const PopupBackground = styled.div`
  position: fixed;
  z-index: 501;
  top: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  display: ${({ openPopup }) => (openPopup ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  // background: rgb(207, 215, 223, 0.8);
  background: rgb(53, 53, 53, 0.8);
`;

// const Text = styled.p`
//   font-size: 2rem;
//   text-align: center;
//   margin-bottom: 2rem;
// `;

const Popup = styled.div`
  pointer-events: auto;
  min-width: 700px;
  padding: 2rem 6rem;
  background-color: rgb(207, 215, 223);
  border-radius: 5px;

  @media (max-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 500px) {
    min-width: 300px;
  }
`;

const PopupContainer = styled.div`
  display: ${({ openPopup }) => (openPopup ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  top: 0;
  z-index: 510;
  pointer-events: none;
`;

// const CloseButton = styled.button`
//   // position: absolute;
//   top: 5px;
//   right: 5px;
//   background: transparent;
//   border: none;
//   color: #333;
//   font-size: 28px;

//   &:hover {
//     color: #000;
//   }
// `;

const BookOrderPopup = ({ openPopup, setOpenPopup }) => {
  return (
    <>
      <PopupBackground
        onClick={() => {
          console.log('onClick back');
          setOpenPopup(false);
        }}
        openPopup={openPopup}
      >
        <PopupContainer openPopup={openPopup}>
          {/* <CloseButton onClick={() => setOpenPopup(!openPopup)}>×</CloseButton> */}
          <Popup>
            <p>Buy the book with an autograph from Diana</p>
            <PaypalButton />
          </Popup>
        </PopupContainer>
      </PopupBackground>
    </>
  );
};

export default BookOrderPopup;
