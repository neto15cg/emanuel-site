import React, { useEffect, useState, useRef } from 'react';
import IntroduceSection from '@components/IntroduceSection/IntroduceSection';
import Header from '@components/Header/Header';
import HighLightSection from '@components/HighLightSection/HightLightSection';
import ServiceSection from '@components/ServiceSection/ServiceSection';
import { ButtonHeader, HeaderContent, HeaderButtonsContainer, Logo, RequestBudget } from './Dashboard.styles';

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const introduceSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
          <RequestBudget>Solicite Orçamento</RequestBudget>
        </HeaderContent>
      </Header>
      <div ref={introduceSectionRef}>
        <IntroduceSection />
      </div>

      <div>
        <HighLightSection />
      </div>
      <div ref={serviceSectionRef}>
        <ServiceSection />
      </div>
    </>
  );
};

export default Dashboard;
