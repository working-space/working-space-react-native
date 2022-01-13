import React, { useState, Ref } from 'react';
import { TextInput, Platform } from 'react-native';

import SmallCameraLineIcon from 'src/assets/icons/icon_small_camera_line.svg';
import SmallCloseIcon from 'src/assets/icons/icon_small_close.svg';
import Typo from 'src/components/Typo/Typo';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  CustomTextInputStyled,
  CustomTextInputView,
  CustomTextInputInfo,
  CustomTextInputBox,
  CancelButton,
  PhotoButton,
  SubmitButton,
} from './CustomTextInput.styles';

interface Props {
  type: 'nickname' | 'comment';
  defaultText?: string;
  onSetInputText: (text: string) => void;
  inputRef: Ref<TextInput>;
}

const CustomTextInput = ({ type, defaultText = '', onSetInputText, inputRef }: Props) => {
  const [inputText, setInputText] = useState(type === 'nickname' ? defaultText : '');

  const handleSetInputText = (text: string) => {
    onSetInputText?.(text);
  };

  return (
    <CustomTextInputStyled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <CustomTextInputView>
        <CustomTextInputInfo>
          <CustomTextInputBox
            placeholder={type === 'nickname' ? '이름을 입력해주세요' : '댓글을 입력하세요'}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            onSubmitEditing={(event) => handleSetInputText(event.nativeEvent.text)}
            ref={inputRef}
          />
          {type === 'nickname' ? (
            <CancelButton onPress={() => handleSetInputText(defaultText)}>
              <SmallCloseIcon />
            </CancelButton>
          ) : (
            <PhotoButton>
              <SmallCameraLineIcon width="18" height="18" />
            </PhotoButton>
          )}
          <SubmitButton onPress={() => handleSetInputText(inputText)}>
            <Typo type={FontType.REGULAR_12} color={GrayColor.GRAY_200}>
              등록
            </Typo>
          </SubmitButton>
        </CustomTextInputInfo>
      </CustomTextInputView>
    </CustomTextInputStyled>
  );
};

export default CustomTextInput;
