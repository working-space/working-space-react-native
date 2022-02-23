import styled, { css } from '@emotion/native';
import { GrayColor } from 'src/utils/color';

interface SearchInputStyledProps {
  isFocus?: boolean;
}

export const resultListStyle = css`
  margin: 0 16px;
  padding-bottom: 24px;
`;

export const SearchStyled = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const SearchSafeArea = styled.SafeAreaView`
  background-color: ${GrayColor.GRAY_0};
  z-index: 2;
`;

export const SearchInput = styled.TextInput<SearchInputStyledProps>`
  height: 40px;
  border: 1px solid ${({ isFocus }) => (isFocus ? GrayColor.GRAY_400 : GrayColor.GRAY_200)};
  border-radius: 20px;
  padding: 0 16px;
  padding-right: 76px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: ${GrayColor.GRAY_400};
`;

export const SearchInputWrapper = styled.View`
  flex: 1;
  padding-right: 16px;
`;

export const SearchInputButtonWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0 16px;
  right: 16px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInputButton = styled.TouchableOpacity`
  margin-left: 12px;
`;

export const SearchContent = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
  z-index: 1;
`;

export const SearchGuide = styled.View`
  margin-top: 160px;
  align-items: center;
`;

export const SearchGuideText = styled.View`
  margin-top: 4px;
`;

export const SearchResult = styled.View`
  margin-top: 16px;
`;

export const ListSeparator = styled.View`
  margin-bottom: 8px;
`;
