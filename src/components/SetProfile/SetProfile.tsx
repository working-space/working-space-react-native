import React from 'react';

import CameraWhiteIcon from 'src/assets/icons/icon_camera_white.svg';
import EditIcon from 'src/assets/icons/icon_edit.svg';
import PersonWhiteIcon from 'src/assets/icons/icon_person_white.svg';
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
  const handleImagePress = () => {
    onSetProfileImage();
  };

  const handleChangeNicknameModal = () => {
    onSetNicknameModal();
  };

  return (
    <SetProfileStyled>
      <EditProfile>
        <EditImageStyled onPress={handleImagePress}>
          <EditImagePhoto>
            {profileImageURL !== '' ? (
              <EditImage source={{ uri: profileImageURL }} />
            ) : (
              <PersonWhiteIcon width="48" height="48" />
            )}
          </EditImagePhoto>
          <EditImageIcon>
            <CameraWhiteIcon />
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
            <EditIcon />
          </EditNameIcon>
        </EditNameStyled>
      </EditProfile>
    </SetProfileStyled>
  );
};

export default SetProfile;
