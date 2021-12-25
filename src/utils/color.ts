const GrayColor = {
  GRAY_0: '#FFFFFF',
  GRAY_50: '#FAFAFA',
  GRAY_100: '#F0F0F0',
  GRAY_200: '#CCCCCC',
  GRAY_300: '#A7A7A7',
  GRAY_400: '#222222',
} as const;

const PrimaryColor = {
  PRIMARY_500: '#FFBB44',
  PRIMARY_600: '#EBA01F',
} as const;

const SecondColor = {
  SECOND_500: '#3EA2FF',
} as const;

const SubColor = {
  RED_500: '#FF665C',
} as const;

// TODO: 시스템 확정 전까지는 팔레트 그대로 사용. 추후 수정 필요함.
type GrayColor = typeof GrayColor[keyof typeof GrayColor];
type PrimaryColor = typeof PrimaryColor[keyof typeof PrimaryColor];
type SecondColor = typeof SecondColor[keyof typeof SecondColor];
type SubColor = typeof SubColor[keyof typeof SubColor];

export { GrayColor, PrimaryColor, SecondColor, SubColor };
