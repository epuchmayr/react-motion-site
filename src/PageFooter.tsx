import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import { PageFooterProps } from './App';

export default function PageFooter({ handleInView }: PageFooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      handleInView(7);
    }
  }, [isInView, handleInView]);

  return (
    <>
      <div className='pageFooterWrapper'>
        <footer ref={ref} id='section7' className='pageFooter'>
          <div className='contentWrapper'>
          <div id='lower-menu' className='container-xl pt-md-4'>
            {/* <h2 className="sr-only white">Footer</h2> */}
            <div className='row'>
              <div className='footerLogo'>
                <a href='/' title='Go to home page' className='navbar-brand'>
                  <img
                    src='../images/logos/lighthouse_full_color.png'
                    className='img-fluid'
                    alt='Bumble Bee Seafoods logo'
                  />
                </a>
              </div>
              <div className='col-6 col-md-3 mb-3'>
                <nav aria-label='Footer menu for products'>
                  <div
                    id='nav_menu-4'
                    className='footer-widget widget_nav_menu'
                  >
                    <h3 className='widgettitle h2'>Product</h3>
                    <div className='menu-footer-menu-product-container'>
                      <ul id='menu-footer-menu-product' className='menu'>
                        <li
                          id='menu-item-161'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-161'
                        >
                          <a href='https://www.bumblebee.com/products/'>
                            View Products
                          </a>
                        </li>
                        <li
                          id='menu-item-162'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-162'
                        >
                          <a href='https://www.bumblebee.com/recipes/'>
                            Recipes
                          </a>
                        </li>
                        <li
                          id='menu-item-1953'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1953'
                        >
                          <a href='https://www.bumblebee.com/tracemycatch1/'>
                            Trace My Catch
                          </a>
                        </li>
                        <li
                          id='menu-item-160'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-160'
                        >
                          <a href='https://www.bumblebee.com/contact/'>
                            Contact Us
                          </a>
                        </li>
                        <li
                          id='menu-item-1241'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1241'
                        >
                          <a href='https://www.bumblebee.com/bee-well-for-life/'>
                            Bee Well For Life<sup>®</sup>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className='col-6 col-md-3 mb-3'>
                <nav aria-label='Footer menu regarding the company'>
                  <div
                    id='nav_menu-3'
                    className='footer-widget widget_nav_menu'
                  >
                    <h3 className='widgettitle h2'>Company</h3>
                    <div className='menu-footer-menu-company-container'>
                      <ul id='menu-footer-menu-company' className='menu'>
                        <li
                          id='menu-item-163'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-163'
                        >
                          <a href='https://www.bumblebee.com/about/'>
                            About Us
                          </a>
                        </li>
                        <li
                          id='menu-item-165'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-165'
                        >
                          <a href='https://www.bumblebee.com/sustainability/'>
                            Sustainability
                          </a>
                        </li>
                        <li
                          id='menu-item-1084'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1084'
                        >
                          <a href='https://www.bumblebee.com/where-to-buy/'>
                            Where to Buy
                          </a>
                        </li>
                        <li
                          id='menu-item-164'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-164'
                        >
                          <a href='https://www.bumblebee.com/faqs/'>FAQ</a>
                        </li>
                        <li
                          id='menu-item-1113'
                          className='menu-item menu-item-type-custom menu-item-object-custom menu-item-1113'
                        >
                          <a
                            target='_blank'
                            rel='noopener'
                            href='https://thebumblebeecompany.com/job-listings/'
                          >
                            Careers
                          </a>
                        </li>
                        <li
                          id='menu-item-2280'
                          className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2280'
                        >
                          <a href='https://www.bumblebee.com/accessibility/'>
                            Accessibility
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className='ccol-12 col-md-3 mb-3 '>
                <h3 className='widgettitle h2'>Follow Us</h3>
                <ul
                  className='text-center text-md-left list-unstyled'
                  aria-label='Social media links'
                >
                  <li
                    id='social_icons-2'
                    className='footer-widget social-icons'
                  >
                    <a
                      href='https://www.facebook.com/BumbleBeeSeafoods'
                      rel='noopener noreferrer'
                      aria-label='Facebook'
                      title='Facebook'
                    >
                      {' '}
                      <i
                        className='fab fa-facebook'
                        role='presentation'
                        aria-hidden='true'
                      ></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li
                    id='social_icons-3'
                    className='footer-widget social-icons'
                  >
                    <a
                      href='https://www.pinterest.com/bumblebeefoods/'
                      rel='noopener noreferrer'
                      aria-label='Pinterest'
                      title='Pinterest'
                    >
                      {' '}
                      <i
                        className='fab fa-pinterest'
                        role='presentation'
                        aria-hidden='true'
                      ></i>
                      <span>Pinterest</span>
                    </a>
                  </li>
                  <li
                    id='social_icons-4'
                    className='footer-widget social-icons'
                  >
                    <a
                      href='https://www.instagram.com/bumblebeefoods/'
                      rel='noopener noreferrer'
                      aria-label='Instagram'
                      title='Instagram'
                    >
                      {' '}
                      <i
                        className='fab fa-instagram'
                        role='presentation'
                        aria-hidden='true'
                      ></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li
                    id='social_icons-5'
                    className='footer-widget social-icons'
                  >
                    <a
                      href='https://twitter.com/BumbleBeeFoods'
                      rel='noopener noreferrer'
                      aria-label='Twitter'
                      title='Twitter'
                    >
                      {' '}
                      <i
                        className='fab fa-twitter'
                        role='presentation'
                        aria-hidden='true'
                      ></i>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li
                    id='social_icons-6'
                    className='footer-widget social-icons'
                  >
                    <a
                      href='https://www.tiktok.com/@bumblebeefoods'
                      rel='noopener noreferrer'
                      aria-label='TikTok'
                      title='TikTok'
                    >
                      {' '}
                      <i
                        className='fab fa-tiktok'
                        role='presentation'
                        aria-hidden='true'
                      ></i>
                      <span>TikTok</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id='legal'>
            <div>
              © 2024 Bumble Bee Foods, LLC. <span>All rights reserved</span>
            </div>
            <div>
                <nav
                  id='footer-menu-legal'
                  className='menu-footer-menu-container'
                >
                  <ul
                    id='menu-footer-menu'
                    className='menu d-flex flex-column  flex-md-row  justify-content-md-start '
                  >
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-1919'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1919 nav-item'
                    >
                      <a
                        title='Accessibility'
                        href='https://www.bumblebee.com/accessibility/'
                        className='nav-link'
                      >
                        <span>Accessibility</span>
                      </a>
                    </li>
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-166'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-166 nav-item'
                    >
                      <a
                        title='Privacy Policy'
                        href='https://www.bumblebee.com/privacy-policy/'
                        className='nav-link'
                      >
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-2261'
                      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-2261 nav-item'
                    >
                      <a
                        title='Supplier Code of Conduct'
                        target='_blank'
                        href='https://www.bumblebee.com/wp-content/uploads/2023/11/Bumble-Bee-Seafood-Company-Supplier-Code-of-Conduct.pdf'
                        className='nav-link'
                      >
                        <span>Supplier Code of Conduct</span>
                      </a>
                    </li>
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-2263'
                      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-2263 nav-item'
                    >
                      <a
                        title='CA Transparency in Supply Chains Act'
                        target='_blank'
                        href='https://www.bumblebee.com/wp-content/uploads/2023/11/Bumble-Bee-Seafood-Company-California-Transparency-in-Supply-Chains-Act-of-2010.pdf'
                        className='nav-link'
                      >
                        <span>CA Transparency in Supply Chains Act</span>
                      </a>
                    </li>
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-169'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-169 nav-item'
                    >
                      <a
                        title='Terms &amp; Conditions'
                        href='https://www.bumblebee.com/terms-conditions/'
                        className='nav-link'
                      >
                        <span>Terms &amp; Conditions</span>
                      </a>
                    </li>
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-167'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-167 nav-item'
                    >
                      <a
                        title='Recipe Disclaimer'
                        href='https://www.bumblebee.com/recipe-disclaimer/'
                        className='nav-link'
                      >
                        <span>Recipe Disclaimer</span>
                      </a>
                    </li>
                    <li
                      itemScope
                      itemType='https://www.schema.org/SiteNavigationElement'
                      id='menu-item-168'
                      className='menu-item menu-item-type-post_type menu-item-object-page menu-item-168 nav-item'
                    >
                      <a
                        title='Site Map'
                        href='https://www.bumblebee.com/site-map/'
                        className='nav-link'
                      >
                        <span>Site Map</span>
                      </a>
                    </li>
                  </ul>
              </nav>
            </div>
          </div>
          <div id='cookie-gap'></div>
          </div>
        </footer>
      </div>
    </>
  );
}
