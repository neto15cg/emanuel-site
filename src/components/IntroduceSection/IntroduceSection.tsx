import React from 'react';
import {
  IntroduceSectionContainer,
  Introduce,
  TitleIntroduce,
  DescriptionIntroduce,
  IntroduceSectionContainerBg,
  ProfileImg,
  IntroduceDevider,
} from './IntroduceSection.styles';

// @ts-ignore
import Profile from '../../assets/images/profile.jpeg';

const IntroduceSection = () => {
  return (
    <IntroduceSectionContainer>
      <IntroduceSectionContainerBg />
      <IntroduceDevider />
      <Introduce>
        <ProfileImg src={Profile} alt="Emanuel Menezes" />
        <TitleIntroduce>Emanuel Menezes</TitleIntroduce>
        <DescriptionIntroduce>
          Engenheiro Civil (CREA-1234) com vasta experiência nas áreas X, Y e Z. (AQUI DEVE-SE COLOCAR UMA BREVE DESCRIÇÃO QUE EU AINDA NÃO SEI QUAL).
        </DescriptionIntroduce>
        <DescriptionIntroduce>
          Engenheiro Civil (CREA-1234) com vasta experiência nas áreas X, Y e Z. (AQUI DEVE-SE COLOCAR UMA BREVE DESCRIÇÃO QUE EU AINDA NÃO SEI QUAL).
        </DescriptionIntroduce>
        <DescriptionIntroduce>
          Engenheiro Civil (CREA-1234) com vasta experiência nas áreas X, Y e Z. (AQUI DEVE-SE COLOCAR UMA BREVE DESCRIÇÃO QUE EU AINDA NÃO SEI QUAL).
        </DescriptionIntroduce>
      </Introduce>
    </IntroduceSectionContainer>
  );
};

export default IntroduceSection;
