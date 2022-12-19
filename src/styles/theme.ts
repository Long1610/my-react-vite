import { myColor } from './color'
import { mySpace } from './space'
import { myTypography } from './typography'

type Color = {
  25: string
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type Font = {
  regular: string
  medium: string
  semibold: string
}

export type Theme = {
  myColor: {
    gray: Color
    primary: Color
    error: Color
    warning: Color
    success: Color
  }
  space: {
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    8: string
    10: string
    12: string
    16: string
    20: string
    24: string
  }
  size: {
    headerHeight: string
  }
  breakpoint: {
    desktop: string
  }
  zIndex: {
    header: number
  }
  font: {
    text: {
      xs: Font
      sm: Font
      md: Font
    }
    display: {
      sm: Font
      md: Font
    }
  }
}

export const theme = {
  myColor,
  mySpace,
  size: {
    headerHeight: '4rem'
  },
  breakpoint: {
    desktop: '64em'
  },
  zIndex: {
    header: 1000
  },
  myTypography
}

export function color(name: keyof Theme['myColor'], shade: keyof Color) {
  return ({ theme }: { theme: Theme }) => theme.myColor[name][shade]
}

export function space(...names: Array<keyof Theme['space']>) {
  return ({ theme }: { theme: Theme }) => {
    const spaces = names.map(name => theme.space[name])
    return spaces.join(' ')
  }
}

export function breakpoint(name: keyof Theme['breakpoint']) {
  return ({ theme }: { theme: Theme }) => theme.breakpoint[name]
}

export function zIndex(name: keyof Theme['zIndex']) {
  return ({ theme }: { theme: Theme }) => theme.zIndex[name]
}

export function textFont(size: keyof Theme['font']['text'], weight: keyof Font) {
  return ({ theme }: { theme: Theme }) => theme.font.text[size][weight]
}

export function displayFont(size: keyof Theme['font']['display'], weight: keyof Font) {
  return ({ theme }: { theme: Theme }) => theme.font.display[size][weight]
}
