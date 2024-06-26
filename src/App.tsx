import { useEffect, useState, useRef, useCallback } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

// import { motion } from "framer-motion"
import { useInView } from 'framer-motion';

import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

const pageData = [
  {
    id: 1,
    bannerSrc: '../images/banners/banner_worlds-best.png',
    productSrc: '../images/products/snack-meal.png',
    scrollText: 'SEE WHY WE\u2019RE THE BEST',
  },
  {
    id: 2,
    bannerSrc: '../images/banners/banner_ideal-catch.png',
    productSrc: '../images/products/solid-white-albacore-can.png',
    title: "We're pretty much the ideal catch",
    content: [
      'Bumble Bee is the whole package',
      '- tasty, healthy, affordable.',
      'No catfishing here.',
    ],
  },
  {
    id: 3,
    bannerSrc: '../images/banners/banner_dive-into-flavor.png',
    productSrc: '../images/products/lemon-pepper-pouch.png',
    title: 'Dive into all this flavor',
    content: [
      'Extra protein, extra delicious.',
      'What can we say?',
      'We\u2019re extra like that.',
    ],
  },
  {
    id: 4,
    bannerSrc: '../images/banners/banner_snackalicious.png',
    productSrc: '../images/products/ready-to-eat-ranch-carton.png',
    title: "We're just so snackalicious",
    content: [
      'Easy on your wallet and on the go.',
      'No mess, no stress?',
      'Say less.',
    ],
  },
  {
    id: 5,
    bannerSrc: '../images/banners/banner_perfect-portable.png',
    productSrc: '../images/products/applewood-smoke-pouch.png',
    title: 'Perfect, portable, goodness™',
    content: [
      'Scrumptious, nutritious, and always',
      'ready when you are. You read that right.',
      '- we got all the goods.',
    ],
  },
  {
    id: 6,
    bannerSrc: '../images/banners/banner_bee-better.png',
    titleSrc: '../images/titles/bee-better.png',
  },
];

type SectionProps = {
  id: number;
  bannerSrc?: string;
  titleSrc?: string;
  productSrc?: string;
  title?: string;
  content?: string[];
  scrollText?: string;
  isLoud?: boolean;
  handleInView: (id: number) => void;
  scrollToView: (target: string) => void;
};

type ImageProps = {
  imageSrc: string;
  isInView: boolean;
};

type SectionFooterProps = {
  id: number;
  scrollText?: string;
  isInView?: boolean;
  scrollToView: (target: string) => void;
  handleInView?: (id: number) => void;
};

export type PageFooterProps = {
  id?: number;
  scrollText?: string;
  isInView?: boolean;
  handleInView: (id: number) => void;
};

function Section({
  id,
  bannerSrc,
  titleSrc,
  productSrc,
  title,
  content,
  scrollText = 'Scroll Down',
  isLoud = false,
  handleInView,
  scrollToView,
}: SectionProps) {
  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    // console.log('effect in view: ', isInView, id);
    if (isInView) {
      // console.log('Element is in view:', isInView, id);
      handleInView(id);
    }
  }, [isInView, handleInView, id]);

  return (
    <section id={`section${id}`} className={`${isLoud ? 'loud' : ''}`}>
      <div ref={ref}>
        {bannerSrc && <BannerImage imageSrc={bannerSrc} isInView={isInView} />}
        <article style={{ position: 'relative', zIndex: '10' }}>
          {titleSrc && <TitleImage imageSrc={titleSrc} isInView={isInView} />}
          <h3>
            <span>{title}</span>
          </h3>
          {content &&
            content.map((item, index) => <p key={id + index}>{item}</p>)}
          {productSrc && (
            <ProductImage imageSrc={productSrc} isInView={isInView} />
          )}
        </article>
        {id <= pageData.length && (
          <SectionFooter
            isInView={isInView}
            id={id}
            scrollToView={scrollToView}
            scrollText={scrollText}
          />
        )}
      </div>
    </section>
  );
}

function BannerImage({ imageSrc, isInView }: ImageProps) {
  if (!imageSrc) return null;
  return (
    <div
      className='bannerImage'
      style={{
        opacity: isInView ? 1 : 0,
      }}
    >
      <img
        src={imageSrc}
        alt='Snack Meal, noun, more than a snack, but less than a meal!'
      />
    </div>
  );
}
function TitleImage({ imageSrc, isInView }: ImageProps) {
  if (!imageSrc) return null;
  return (
    <div
      className='titleImage'
      style={{
        width: '100%',
        height: '100%',
        // zIndex: 100,
        transition: 'all 250ms cubic-bezier(0.17, 0.55, 0.55, 1) 200ms',
        opacity: isInView ? 1 : 0,
        marginInline: 'auto',
      }}
    >
      <img
        style={{
          width: 'clamp(100px, 80vw, 730px)',
          // height: 'clamp(100px, 65%, 1000px)',
          objectFit: 'cover',
          objectPosition: 'center 100%',
        }}
        src={imageSrc}
        alt='placeholder'
      />
    </div>
  );
}
function ProductImage({ imageSrc, isInView }: ImageProps) {
  if (!imageSrc) return null;
  return (
    <div
      className='productImage'
      style={{
        opacity: isInView ? 1 : 0,
      }}
    >
      <img src={imageSrc} alt='placeholder' />
    </div>
  );
}

function SectionFooter({
  isInView,
  id,
  scrollText,
  scrollToView,
}: SectionFooterProps) {
  const scrollTarget = `${'#section' + (id + 1)}`;

  return (
    <div className='sectionFooter'>
      <div className='content'>
        <div className='action'>
          <button
            onClick={() => scrollToView(scrollTarget)}
            style={{
              transform: isInView ? undefined : 'translateY(50%)',
              opacity: isInView ? 1 : 0,
            }}
          >
            <span>{scrollText}</span>
            <img src='../images/arrow_down.svg' alt='arrow down' />
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentSection, setCurrentSection] = useState(1);

  const handleScroll = useCallback((target: string) => {
    if (target === '#section0') target = '#section1';
    if (target === '#section8') target = '#section7';

    (document.querySelector(target) as HTMLElement)?.scrollIntoView({
      behavior: 'smooth',
    });
    setCurrentSection(parseInt(target.replace('#section', '')));
  }, []);

  useEffect(() => {
    const root = document.querySelector('#root') as HTMLElement;
    const scrollYPerView = root.clientHeight;
    root.addEventListener('wheel', function (event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        scrollDown();
      } else {
        scrollUp();
      }
    });

    function scrollUp() {
      const currentScrollY = root.scrollTop;
      root.scroll({
        top: currentScrollY - scrollYPerView,
        left: 0,
        behavior: 'smooth',
      });
    }

    function scrollDown() {
      const currentScrollY = root.scrollTop;
      root.scroll({
        top: currentScrollY + scrollYPerView,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <PageHeader />
      <nav className='scrollNav'>
        <ul>
          {pageData.map((section, index) => (
            <li key={section.id + index}>
              <button
                onClick={() => {
                  handleScroll(`#section${section.id}`);
                }}
                className={`${section.id === currentSection ? 'active' : ''}`}
              >
                <span role='presentation' aria-hidden='true'></span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                handleScroll(`#section7`);
                setCurrentSection(7);
              }}
              className={`${7 === currentSection ? 'active' : ''}`}
            >
              <span role='presentation' aria-hidden='true'></span>
            </button>
          </li>
        </ul>
      </nav>
      <main>
        {pageData.map((section, index) => (
          <Section
            key={index}
            {...section}
            handleInView={setCurrentSection}
            scrollToView={handleScroll}
          />
        ))}
        <PageFooter handleInView={setCurrentSection} />

        <div className='staticFooter'>
          <div className='content'>
            <img
              className='roundLogo'
              src='../images/logos/lighthouse_round_color.png'
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
