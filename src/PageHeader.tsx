import { useState } from 'react';

export default function PageHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className={`pageHeader ${isNavOpen ? 'navOpen' : ''}`}>
        <section>
          <a href='/'>
            <img
              className='logo'
              src='../images/logos/lighthouse_full_color.png'
              alt='Bumblebee Logo'
            />
          </a>
          <nav>
            <ul className='mainNav'>
              <li className='hasSubNav'>
                <a href='/products'>PRODUCTS</a>
                <div>
                  <ul className='subNav'>
                    <li>
                      <a href='/products/cans'>CANS</a>
                    </li>
                    <li>
                      <a href='/products/pouches'>POUCHES</a>
                    </li>
                    <li>
                      <a href='/products/kits'>KITS</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href=''>RECIPES</a>
              </li>
              <li>
                <a href=''>BUY NOW</a>
              </li>
              <li>
                <a href=''>ABOUT</a>
              </li>
              <li>
                <a href=''>SUSTAINABILITY</a>
              </li>
              <li>
                <a href=''>TRACE MY CATCH</a>
              </li>
            </ul>
            <button
              className='navToggle'
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              $
              {!isNavOpen ? (
                <img
                  src='../images/icons/hamburger.svg'
                  alt='navigation menu'
                />
              ) : (
                <img src='../images/icons/x.svg' alt='close' />
              )}
            </button>
          </nav>
        </section>
      </header>
      <div className={`fullNav ${isNavOpen ? 'active' : ''}`}>
        <nav>
          <ul>
            <li>
              <a href='/products'>PRODUCTS</a>
            </li>
            <li>
              <a href=''>RECIPES</a>
            </li>
            <li>
              <a href=''>BUY NOW</a>
            </li>
            <li>
              <a href=''>ABOUT</a>
            </li>
            <li>
              <a href=''>SUSTAINABILITY</a>
            </li>
            <li>
              <a href=''>TRACE MY CATCH</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
