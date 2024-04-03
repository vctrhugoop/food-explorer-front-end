import { css } from 'styled-components';

export default {
  COLORS: {
    LIGHT: {
      100: '#FFFFFF',
      200: '#FFFAF1',
      300: '#E1E1E6',
      400: '#C4C4CC',
      500: '#7C7C8A',
      600: '#76797B',
      700: '#4D585E',
    },
    DARK: {
      100: '#000405',
      200: '#00070A',
      300: '#000204',
      400: '#000A0F',
      500: '#000C12',
      600: '#00111A',
      700: '#001119',
      800: '#0D161B',
      900: '#0D1D25',
      1000: '#192227',
    },
    GRADIENT: {
      100: 'linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)',
      200: 'linear-gradient(180deg, #091E26 0%, #00131C 100%)',
    },
    TOMATO: {
      100: '#750310',
      200: '#92000E',
      300: '#AB222E',
      400: '#AB4D55',
    },
    CARROT: {
      100: '#FBA94C',
    },
    MINT: {
      100: '#04D361',
    },
    CAKE: {
      100: '#065E7C',
      200: '#82F3FF',
    },
  },
  FONTS: {
    ROBOTO: {
      '50-regular': css`
        font-family: Roboto, sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
      `,
      '100-regular': css`
        font-family: Roboto, sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 160%;
      `,
      '100-bold': css`
        font-family: Roboto, sans-serif;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 160%;
      `,
      '200-spaced': css`
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 160%;
      `,
      '200-regular': css`
        font-family: Roboto, sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
      `,
      '300-bold': css`
        font-family: Roboto, sans-serif;
        font-size: 2rem;
        font-weight: 700;
        line-height: 160%;
      `,
      '400-bold': css`
        font-family: Roboto, sans-serif;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: normal;
      `,
      '500-regular': css`
        font-family: Roboto, sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 160%;
      `,
      '600-bold': css`
        font-family: Roboto, sans-serif;
        font-size: 4.2rem;
        font-weight: 700;
        line-height: normal;
      `,
    },
    POPPINS: {
      '100-medium': css`
        font-family: Poppins, sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
      `,
      '200-medium': css`
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        font-weight: 500;
        line-height: 160%;
      `,
      '300-bold': css`
        font-family: Poppins, sans-serif;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 140%;
      `,
      '300-regular': css`
        font-family: Poppins, sans-serif;
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 140%;
      `,
      '400-medium': css`
        font-family: Poppins, sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
      `,
      '500-medium': css`
        font-family: Poppins, sans-serif;
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
      `,
    },
  },
};
