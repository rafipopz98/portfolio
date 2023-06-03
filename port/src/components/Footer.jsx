import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import { Slide } from 'react-reveal';
const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .abtmep{
    font-size: 2rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
    .lastt{
            font-size: 2rem;
        }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .abtmep{
        font-size: 1.5rem;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
        .lastt{
            font-size: 1.5rem;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
    <Slide bottom>
    <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Muhammad Rafi</h1>
          <div className='abtmep'>
            A freelance web designer and developer from Chittagong, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate.
          </div>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 8296386973',
                path: 'tel:+918296386973',
              },
              {
                title: 'itsrealrafi@gmail.com',
                path: 'mailto:itsrealrafi@gmail.com',
              },
              {
                title: 'Banglore,India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/rafipopz98',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/muhammad-rafi-5ba799218/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/rafi_raff_popz/',
              },
            ]}
          />
        </div>
      </div>
        </Slide>
     <Slide right>

 
      <div className="copyright">
        <div className="container">
          <div className='lastt'>
            © 2023 - Muhammad Rafi | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/rafipopz98">
              muhammadRafi
            </a>{' '}
          </div>
        </div>
      </div> 
      </Slide>
    </FooterStyle>
  );
}
