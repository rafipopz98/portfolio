import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItems';
import Fade from 'react-reveal'

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
    const desc1="I do ui/ux design for the website that helps website to get a unique look."
    const desc2="I also develop the websites. I create high performance website with blazing fast speed."
    const desc3="I develop mobile application. I create mobile app with eye catching ui."
  return (
    <ServicesItemsStyles>
      <div className="container">
      <Fade top>
        <SectionTitle subheading="Why should you " heading="HIRE ME ?" />
      </Fade>
      <Fade bottom>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile application. I create mobile app with eye catching ui. "
          />
        </div>
      </Fade>
      </div>
    </ServicesItemsStyles>
  );
}
