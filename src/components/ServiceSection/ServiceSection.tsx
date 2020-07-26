import React from 'react';
import { Container, Row, Col } from '@components/slyce/slyce';
import {
  ServiceSectionContainer,
  ServiceDeviderTop,
  ServiceDeviderBottom,
  ServiceCardTitle,
  ServiceDescrption,
  ServiceContainerCard,
  ServiceTitle,
} from './ServiceSection.styles';

// @ts-ignore
import ProjectSvg from '../../assets/icons/projeto.svg';
// @ts-ignore
import LawSvg from '../../assets/icons/lei.svg';
// @ts-ignore
import PlanSvg from '../../assets/icons/planejamento.svg';
// @ts-ignore
import ConsultantSvg from '../../assets/icons/consultoria.svg';

const ServiceSection = () => {
  return (
    <ServiceSectionContainer>
      <ServiceDeviderTop />
      <ServiceDeviderBottom />
      <Container>
        <Row>
          <Col small={24} medium={24} large={24}>
            <ServiceTitle>Serviços</ServiceTitle>
          </Col>
        </Row>
        <Row>
          <Col small={24} medium={24} large={12}>
            <ServiceContainerCard>
              <img src={ProjectSvg} alt="Projeto" width={200} height={200} />
              <ServiceCardTitle>Projetos</ServiceCardTitle>
              <ServiceDescrption>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </ServiceDescrption>
            </ServiceContainerCard>
          </Col>
          <Col small={24} medium={24} large={12}>
            <ServiceContainerCard>
              <img src={LawSvg} alt="Legalização e Regularização" width={200} height={200} />
              <ServiceCardTitle>Legalização e Regularização</ServiceCardTitle>
              <ServiceDescrption>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </ServiceDescrption>
            </ServiceContainerCard>
          </Col>
          <Col small={24} medium={24} large={12}>
            <ServiceContainerCard>
              <img src={PlanSvg} alt="Legalização e Regularização" width={200} height={200} />
              <ServiceCardTitle>Planejamento de Obras</ServiceCardTitle>
              <ServiceDescrption>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </ServiceDescrption>
            </ServiceContainerCard>
          </Col>
          <Col small={24} medium={24} large={12}>
            <ServiceContainerCard>
              <img src={ConsultantSvg} alt="Legalização e Regularização" width={200} height={200} />
              <ServiceCardTitle>Consultoria e Laudos Técnicos</ServiceCardTitle>
              <ServiceDescrption>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </ServiceDescrption>
            </ServiceContainerCard>
          </Col>
        </Row>
      </Container>
    </ServiceSectionContainer>
  );
};

export default ServiceSection;
