'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
// import Button from "./button"
// import PaypalButton from './paypal-button'
// import { Link } from 'gatsby-plugin-anchor-links';
interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="header">
      <nav className="mobile-nav">
        <Link href="/">
          <h1 className="mobile-nav__diana-webb">{siteTitle}</h1>
        </Link>
        <Hamburger
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
        <MobileMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </nav>
      <nav className="desktop-nav">
        <div className="desktop-nav__inner-container">
          <ul className="desktop-nav-list">
            <li>
              <Link className="desktop-nav-list__list-item-link" href="/">
                <h1 className="desktop-nav-list__list-item-header">
                  Diana Webb
                </h1>
              </Link>
            </li>
            <li className="desktop-nav-list__list-item">
              <Link className="desktop-nav-list__list-item-link" href="/#bio">
                <p className="desktop-nav-list__list-item-text">Bio</p>
              </Link>
            </li>
            <li className="desktop-nav-list__list-item">
              <Link
                className="desktop-nav-list__list-item-link"
                href="/excerpt/"
              >
                <p className="desktop-nav-list__list-item-text">
                  Read An Excerpt
                </p>
              </Link>
            </li>
            <li className="desktop-nav-list__list-item">
              <Link className="desktop-nav-list__list-item-link" href="/#video">
                <p className="desktop-nav-list__list-item-text">
                  Watch a Video
                </p>
              </Link>
            </li>
          </ul>
          <Link
            className="desktop-nav-list__list-item-text"
            href="/#book-order-id"
          >
            {/* <Button /> */}
            <div className="btn pointer">Order the Book</div>
            {/* Order the Book */}
          </Link>
          {/* <PaypalButton /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
