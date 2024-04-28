'use client';

import styled from 'styled-components';

interface DivProps {
  openMobileMenu: boolean;
}

const Div = styled.div<DivProps>`
  width: 1.8rem;
  height: 1.8rem;
  position: ${({ openMobileMenu }) => (openMobileMenu ? 'fixed' : 'static')};
  top: ${({ openMobileMenu }) => (openMobileMenu ? '2.8rem' : 'auto')};
  right: ${({ openMobileMenu }) => (openMobileMenu ? '3rem' : 'auto')};
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ openMobileMenu }) =>
      openMobileMenu ? '#333' : 'var(--color-black)'};
    // background-color var(--color-black);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ openMobileMenu }) =>
        openMobileMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    // &:nth-child(2) {
    //     transform: ${({ openMobileMenu }) =>
      openMobileMenu ? 'translateX(100%)' : 'translateX(0)'};
    //     opacity: ${({ openMobileMenu }) => (openMobileMenu ? 0 : 1)};
    // }

    &:nth-child(2) {
      transform: ${({ openMobileMenu }) =>
        openMobileMenu ? 'rotate(-45deg)' : 'rotate(0)'};
      position: relative;
      bottom: -4px;
    }
  }
`;

interface HamburgerProps {
  openMobileMenu: boolean;
  setOpenMobileMenu: (open: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({
  openMobileMenu,
  setOpenMobileMenu,
}) => {
  return (
    <Div
      className="pointer"
      openMobileMenu={openMobileMenu}
      onClick={() => {
        console.log('openMobileMenu =>', openMobileMenu);
        setOpenMobileMenu(!openMobileMenu);
      }}
    >
      <div />
      {/* <div /> */}
      <div />
    </Div>
  );
};

export default Hamburger;
