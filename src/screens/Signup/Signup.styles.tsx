import styled, { css } from '@emotion/native';

import { GrayColor, PrimaryColor } from 'src/utils/color';

export const SignupStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const SignupView = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const signupTitleStyle = css`
  padding-top: 48px;
  padding-bottom: 60px;
  line-height: 36px;
`;

export const ModalView = styled.ScrollView`
  flex: 1 1 auto;
  width: 100%;
`;

export const FooterButtonStyled = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  padding-bottom: 28px;
  background-color: ${GrayColor.GRAY_0};
`;

export const FooterButton = styled.TouchableOpacity<{ isBackgroundColor?: boolean }>`
  border-radius: 24px;
  padding: ${({ isBackgroundColor }) => (isBackgroundColor ? '14px 24px' : '14px 0')};
  background-color: ${({ isBackgroundColor }) => (isBackgroundColor ? PrimaryColor.PRIMARY_500 : GrayColor.GRAY_0)};
`;

export const footerTextStyle = css`
  margin-bottom: 9px;
`;
