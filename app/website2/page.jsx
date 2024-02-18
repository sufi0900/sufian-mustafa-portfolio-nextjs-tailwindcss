import React from "react";
import "./style.css";
const page = () => {
  return (
    <div>
      <div>
        <title>Hello World</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/swiper.min.css" />
        <link rel="stylesheet" href="style.css" />
        <div className="outer-container">
          <header className="site-header">
            <div className="top-header-bar">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 align-items-center flex">
                    <div className="header-bar-text d-none d-lg-block">
                      <p>Hello world, My name is Blanca</p>
                    </div>
                    <div className="header-bar-email d-none d-lg-block">
                      <a href="#">
                        <span
                          className="__cf_email__"
                          data-cfemail="f8bb97968c999b8c959db89d95999194d69b9795"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 justify-content-between justify-content-lg-end align-items-center flex">
                    <div className="header-bar-social d-none d-md-block">
                      <ul className="align-items-center flex">
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-bar-search d-none d-md-block">
                      <form>
                        <input type="search" placeholder="Search" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="site-branding flex-column align-items-center flex">
                    <h1 className="site-title">
                      <a href="index.html" rel="home">
                        Blanca
                      </a>
                    </h1>
                    <p className="site-description">Personal Blog</p>
                  </div>
                  <nav className="site-navigation">
                    <div className="hamburger-menu d-lg-none">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <ul className="flex-lg flex-lg-row justify-content-lg-center align-content-lg-center">
                      <li className="current-menu-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="#">features</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">blog</a>
                      </li>
                      <li>
                        <a href="#">about me</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                    <div className="header-bar-social d-md-none">
                      <ul className="justify-content-center align-items-center flex">
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header-bar-search d-md-none">
                      <form>
                        <input type="search" placeholder="Search" />
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="swiper-container hero-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="hero-content justify-content-center align-items-center flex-column flex">
                        <img src="images/slider.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="hero-content justify-content-center align-items-center flex-column flex">
                        <img src="images/slider.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="hero-content justify-content-center align-items-center flex-column flex">
                        <img src="images/slider.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                  <div className="swiper-button-next justify-content-center align-items-center flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27 44"
                      >
                        <path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z" />
                      </svg>
                    </span>
                  </div>
                  <div className="swiper-button-prev justify-content-center align-items-center flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 27 44"
                      >
                        <path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="offset-lg-9 col-12 col-lg-3">
                  <a href="#">
                    <div className="yt-subscribe">
                      <img
                        src="images/yt-subscribe.png"
                        alt="Youtube Subscribe"
                      />
                      <h3>Subscribe</h3>
                      <p>To my Youtube Channel</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-page container">
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="content-wrap">
                  <header className="entry-header">
                    <div className="posted-date">January 30, 2018</div>
                    <h2 className="entry-title">
                      Why I love Winter: A short story
                    </h2>
                    <div className="tags-links">
                      <a href="#">#winter</a>
                      <a href="#">#love</a>
                      <a href="#">#snow</a>
                      <a href="#">#january</a>
                    </div>
                  </header>
                  <figure className="featured-image">
                    <img src="images/1.jpg" alt="" />
                  </figure>
                  <div className="entry-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent vel tortor facilisis, volutpat nulla placerat,
                      tincidunt mi. Nullam vel orci dui. Suspendisse sit amet
                      laoreet neque. Fusce sagittis suscipit sem a consequat.
                      Proin nec interdum sem. Quisque in porttitor magna, a
                      imperdiet est.{" "}
                    </p>
                  </div>
                  <footer className="entry-footer flex-column flex-lg-row justify-content-between align-content-start align-lg-items-center flex">
                    <ul className="post-share align-items-center order-lg-1 order-3 flex">
                      <label>Share</label>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                    <a className="read-more order-2" href="#">
                      Read more
                    </a>
                    <div className="comments-count order-lg-3 order-1">
                      <a href="#">2 Comments</a>
                    </div>
                  </footer>
                </div>
                <div className="content-wrap">
                  <header className="entry-header">
                    <div className="posted-date">January 30, 2018</div>
                    <h2 className="entry-title">
                      Travel tips for nature loversy
                    </h2>
                    <div className="tags-links">
                      <a href="#">#winter</a>
                      <a href="#">#love</a>
                      <a href="#">#snow</a>
                      <a href="#">#january</a>
                    </div>
                  </header>
                  <figure className="featured-image">
                    <img src="images/2.jpg" alt="" />
                  </figure>
                  <div className="entry-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent vel tortor facilisis, volutpat nulla placerat,
                      tincidunt mi. Nullam vel orci dui. Suspendisse sit amet
                      laoreet neque. Fusce sagittis suscipit sem a consequat.
                      Proin nec interdum sem. Quisque in porttitor magna, a
                      imperdiet est.{" "}
                    </p>
                  </div>
                  <footer className="entry-footer flex-column flex-lg-row justify-content-between align-content-start align-lg-items-center flex">
                    <ul className="post-share align-items-center order-lg-1 order-3 flex">
                      <label>Share</label>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                    <a className="read-more order-2" href="#">
                      Read more
                    </a>
                    <div className="comments-count order-lg-3 order-1">
                      <a href="#">2 Comments</a>
                    </div>
                  </footer>
                </div>
                <div className="content-wrap">
                  <header className="entry-header">
                    <div className="posted-date">January 30, 2018</div>
                    <h2 className="entry-title">
                      How to get dress on a hiking trip
                    </h2>
                    <div className="tags-links">
                      <a href="#">#winter</a>
                      <a href="#">#love</a>
                      <a href="#">#snow</a>
                      <a href="#">#january</a>
                    </div>
                  </header>
                  <figure className="featured-image">
                    <img src="images/3.jpg" alt="" />
                  </figure>
                  <div className="entry-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent vel tortor facilisis, volutpat nulla placerat,
                      tincidunt mi. Nullam vel orci dui. Suspendisse sit amet
                      laoreet neque. Fusce sagittis suscipit sem a consequat.
                      Proin nec interdum sem. Quisque in porttitor magna, a
                      imperdiet est.{" "}
                    </p>
                  </div>
                  <footer className="entry-footer flex-column flex-lg-row justify-content-between align-content-start align-lg-items-center flex">
                    <ul className="post-share align-items-center order-lg-1 order-3 flex">
                      <label>Share</label>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                    <a className="read-more order-2" href="#">
                      Read more
                    </a>
                    <div className="comments-count order-lg-3 order-1">
                      <a href="#">2 Comments</a>
                    </div>
                  </footer>
                </div>
                <div className="pagination">
                  <ul className="align-items-center flex">
                    <li className="active">
                      <a href="#">01.</a>
                    </li>
                    <li>
                      <a href="#">02.</a>
                    </li>
                    <li>
                      <a href="#">03.</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="sidebar">
                  <div className="about-me">
                    <h2>I’m Amelia Smith</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent vel tortor facilisis, volutpat nulla placerat,
                      tincidunt mi. Nullam vel orci dui. Suspendisse sit amet
                      laoreet neque. Fusce sagittis suscipit sem a consequat.
                      Proin nec interdum sem. Quisque in porttitor magna.
                    </p>
                  </div>
                  <div className="recent-posts">
                    <div className="recent-post-wrap">
                      <figure>
                        <img src="images/thumb-1.jpg" alt="" />
                      </figure>
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">My fall in love story</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                    </div>
                    <div className="recent-post-wrap">
                      <figure>
                        <img src="images/thumb-2.jpg" alt="" />
                      </figure>
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">My fall in love story</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                    </div>
                    <div className="recent-post-wrap">
                      <figure>
                        <img src="images/thumb-3.jpg" alt="" />
                      </figure>
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">My fall in love story</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                    </div>
                    <div className="recent-post-wrap">
                      <figure>
                        <img src="images/thumb-4.jpg" alt="" />
                      </figure>
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">My fall in love story</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                    </div>
                  </div>
                  <div className="tags-list">
                    <a href="#">Music</a>
                    <a href="#">Love</a>
                    <a href="#">Car</a>
                    <a href="#">Stories</a>
                    <a href="#">Photography</a>
                    <a href="#">Music</a>
                    <a href="#">Car</a>
                  </div>
                  <div className="sidebar-ads">
                    <img src="images/ads.jpg" alt="ads" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="sit-footer">
          <div className="outer-container">
            <div className="container-fluid">
              <div className="row footer-recent-posts">
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-post-wrap justify-content-between flex">
                    <figure>
                      <a href="#">
                        <img src="images/foot-1.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="footer-post-cont flex-column justify-content-between flex">
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">My fall in love story</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                      <footer className="entry-footer">
                        <a className="read-more" href="#">
                          read more
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-post-wrap justify-content-between flex">
                    <figure>
                      <a href="#">
                        <img src="images/foot-2.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="footer-post-cont flex-column justify-content-between flex">
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">Man’s best friend</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                      <footer className="entry-footer">
                        <a className="read-more" href="#">
                          read more
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-post-wrap justify-content-between flex">
                    <figure>
                      <a href="#">
                        <img src="images/foot-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="footer-post-cont flex-column justify-content-between flex">
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">Writing on a budget</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                      <footer className="entry-footer">
                        <a className="read-more" href="#">
                          read more
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="footer-post-wrap justify-content-between flex">
                    <figure>
                      <a href="#">
                        <img src="images/foot-4.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="footer-post-cont flex-column justify-content-between flex">
                      <header className="entry-header">
                        <div className="posted-date">January 30, 2018</div>
                        <h3>
                          <a href="#">My fall in love story</a>
                        </h3>
                        <div className="tags-links">
                          <a href="#">#winter</a>
                          <a href="#">#love</a>
                          <a href="#">#snow</a>
                          <a href="#">#january</a>
                        </div>
                      </header>
                      <footer className="entry-footer">
                        <a className="read-more" href="#">
                          read more
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="footer-instagram flex-lg-nowrap flex flex-wrap">
                <figure>
                  <a href="#">
                    <img src="images/a.jpg" alt="" />
                  </a>
                </figure>
                <figure>
                  <a href="#">
                    <img src="images/b.jpg" alt="" />
                  </a>
                </figure>
                <figure>
                  <a href="#">
                    <img src="images/c.jpg" alt="" />
                  </a>
                </figure>
                <figure>
                  <a href="#">
                    <img src="images/d.jpg" alt="" />
                  </a>
                </figure>
                <figure>
                  <a href="#">
                    <img src="images/e.jpg" alt="" />
                  </a>
                </figure>
                <figure>
                  <a href="#">
                    <img src="images/f.jpg" alt="" />
                  </a>
                </figure>
                <figure>
                  <a href="#">
                    <img src="images/g.jpg" alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="footer-bar">
            <div className="outer-container">
              <div className="container-fluid">
                <div className="row justify-content-between">
                  <div className="col-12 col-md-6">
                    <div className="footer-copyright">
                      <p>
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart-o" aria-hidden="true" />{" "}
                        by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="footer-social">
                      <ul className="justify-content-center justify-content-md-end align-items-center flex">
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
