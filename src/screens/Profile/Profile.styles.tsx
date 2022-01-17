import styled from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const ProfileStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const ProfileView = styled.View`
  flex: 1;
  padding: 0 16px;
  z-index: 1;
`;

export const FavoriteTags = styled.View`
  padding: 24px 0;
  margin-top: 40px;
`;

export const FavoriteTagsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FavoriteTagsEditButton = styled.TouchableOpacity``;

export const FavoriteTagsList = styled.View<{ isEmpty: boolean }>`
  flex-direction: row;
  justify-content: ${({ isEmpty }) => (isEmpty ? 'center' : 'flex-start')};
  align-items: center;
  flex-wrap: ${({ isEmpty }) => (isEmpty ? '' : 'wrap')};
  height: ${({ isEmpty }) => (isEmpty ? '72px' : 'auto')};
  background-color: ${({ isEmpty }) => (isEmpty ? GrayColor.GRAY_50 : 'transparent')};
`;

export const FavoriteTag = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  margin: 8px 0;
`;

export const FavoriteTagIcon = styled.View`
  margin-right: 4px;
`;

export const FavoriteTagSeparatorStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FavoriteTagSeparator = styled.View`
  width: 1px;
  height: 12px;
  margin: 0 8px;
  background-color: ${GrayColor.GRAY_200};
`;

export const ProfileMenu = styled.View``;

export const ProfileMenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const ProfileMenuItemIcon = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const ProfileMenuLine = styled.View`
  width: 100%;
  height: 0;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
  margin-top: 16px;
  margin-bottom: 16px;
`;
