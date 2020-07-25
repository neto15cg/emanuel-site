export const genericBoxSizing = () => `
  html {
    box-sizing: border-box;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;