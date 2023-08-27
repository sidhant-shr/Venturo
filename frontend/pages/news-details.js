import Link from "next/dist/client/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const NewsDetails = () => {
  return (
    <Layout>
      <PageBanner pageName="News Details" />
      <section className="blog-area section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-details">
                <div className="post-thumbnail">
                  <img src="assets/img/blog/blog-details.jpg" alt="Thumbnail" />
                </div>
                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="far fa-user-circle" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" />
                        28 Aug 2023
                      </a>
                    </li>
                  </ul>
                  <h3 className="title">
                    Steve Bannon, a $25M Border Wall Campaign, and a GoFundMe
                    Gone Bad
                  </h3>
                  <p>
                    The Department of Justice this morning unsealed indictments
                    alleging that Kolfage and Bannon, along with Andrew Badolato
                    and Timothy Shea, used the GoFundMe campaign to funnel
                    hundreds of thousands of dollars to themselves, rather than
                    directly to the construction of the wall as promised. Each
                    man is charged with one count of conspiracy to commit wire
                    fraud and one count of conspiracy to commit money
                    laundering. It’s the latest in a long string of alleged
                    crowdfunding scams, albeit with a much higher profile.
                  </p>
                  <blockquote>
                    <p>
                      Brian Barrett is Executive Editor, News at WIRED,
                      overseeing day to day coverage across the site. Prior to
                      WIRED he was the editor in chief of the tech and culture
                      site Gizmodo and was a business reporter for the Yomiuri
                      Shimbun, Japan’s largest daily newspaper
                    </p>
                    <cite>EXECUTIVE EDITOR, NEWS</cite>
                  </blockquote>
                  <p>
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour when our power of choice untrammelled and when
                    nothing prevents our being able to what we like best every
                    pleasure is to be welcomed and every pain avoided in certain
                    circumstances
                  </p>
                  <div className="post-footer mt-40">
                    <div className="row justify-content-between">
                      <div className="col-auto">
                        <div className="related-tags">
                          <span>Related Tags: </span>
                          <a href="#">agency</a>
                          <a href="#">funding</a>
                          <a href="#">donate</a>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="social-share">
                          <span>Share: </span>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="post-author">
                      <div className="author-img">
                        <img
                          src="assets/img/author-thumbs/post-author.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="name">Jeremy D. Schalk</h4>
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charms
                        </p>
                        <ul className="author-social-links mt-25">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-nav mt-50">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="post-nav-item prev-post">
                            <div className="thumb">
                              <img
                                src="assets/img/blog/prev-post.jpg"
                                alt="Image"
                              />
                              <i className="far fa-arrow-left" />
                            </div>
                            <div className="content">
                              <a href="#">Seamless Spreadshet Import Experience</a>
                              <span>
                                <i className="far fa-calendar-alt" /> 25 May
                                2023
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="post-nav-item next-post">
                            <div className="thumb">
                              <img
                                src="assets/img/blog/next-post.jpg"
                                alt="Image"
                              />
                              <i className="far fa-arrow-right" />
                            </div>
                            <div className="content">
                              <a href="#">Lessons Learned Big App Case Study</a>
                              <span>
                                <i className="far fa-calendar-alt" /> 25 May
                                2023
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comments-template">
                      <h4 className="template-title">Comments</h4>
                      <ul className="comments-list">
                        <li>
                          <div className="comment-body">
                            <div className="commentator-img">
                              <img
                                src="assets/img/author-thumbs/commet-01.jpg"
                                alt="Author"
                              />
                            </div>
                            <div className="comment-content">
                              <h5 className="commentator">Alice</h5>
                              <span className="date">28 Aug 2023</span>
                              <p>
                                It really seems crowdfunding could be used.
                
                              </p>
                              <a href="#" className="reply-link">
                                Reply <i className="far fa-long-arrow-right" />
                              </a>
                            </div>
                          </div>
                          <ul className="children">
                            <li>
                              <div className="comment-body">
                                <div className="commentator-img">
                                  <img
                                    src="assets/img/author-thumbs/commet-02.jpg"
                                    alt="Author"
                                  />
                                </div>
                                <div className="comment-content">
                                  <h5 className="commentator">
                                    Jef
                                  </h5>
                                  <span className="date">25 Aug 2023</span>
                                  <p>
                                   Really important info there!
                                  </p>
                                  <a href="#" className="reply-link">
                                    Reply{" "}
                                    <i className="far fa-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment-body">
                      
                            <div className="comment-content">
                              <h5 className="commentator">
                              </h5>
                              <span className="date"></span>
                              <p>
                               
                              </p>
                         
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="comment-form">
                        <h4 className="template-title">Leave A Message</h4>
                        <form onSubmit={(e) => e.preventDefault()} action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-field mb-20">
                                <input type="text" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-field mb-20">
                                <input
                                  type="text"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field mb-20">
                                <input type="text" placeholder="Website URL" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field mb-30">
                                <textarea
                                  placeholder="Write Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="input-field">
                                <button className="main-btn">
                                  Send Comments{" "}
                                  <i className="far fa-arrow-right" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget search-widget">
                  <h4 className="widget-title">Search Here</h4>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input type="text" placeholder="Keywoards" />
                    <button>
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget category-widget">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Business (5) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Construction (7) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Creative (9) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          International (2) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Management (5) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Technology (2) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-standard">
                        <a>
                          Uncategorized (3) <i className="far fa-angle-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget latest-blog-widget">
                  <h4 className="widget-title">Latest News</h4>
                  <ul>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/img/latest-news/widget-01.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="desc">
                        <h6>
                          <Link href="/news-details">
                            <a>Build Seamless Spreads Import Experience</a>
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          25 Aug 2023
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/img/latest-news/widget-02.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="desc">
                        <h6>
                          <Link href="/news-details">
                            <a>Creating Online Environ Work Well Older</a>
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          27 Aug 2023
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <img
                          src="assets/img/latest-news/widget-03.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="desc">
                        <h6>
                          <Link href="/news-details">
                            <a>Signs Website Feelore Haunted House</a>
                          </Link>
                        </h6>
                        <span className="date">
                          <i className="far fa-calendar-alt" />
                          26 Aug 2023
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget tags-widget">
                  <h4 className="widget-title">Popular Tags</h4>
                  <ul>
                    <li>
                      <Link href="/news-standard">Lawyer</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">Crowd</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">Funding</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">consultancy</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">Law farms</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">management</Link>
                    </li>
                    <li>
                      <Link href="/news-standard">planning</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget cta-widget">
                  <div className="cta-content">
                    <h4 className="title">
                      Get Free <br /> Consultations
                    </h4>
                    <span className="subtitle">Special advisors</span>
                    <p>Book Now!</p>
                    <a href="#" className="cta-button">
                      Get a Quote
                    </a>
                    <div className="cta-img">
                      <img src="assets/img/cta/cta-widget.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetails;
