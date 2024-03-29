import React from "react";
import { Link } from "gatsby";
// import { ThemeToggler } from "gatsby-plugin-dark-mode";
import FooterSocialIcons from "./footer-social-icons";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let headerSiteText;

  if (isRootPath) {
    headerSiteText = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    headerSiteText = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    // <ThemeToggler>
    //   {({ theme, toggleTheme }) => (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {headerSiteText}
        <div className="header-actions">
          <Link className="header-nav-link" to="/pages/about/">
            About
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="d-flex">
        <div className="copyright-text">
          Copyright © {new Date().getFullYear()},
          Template by &nbsp;
          <a href="http://abhaynikam.me/" target="_blank">Abhay Nikam</a>
        </div>
        <div className="footer-icon-group">
          <FooterSocialIcons />
        </div>
      </footer>
    </div>
    //   )}
    // </ThemeToggler>
  );
}

export default Layout
