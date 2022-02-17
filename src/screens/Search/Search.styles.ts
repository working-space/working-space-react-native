import styled from '@emotion/native';
import { GrayColor } from 'src/utils/color';

export const SearchStyled = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const SearchSafeArea = styled.SafeAreaView`
  background-color: ${GrayColor.GRAY_0};
  z-index: 2;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  border: 1px solid ${GrayColor.GRAY_200};
  border-radius: 20px;
  padding: 0 16px;
  padding-right: 48px;
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

export const SearchInputButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0 16px;
  right: 16px;
  justify-content: center;
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
