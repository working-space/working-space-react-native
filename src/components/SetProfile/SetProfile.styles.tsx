import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const SetProfileStyled = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const EditProfile = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

export const EditImageStyled = styled.TouchableOpacity`
  width: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const EditImagePhoto = styled.View`
  width: 100px;
  height: 100px;
  overflow: hidden;
  background-color: ${GrayColor.GRAY_200};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const EditImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const EditImageIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${GrayColor.GRAY_400};
  border-radius: 100px;
  z-index: 2;
`;

export const EditNameStyled = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const editNameStyle = css`
  text-decoration: underline;
`;

export const EditNameIcon = styled.View`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const badgeStyle = css`
  margin-top: 12px;
  margin-bottom: 4px;
`;
