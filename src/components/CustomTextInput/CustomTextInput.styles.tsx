import styled from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const CustomTextInputStyled = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CustomTextInputView = styled.View`
  width: 100%;
  height: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${GrayColor.GRAY_0};
  padding: 0 16px;
`;

export const CustomTextInputInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${GrayColor.GRAY_200};
  border-style: solid;
  border-radius: 4px;
`;

export const CustomTextInputBox = styled.TextInput`
  width: 80%;
  font-size: 12px;
  color: ${GrayColor.GRAY_400};
  padding: 0 12px;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-right: 10px;
  background-color: ${GrayColor.GRAY_200};
  border-radius: 20px;
`;

export const PhotoButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-right: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 8px 12px;
  border-left-width: 1px;
  border-color: ${GrayColor.GRAY_200};
  border-style: solid;
`;
