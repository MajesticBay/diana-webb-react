const Footer = () => (
  <footer>
    <div className="footer-mobile">
      <h3 className="footer-mobile__header">Diana Webb</h3>
      <p className="footer-mobile__text">
        © 2021 Diana Webb. All Rights Reserved.{' '}
      </p>{' '}
      {/* <p className="footer-mobile__text">
        <a className="footer-mobile__link" href="http://23rdsquad.us/">
          Website by 23rd Squad
        </a>
      </p> */}
    </div>

    <div className="footer-desktop">
      <h3 className="footer-desktop__header">Diana Webb</h3>
      <p className="footer-desktop__text">
        © 2021 Diana Webb. All Rights Reserved.{' '}
        {/* <a className="footer-desktop__link" href="http://23rdsquad.us/">
          Website by 23rd Squad
        </a> */}
      </p>
    </div>
  </footer>
);

export default Footer;
