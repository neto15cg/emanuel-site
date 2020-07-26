import React, { useEffect, useState, useRef } from 'react';
import IntroduceSection from '@components/IntroduceSection/IntroduceSection';
import Header from '@components/Header/Header';
import HighLightSection from '@components/HighLightSection/HightLightSection';
import ServiceSection from '@components/ServiceSection/ServiceSection';
import GallerySection from '@components/GallerySection/GallerySection';
import { ButtonHeader, HeaderContent, HeaderButtonsContainer, Logo, RequestBudget } from './Dashboard.styles';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const introduceSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(document.documentElement.scrollTop);
  };

  const handleScrolTo = (ref: any) => () => scrollToRef(ref);

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <>
      <Header scrollPosition={scrollPosition}>
        <HeaderContent>
          <HeaderButtonsContainer>
            <ButtonHeader onClick={handleScrolTo(introduceSectionRef)}>Início</ButtonHeader>
            <ButtonHeader onClick={handleScrolTo(serviceSectionRef)}>Serviços</ButtonHeader>
            <ButtonHeader to="/">Contato</ButtonHeader>
          </HeaderButtonsContainer>
          <Logo to="/">EM</Logo>
          <RequestBudget>Solicite orçamento</RequestBudget>
        </HeaderContent>
      </Header>
      <div ref={introduceSectionRef}>
        <IntroduceSection />
      </div>

      <div>
        <HighLightSection />
      </div>
      <div ref={serviceSectionRef}>
        <ServiceSection
          show={
            scrollPosition + 700 >
            ((serviceSectionRef && serviceSectionRef.current && serviceSectionRef.current.offsetTop && serviceSectionRef.current.offsetTop) || 0)
          }
        />
      </div>
      <div ref={gallerySectionRef}>
        <GallerySection
          show={
            scrollPosition + 700 >
            ((gallerySectionRef && gallerySectionRef.current && gallerySectionRef.current.offsetTop && gallerySectionRef.current.offsetTop) || 0)
          }
        />
      </div>
    </>
  );
};

export default Dashboard;
