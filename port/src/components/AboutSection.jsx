import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection__buttons2{
    &:hover{
        background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
        color:color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
    }
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
      color:rgb(255 255 255);
    }
    .aboutSection__right {
      margin-top: 3rem;
      position:absolute;
      opacity:0.4;
      top:82rem;
    
    color: rgb(255 255 255);
    }
    
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
    const uWu="I am a front-end development student who likes to work with HTML, CSS, JavaScript, and other technologies to create dynamic and visually appealing websites. You enjoy working with front-end frameworks like React, Angular, and Vue.js, and are always looking for new ways to improve your skills as a developer. You're excited to learn and are always looking for challenges to push your limits. You're also a great team player and a good listener, qualities that make you an excellent collaborator and teammate"
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          
          <PText    brand={uWu}/>
          <div className="aboutSection__buttons">
            <Button  className="aboutSection__buttons1" btnText="Works" btnLink="/projects" />
            <Button className="aboutSection__buttons2" btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src="https://i.pinimg.com/736x/1d/50/e7/1d50e74fcb8ce125f18aedb823cdc3e8.jpg" alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
