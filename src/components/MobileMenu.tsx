'use client';

import { Link } from 'react-router-dom';
// import {useEffect} from "react"
import styled from 'styled-components';
// import { Link } from 'gatsby';
// import { AnchorLink } from "gatsby-plugin-anchor-links"

interface UlProps {
  openMobileMenu: boolean;
}

const Ul = styled.ul<UlProps>`
  width: 100%;
  height: 101vh;
  display: ${({ openMobileMenu }) => (openMobileMenu ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  // gap: 6.3rem;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: var(--color-primary);
  padding-top: 12rem;
  font-size: 2.9rem;
  font-weight: normal;
  list-style: none;

  li {
    text-decoration: underline;
  }

  li:not(:last-child) {
    margin-bottom: 6.3rem;
  }

  & p {
    color: var(--color-black);
  }

  & a {
    color var(--color-black);
  }
`;

interface MobileMenuProps {
  openMobileMenu: boolean;
  setOpenMobileMenu: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  openMobileMenu,
  setOpenMobileMenu,
}) => {
  // useEffect(() => {
  //   console.log(props.location);
  // }, [props]);

  return (
    <Ul openMobileMenu={openMobileMenu}>
      <li>
        <Link to="/" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          Home
        </Link>
      </li>
      <li>
        <a href="#bio" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          <p className="desktop-nav-list__list-item-text">Bio</p>
        </a>
      </li>
      <li>
        <Link
          to="/excerpt"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          Read an Excerpt
        </Link>
      </li>
      <li>
        {/* <AnchorLink to="/#video">
          <p className="desktop-nav-list__list-item-text">Watch a Video</p>
        </AnchorLink> */}
        <a href="#video" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          <p className="desktop-nav-list__list-item-text">Watch a Video</p>
        </a>
      </li>
      <a
        href="mailto:john@example.com"
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      >
        <li>Contact Me</li>
      </a>
    </Ul>
  );
};

export default MobileMenu;
