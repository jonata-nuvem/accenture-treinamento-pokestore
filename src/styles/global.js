import { mixins } from './mixins';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import "~bootstrap/scss/bootstrap";
@font-face {
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat-Normal';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    .MuiDrawer-paperAnchorDockedLeft {
    border-right: none !important;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 5px;
    }
    &::-webkit-scrollbar {
        width: 16px;
        border-radius: 5px;
        background: #fff;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${mixins.colors.primary};
        border:4px solid #fff;
    }
  }
  body {
    background: ${mixins.colors.background};
    --webkit-font-smoothing: antialiased;
  }
  #root, body, html {
    height: 100%;
  }
  #root {
    width: 100vw;
    margin: 0 auto;
  }
  body, button, textarea, input {
    font: ${mixins.typograph.paragraph} ${mixins.fonts.normal};
  }
  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`