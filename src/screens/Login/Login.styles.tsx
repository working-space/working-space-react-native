import styled from '@emotion/native';
import { GrayColor } from 'src/utils/color';

export const LoginStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const LoginView = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
`;

export const LoginButtonStyled = styled.View`
  width: 100%;
  padding: 16px 16px 4px 16px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${GrayColor.GRAY_200};
  padding: 17px 105px 17px 106px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const LoginButtonIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const LoginButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`;
