import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const SettingsStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const SettingsView = styled.View`
  flex: 1;
  margin-top: 56px;
  padding: 16px;
`;

export const TextButton = styled.TouchableOpacity`
  padding: 8px 0;
`;

export const LinkButton = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const linkButtonTextStyle = css`
  text-decoration-line: underline;
`;

export const TextButtonLine = styled.View`
  width: 100%;
  height: 0;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
  margin-top: 8px;
  margin-bottom: 8px;
`;
