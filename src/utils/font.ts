const Weight = {
  BOLD: 700,
  REGULAR: 400,
} as const;

const FontSize = {
  SIZE_24: 24,
  SIZE_18: 18,
  SIZE_16: 16,
  SIZE_14: 14,
  SIZE_12: 12,
  SIZE_11: 11,
} as const;

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

const FontType = {
  BOLD_24: 'BOLD_24',
  BOLD_18: 'BOLD_18',
  BOLD_16: 'BOLD_16',
  BOLD_14: 'BOLD_14',
  BOLD_12: 'BOLD_12',
  BOLD_11: 'BOLD_11',

  REGULAR_24: 'REGULAR_24',
  REGULAR_18: 'REGULAR_18',
  REGULAR_16: 'REGULAR_16',
  REGULAR_14: 'REGULAR_14',
  REGULAR_12: 'REGULAR_12',
  REGULAR_11: 'REGULAR_11',
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
      case FontType.BOLD_24:
      case FontType.REGULAR_24: {
        return FontSize.SIZE_24;
      }

      case FontType.BOLD_18:
      case FontType.REGULAR_18: {
        return FontSize.SIZE_18;
      }

      case FontType.BOLD_16:
      case FontType.REGULAR_16: {
        return FontSize.SIZE_16;
      }

      case FontType.BOLD_14:
      case FontType.REGULAR_14: {
        return FontSize.SIZE_14;
      }

      case FontType.BOLD_12:
      case FontType.REGULAR_12: {
        return FontSize.SIZE_12;
      }

      case FontType.BOLD_11:
      case FontType.REGULAR_11: {
        return FontSize.SIZE_11;
      }
    }
  };

  const getWeight = (type: FontType) => {
    switch (type) {
      case FontType.BOLD_24:
      case FontType.BOLD_18:
      case FontType.BOLD_16:
      case FontType.BOLD_14:
      case FontType.BOLD_12:
      case FontType.BOLD_11: {
        return Weight.BOLD;
      }

      case FontType.REGULAR_24:
      case FontType.REGULAR_18:
      case FontType.REGULAR_16:
      case FontType.REGULAR_14:
      case FontType.REGULAR_12:
      case FontType.REGULAR_11: {
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
