import React, { useState, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ImagePicker from 'react-native-image-picker';

import CustomModal from 'src/components/CustomModal/CustomModal';
import CustomTextInput from 'src/components/CustomTextInput/CustomTextInput';
import SetProfile from 'src/components/SetProfile/SetProfile';
import SetTags from 'src/components/SetTags/SetTags';
import Typo from 'src/components/Typo/Typo';
import useSelectedTags from 'src/hooks/useSelectedTags';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  SignupStyled,
  SignupView,
  signupTitleStyle,
  ModalView,
  FooterButtonStyled,
  FooterButton,
  footerTextStyle,
} from './Signup.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = ({ navigation, route }: Props) => {
  const { name, profileImageURL } = route.params;

  const [visibleForm, setVisibleForm] = useState<'setProfile' | 'setTags'>('setProfile');
  const [visibleInput, setVisibleInput] = useState(false);
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const { selectedTags, toggleTag } = useSelectedTags([]);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setProfileImage(profileImageURL);
    setNickname(name);
  }, [name, profileImageURL]);

  const handlePrevButtonPress = () => {
    switch (visibleForm) {
      case 'setTags':
        setVisibleForm('setProfile');
        break;
    }
  };

  const handleNextButtonPress = () => {
    switch (visibleForm) {
      case 'setProfile':
        setVisibleForm('setTags');
        break;
      case 'setTags':
        navigation.replace('Main');
    }
  };

  const handleSetProfileImage = async () => {
    await ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else {
          const imageURL = response.assets?.[0]?.uri ?? '';
          setProfileImage(imageURL);
        }
      }
    );
  };

  const handleSetNicknameModal = () => {
    setVisibleInput(true);
  };

  const handleSetNickname = (text: string) => {
    setNickname(text);
    setVisibleInput(false);
  };

  return (
    <SignupStyled>
      <SignupView>
        <Typo type={FontType.BOLD_24} style={signupTitleStyle}>
          {nickname}님,{'\n'}반가워요!{'\n'}프로필을 설정해볼까요?
        </Typo>
        <ModalView>
          {visibleForm === 'setProfile' && (
            <SetProfile
              nickname={nickname}
              profileImageURL={profileImage}
              onSetProfileImage={handleSetProfileImage}
              onSetNicknameModal={handleSetNicknameModal}
            />
          )}
          {visibleForm === 'setTags' && <SetTags preferTags={selectedTags} onToggleTag={toggleTag} />}
        </ModalView>
        <FooterButtonStyled>
          {visibleForm === 'setTags' ? (
            <FooterButton onPress={handlePrevButtonPress}>
              <Typo color={GrayColor.GRAY_300}>이전</Typo>
            </FooterButton>
          ) : (
            <Typo type={FontType.REGULAR_11} color={GrayColor.GRAY_200} style={footerTextStyle}>
              개인 정보 수집에 동의하신다면 아래의 ‘다음'{'\n'}
              버튼을 눌러주세요.
            </Typo>
          )}
          <FooterButton
            isBackgroundColor={visibleForm === 'setProfile' || selectedTags.length > 0}
            onPress={handleNextButtonPress}
          >
            <Typo
              color={visibleForm === 'setProfile' || selectedTags.length > 0 ? GrayColor.GRAY_0 : GrayColor.GRAY_400}
            >
              {visibleForm === 'setProfile' ? '다음' : selectedTags.length > 0 ? '완료' : '건너뛰기'}
            </Typo>
          </FooterButton>
        </FooterButtonStyled>
        <CustomModal
          backdropOpacity={0.3}
          isVisible={visibleInput}
          onModalClose={() => setVisibleInput(false)}
          onShow={() => inputRef.current?.focus()}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          hideModalContentWhileAnimating={true}
          useNativeDriver={true}
        >
          <CustomTextInput
            type="nickname"
            defaultText={nickname}
            onSetInputText={handleSetNickname}
            inputRef={inputRef}
          />
        </CustomModal>
      </SignupView>
    </SignupStyled>
  );
};

export default Signup;
