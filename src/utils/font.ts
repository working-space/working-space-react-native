const Weight = {
  BOLD: 700,
  REGULAR: 400,
} as const;

const FontSize = {
  SIZE_HEAD: 24,
  SIZE_TITLE_01: 18,
  SIZE_TITLE_02: 16,
  SIZE_BODY_01: 14,
  SIZE_BODY_02: 12,
  SIZE_CAPTION: 11,
} as const;

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

const FontType = {
  BOLD_HEAD: 'BOLD_HEAD',
  BOLD_TITLE_01: 'BOLD_TITLE_01',
  BOLD_TITLE_02: 'BOLD_TITLE_02',
  BOLD_BODY_01: 'BOLD_BODY_01',
  BOLD_BODY_02: 'BOLD_BODY_02',
  BOLD_CAPTION: 'BOLD_CAPTION',

  REGULAR_HEAD: 'REGULAR_HEAD',
  REGULAR_TITLE_01: 'REGULAR_TITLE_01',
  REGULAR_TITLE_02: 'REGULAR_TITLE_02',
  REGULAR_BODY_01: 'REGULAR_BODY_01',
  REGULAR_BODY_02: 'REGULAR_BODY_02',
  REGULAR_CAPTION: 'REGULAR_CAPTION',
} as const;

type Align = typeof Align[keyof typeof Align];
type FontType = typeof FontType[keyof typeof FontType];
type FontStyle = { size: number; weight: number };

namespace Font {
  export const getStyle = (type: FontType): FontStyle => {
    return {
      weight: getWeight(type),
      size: getSize(type),
    };
  };

  const getSize = (type: FontType) => {
    switch (type) {
      case FontType.BOLD_HEAD:
      case FontType.REGULAR_HEAD: {
        return FontSize.SIZE_HEAD;
      }

      case FontType.BOLD_TITLE_01:
      case FontType.REGULAR_TITLE_01: {
        return FontSize.SIZE_TITLE_01;
      }

      case FontType.BOLD_TITLE_02:
      case FontType.REGULAR_TITLE_02: {
        return FontSize.SIZE_TITLE_02;
      }

      case FontType.BOLD_BODY_01:
      case FontType.REGULAR_BODY_01: {
        return FontSize.SIZE_BODY_01;
      }

      case FontType.BOLD_BODY_02:
      case FontType.REGULAR_BODY_02: {
        return FontSize.SIZE_BODY_02;
      }

      case FontType.BOLD_CAPTION:
      case FontType.REGULAR_CAPTION: {
        return FontSize.SIZE_CAPTION;
      }
    }
  };

  const getWeight = (type: FontType) => {
    switch (type) {
      case FontType.BOLD_HEAD:
      case FontType.BOLD_TITLE_01:
      case FontType.BOLD_TITLE_02:
      case FontType.BOLD_BODY_01:
      case FontType.BOLD_BODY_02:
      case FontType.BOLD_CAPTION: {
        return Weight.BOLD;
      }

      case FontType.REGULAR_HEAD:
      case FontType.REGULAR_TITLE_01:
      case FontType.REGULAR_TITLE_02:
      case FontType.REGULAR_BODY_01:
      case FontType.REGULAR_BODY_02:
      case FontType.REGULAR_CAPTION: {
        return Weight.REGULAR;
      }
    }
  };

  export const getFamily = (weight: number) => {
    switch (weight) {
      case Weight.BOLD: {
        return 'SpoqaHanSansNeo-Bold';
      }
      case Weight.REGULAR: {
        return 'SpoqaHanSansNeo-Regular';
      }
    }
    return 'SpoqaHanSansNeo-Regular';
  };
}

export { Font, FontType, Align };
