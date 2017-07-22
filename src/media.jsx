/* @flow */

export default const media = {
  sm: (...args: any) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  md: (...args: any) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  lg: (...args: any) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `
};