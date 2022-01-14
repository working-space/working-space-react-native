import React from 'react';

import PersonIcon from 'src/assets/icons/icon_person.svg';
import SmallCameraIcon from 'src/assets/icons/icon_small_camera.svg';
import SmallEditIcon from 'src/assets/icons/icon_small_edit.svg';
import Typo from 'src/components/Typo/Typo';
import { Align, FontType } from 'src/utils/font';
import {
  SetProfileStyled,
  EditProfile,
  EditImageStyled,
  EditImagePhoto,
  EditImage,
  EditImageIcon,
  EditNameStyled,
  editNameStyle,
  EditNameIcon,
  badgeStyle,
} from './SetProfile.styles';

interface Props {
  nickname: string;
  profileImageURL: string;
  showBadge?: boolean;
  onSetProfileImage: () => void;
  onSetNicknameModal: () => void;
}

const SetProfile = ({ nickname, profileImageURL, showBadge = false, onSetProfileImage, onSetNicknameModal }: Props) => {
  const handleClickImage = () => {
    onSetProfileImage();
  };

  const handleChangeNicknameModal = () => {
    onSetNicknameModal();
  };

  return (
    <SetProfileStyled>
      <EditProfile>
        <EditImageStyled onPress={handleClickImage}>
          <EditImagePhoto>
            {profileImageURL !== '' ? <EditImage source={{ uri: profileImageURL }} /> : <PersonIcon />}
          </EditImagePhoto>
          <EditImageIcon>
            <SmallCameraIcon />
          </EditImageIcon>
        </EditImageStyled>
        {showBadge && (
          <Typo type={FontType.REGULAR_14} align={Align.CENTER} style={badgeStyle}>
            평범한 작업자
          </Typo>
        )}
        <EditNameStyled onPress={handleChangeNicknameModal}>
          <Typo type={FontType.REGULAR_18} style={!showBadge && editNameStyle}>
            {nickname}
          </Typo>
          <EditNameIcon>
            <SmallEditIcon />
          </EditNameIcon>
        </EditNameStyled>
      </EditProfile>
    </SetProfileStyled>
  );
};

export default SetProfile;
