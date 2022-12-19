import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { color, Theme } from './theme'
import NotoSansKRRegular from 'assets/fonts/NotoSansKR-Regular.otf'
import NotoSansKRBold from 'assets/fonts/NotoSansKR-Bold.otf'
import NotoSansKRBlack from 'assets/fonts/NotoSansKR-Black.otf'
import NotoSansKRLight from 'assets/fonts/NotoSansKR-Light.otf'
import NotoSansKRMedium from 'assets/fonts/NotoSansKR-Medium.otf'
import NotoSansKRThin from 'assets/fonts/NotoSansKR-Thin.otf'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}

 @font-face {
  font-family: 'Noto Sans KR';
  src: url(${NotoSansKRRegular}), url(${NotoSansKRBold}),
    url(${NotoSansKRBlack}), url(${NotoSansKRLight}),
    url(${NotoSansKRMedium}), url(${NotoSansKRThin});
}

  body {
    font-family: 'Noto Sans KR';
    color: ${color('gray', 900)};
    min-height: 100vh;
  }

  *,*::before,*::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  img , picture, svg, video {
    max-width: 100%;
    display: block;
  }

  html {
    font-size: 16px;
  }

  a {
    color: ${color('primary', 700)};
  }
`
