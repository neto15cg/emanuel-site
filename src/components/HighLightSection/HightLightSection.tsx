import React from 'react';
import { Container, Row, Col, Box } from '@components/slyce/slyce';
import { HightLightContainer, HightLightCard, HightLightCardTitle, HightLightCardDescription } from './HightLightSection.styles';

// @ts-ignore
import ParceriaSvg from '../../assets/icons/parceria.svg';
// @ts-ignore
import SegurancaSvg from '../../assets/icons/seguranca.svg';
// @ts-ignore
import AgilidadeSvg from '../../assets/icons/agilidade.svg';

const HighLightSection = () => {
  return (
    <HightLightContainer>
      <Container>
        <Row>
          <Col small={24} medium={24} large={8} noGutter>
            <Box display="flex" alignItems="center" justifyContent="center">
              <HightLightCard>
                <img src={ParceriaSvg} alt="Parceria" width={80} height={80} />
                <HightLightCardTitle>Parceria</HightLightCardTitle>
                <HightLightCardDescription>
                  Somos parceiros dos nossos clientes e estamos atentos para que cada detalhe saia como sonhado
                </HightLightCardDescription>
              </HightLightCard>
            </Box>
          </Col>
          <Col small={24} medium={24} large={8} noGutter>
            <Box display="flex" alignItems="center" justifyContent="center">
              <HightLightCard>
                <img src={SegurancaSvg} alt="Segurança" width={80} height={80} />
                <HightLightCardTitle>Segurança</HightLightCardTitle>
                <HightLightCardDescription>Temos registro ativo no CREA com o número 123123 </HightLightCardDescription>
              </HightLightCard>
            </Box>
          </Col>
          <Col small={24} medium={24} large={8} noGutter>
            <Box display="flex" alignItems="center" justifyContent="center">
              <HightLightCard>
                <img src={AgilidadeSvg} alt="Agilidade" width={80} height={80} />
                <HightLightCardTitle>Agilidade</HightLightCardTitle>
                <HightLightCardDescription>Queremos que seu sonho seja realizado o quanto antes</HightLightCardDescription>
              </HightLightCard>
            </Box>
          </Col>
        </Row>
      </Container>
    </HightLightContainer>
  );
};

export default HighLightSection;
