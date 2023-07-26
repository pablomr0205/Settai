import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  breakpoints: {
    xs: '25em', // 400px
    sm: '36em', // 576px
    md: '48em', // 768px
    lg: '64em', // 1024px
    xl: '90em', // 1440px
  },
  colors: {
    purple: [
      '#D3D3E4', // [0]
      '#B7B6D9', // [1]
      '#9A99D2', // [2]
      '#6967DA', // [3]
      '#5856D6', // [4]
      '#4846D2', // [5]
      '#4C4AA9', // [6]
      '#4C4B8F', // [7]
      '#4B4A7B', // [8]
      '#47476A', // [9]
    ],
    purple_dark: [
      '#E6E6F2', // [0]
      '#C7C7E6', // [1]
      '#A7A7DF', // [2]
      '#6F6DE9', // [3]
      '#5E5CE6', // [4]
      '#504EE4', // [5]
      '#4A48BD', // [6]
      '#4B49A1', // [7]
      '#4B4A89', // [8]
      '#494876', // [9]
    ],
    gray: [
      '#fcfcfc', // [0]
      '#f8f8f8', // [1]
      '#f4f4f5', // [2]
      '#f1f3f5', // [3]
      '#ebedf0', // [4]
      '#d4d4d8', // [5]
      '#ced4da', // [6]
      '#afb8be', // [7]
      '#71717a', // [8]
      '#495057', // [9]
    ],
    dark: [
      '#C1C2C5', // [0]
      '#A1A1AA', // [1]
      '#909296', // [2]
      '#5C5F66', // [3]
      '#3F3F46', // [4]
      '#2C2E33', // [5]
      '#1D1D21', // [6]
      '#18181B', // [7]
      '#141517', // [8]
      '#101113', // [9]
    ],
    success: [
      '#4CAF50', // [0] Default
    ],
    error: [
      '#EF4444', // [0] Default
    ],
    warning: [
      '#E5A21E', // [0] Default
    ],
  },
  primaryShade: { light: 4, dark: 4 },
  spacing: {
    md: '1rem',
    xl: '2rem',
  },
  shadows: {
    xs: '0px 1px 4px #15223214',
  },
  transitionTimingFunction: 'ease',
  components: {
    Divider: {
      defaultProps: {
        sx: {
          borderTopColor: '#F4F4F51A',
        },
      },
    },
    Modal: {
      styles: {
        content: {
          maxWidth: 352,
          width: '100%',
          margin: '0 auto',
          padding: 16,
          borderRadius: 8,
        },
        body: {
          padding: 0,
        },
      },
    },
    Drawer: {
      styles: {
        body: {
          padding: 0,
        },
      },
    },
  },
};

export default theme;
