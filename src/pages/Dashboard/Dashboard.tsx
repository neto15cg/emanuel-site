import React, { useEffect, useState, useRef } from 'react';
import IntroduceSection from '@components/IntroduceSection/IntroduceSection';
import Header from '@components/Header/Header';
import HighLightSection from '@components/HighLightSection/HightLightSection';
import { Container, Row, Col } from '@components/slyce/slyce';
import { ButtonHeader, HeaderContent, HeaderButtonsContainer, Logo, RequestBudget } from './Dashboard.styles';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const introduceSectionRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(document.documentElement.scrollTop);
  };

  const handleScrolToIntroduceSection = () => scrollToRef(introduceSectionRef);

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <>
      <Header scrollPosition={scrollPosition}>
        <HeaderContent>
          <HeaderButtonsContainer>
            <ButtonHeader onClick={handleScrolToIntroduceSection}>Home</ButtonHeader>
            <ButtonHeader to="/"> Sobre mim</ButtonHeader>
            <ButtonHeader to="/">Contato</ButtonHeader>
          </HeaderButtonsContainer>
          <Logo to="/">EM</Logo>
          <RequestBudget>Solicite Orçamento</RequestBudget>
        </HeaderContent>
      </Header>
      <Container>
        <Row>
          <Col small={24} medium={24} large={24} noGutter>
            <div ref={introduceSectionRef}>
              <IntroduceSection />
            </div>
          </Col>
        </Row>
        <Row>
          <Col small={24} medium={24} large={24} noGutter>
            <div ref={introduceSectionRef}>
              <HighLightSection />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
