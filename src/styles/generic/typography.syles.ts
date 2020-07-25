const path = require('path');

export const genericTyphography = () => `
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${path}/public/static/assets/fonts/Roboto/Roboto-Regular.ttf) format('ttf'),
      url(${path}/public/static/assets/fonts/Roboto/Roboto-Regular.ttf);
  }
  @font-face {
    font-family: 'Roboto';
    font-style: semi-bold;
    font-weight: 600;
    font-display: swap;
    src: url(${path}/public/static/assets/fonts/Roboto/Roboto-SemiBold.ttf) format('ttf'),
      url(${path}/public/static/assets/fonts/Roboto/Roboto-SemiBold.ttf);
  }
  @font-face {
    font-family: 'Roboto';
    font-style: extra-bold;
    font-weight: 800;
    font-display: swap;
    src: url(${path}/public/static/assets/fonts/Roboto/Roboto-ExtraBold.ttf) format('ttf'),
      url(${path}/public/static/assets/fonts/Roboto/Roboto-ExtraBold.ttf);
  }
`;
