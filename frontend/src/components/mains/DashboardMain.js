import React from "react";

const DashboardMain = () => {
  return (
    <main class="page-main">
      <div class="page-content">
        <div class="uk-section-large uk-container dashboard-banner">
          <div class="uk-grid uk-grid-medium" data-uk-grid>
            <div class="uk-width-2-3@m">
              <article class="article-full">
                <div class="article-full__head">
                  <h4 class="article-full__title">
                    <i>Welcome</i>, Ben Jason
                  </h4>
                </div>
                <div class="article-full__image shine" data-uk-lightbox>
                  <a href="assets/images/img-21.jpg">
                    <img src="assets/images/img-21.jpg" alt="img-article" />
                  </a>
                </div>
                <div class="uk-margin-medium-top article-full__content">
                  <p>
                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.
                  </p>
                  <p>
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.{" "}
                  </p>
                  <blockquote>
                    <p>
                      It was indeed very good and fantastic to dine here and
                      stay. The atmosphere was electrifying. Prices were also
                      very reasonable, service was awesome!
                    </p>
                    <div class="user">
                      {" "}
                      <strong>Mark Dennis</strong>
                      <span>Chief Executive</span>
                    </div>
                  </blockquote>
                </div>
              </article>
            </div>
            <div class="uk-width-1-3@m">
              <div class="article-full__info dashboard-article">
                <div class="article-full__author">
                  <i class="icon-user"></i>
                  <a href="09_blog-post.html">Ben Jason</a>
                </div>
                <div class="article-full__date">
                  <i class="icon-calendar"></i>
                  <span>July 31, 2020</span>
                </div>
              </div>
              <aside class="sidebar">
                <div class="widjet widjet-category">
                  <h4 class="widjet__title">Categories</h4>
                  <ul class="list-category list-checked">
                    <li>
                      {" "}
                      <a href="08_blog-grid.html">
                        <span>Traveling</span>
                        <span>(87)</span>
                      </a>
                    </li>
                    <li class="uk-active">
                      <a href="08_blog-grid.html">
                        <span>Restaurants</span>
                        <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="08_blog-grid.html">
                        <span>Break & Vacations</span>
                        <span>(34)</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="08_blog-grid.html">
                        <span>Promote Business</span>
                        <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="08_blog-grid.html">
                        <span>World Cities</span>
                        <span>(50)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="widjet widjet-tags-cloud">
                  <h4 class="widjet__title">Popular Tags</h4>
                  <ul class="tags-list">
                    <li>
                      <a href="#!">Destinations</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#!">Stay Safe</a>
                    </li>
                    <li>
                      <a href="#!">Food & Drink</a>
                    </li>
                    <li>
                      <a href="#!">Travel</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#!">Life Style</a>
                    </li>
                    <li>
                      <a href="#!">Marketing</a>
                    </li>
                    <li>
                      <a href="#!">Restaurants & Hotels</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
