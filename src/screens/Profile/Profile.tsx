import React, { useState, useRef, useEffect, Fragment } from 'react';
import { TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import BookmarkIcon from 'src/assets/icons/icon_bookmark.svg';
import CommentMenuIcon from 'src/assets/icons/icon_comment_menu.svg';
import FavoriteRedIcon from 'src/assets/icons/icon_favorite_red.svg';
import SettingIcon from 'src/assets/icons/icon_setting.svg';
import CustomModal from 'src/components/CustomModal/CustomModal';
import CustomTextInput from 'src/components/CustomTextInput/CustomTextInput';
import Header from 'src/components/Header/Header';
import SelectedTagsView from 'src/components/SelectedTagsView/SelectedTagsView';
import SetProfile from 'src/components/SetProfile/SetProfile';
import Typo from 'src/components/Typo/Typo';
import TAG from 'src/constants/tag';
import useSelectedTags from 'src/hooks/useSelectedTags';
import useUpdateProfile from 'src/hooks/useUpdateProfile';
import { TagName } from 'src/models/tag';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  ProfileStyled,
  ProfileView,
  FavoriteTags,
  FavoriteTagsHeader,
  FavoriteTagsEditButton,
  FavoriteTagsList,
  FavoriteTag,
  FavoriteTagIcon,
  FavoriteTagSeparatorStyled,
  FavoriteTagSeparator,
  ProfileMenu,
  ProfileMenuItem,
  ProfileMenuItemIcon,
  ProfileMenuLine,
} from './Profile.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({ navigation: { navigate, goBack } }: Props) => {
  const [visibleTagsModal, setVisibleTagsModal] = useState(false);
  const [preferredTags, setPreferredTags] = useState<TagName[]>([]);
  const { selectedTags, setSelectedTags, toggleTag } = useSelectedTags([]);
  const [visibleInputModal, setVisibleInputModal] = useState(false);
  const { profileImage, updateProfileImage, profileName, setProfileName } = useUpdateProfile();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setProfileName('김작업');
  }, [setProfileName]);

  const handleSetNicknameModal = () => {
    setVisibleInputModal(true);
  };

  const handleSetNickname = (text: string) => {
    setProfileName(text);
    setVisibleInputModal(false);
  };

  const handleSubmitButton = () => {
    setVisibleTagsModal(false);
    setPreferredTags([...selectedTags]);
  };

  const handleCloseButton = () => {
    setVisibleTagsModal(false);
    setSelectedTags([...preferredTags]);
  };

  return (
    <ProfileStyled>
      <Header
        left={
          <Header.Button onPress={goBack}>
            <BackIcon />
          </Header.Button>
        }
      />
      <ProfileView>
        <SetProfile
          nickname={profileName}
          profileImageURL={profileImage}
          showBadge={true}
          onSetProfileImage={updateProfileImage}
          onSetNicknameModal={handleSetNicknameModal}
        />
        <FavoriteTags>
          <FavoriteTagsHeader>
            <Typo type={FontType.BOLD_14}>나의 선호 태그</Typo>
            <FavoriteTagsEditButton onPress={() => setVisibleTagsModal(true)}>
              <Typo type={FontType.REGULAR_12} color={GrayColor.GRAY_300}>
                수정하기
              </Typo>
            </FavoriteTagsEditButton>
          </FavoriteTagsHeader>
          <FavoriteTagsList isEmpty={selectedTags.length <= 0}>
            {selectedTags &&
              selectedTags.map((tag, index) => (
                <Fragment key={TAG[tag].name}>
                  <FavoriteTag>
                    <FavoriteTagIcon>{TAG[tag].icon}</FavoriteTagIcon>
                    <Typo type={FontType.REGULAR_12}>{TAG[tag].name}</Typo>
                  </FavoriteTag>
                  {selectedTags.length - 1 !== index && (
                    <FavoriteTagSeparatorStyled>
                      <FavoriteTagSeparator />
                    </FavoriteTagSeparatorStyled>
                  )}
                </Fragment>
              ))}
            {selectedTags.length <= 0 && <Typo type={FontType.REGULAR_12}>등록된 태그가 없습니다.</Typo>}
          </FavoriteTagsList>
        </FavoriteTags>
        <ProfileMenu>
          <ProfileMenuItem onPress={() => navigate('Favorites')}>
            <ProfileMenuItemIcon>
              <FavoriteRedIcon />
            </ProfileMenuItemIcon>
            <Typo type={FontType.REGULAR_14}>좋아요 누른 작업공간</Typo>
          </ProfileMenuItem>
          <ProfileMenuItem onPress={() => navigate('Comments')}>
            <ProfileMenuItemIcon>
              <CommentMenuIcon />
            </ProfileMenuItemIcon>
            <Typo type={FontType.REGULAR_14}>작성한 리뷰</Typo>
          </ProfileMenuItem>
          <ProfileMenuItem onPress={() => navigate('Bookmarks')}>
            <ProfileMenuItemIcon>
              <BookmarkIcon />
            </ProfileMenuItemIcon>
            <Typo type={FontType.REGULAR_14}>즐겨찾기</Typo>
          </ProfileMenuItem>
          <ProfileMenuLine />
          <ProfileMenuItem onPress={() => navigate('Settings')}>
            <ProfileMenuItemIcon>
              <SettingIcon />
            </ProfileMenuItemIcon>
            <Typo type={FontType.REGULAR_14}>앱 설정</Typo>
          </ProfileMenuItem>
        </ProfileMenu>
      </ProfileView>
      <CustomModal
        backdropOpacity={0.3}
        isVisible={visibleInputModal}
        onBackdropPress={() => setVisibleInputModal(false)}
        onShow={() => inputRef.current?.focus()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <CustomTextInput
          type="nickname"
          defaultText={profileName}
          onSetInputText={handleSetNickname}
          inputRef={inputRef}
        />
      </CustomModal>
      <CustomModal
        isVisible={visibleTagsModal}
        backdropOpacity={0}
        onBackdropPress={handleCloseButton}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <SelectedTagsView
          selectedTags={selectedTags}
          preferredTags={preferredTags}
          onToggleTag={toggleTag}
          onCloseButton={handleCloseButton}
          onSubmitButton={handleSubmitButton}
        />
      </CustomModal>
    </ProfileStyled>
  );
};

export default Profile;
