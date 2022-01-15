import styled, { css } from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const CommentListWrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`;

export const CommentListBox = styled.View`
  width: 100%;
  padding: 24px 0;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
`;

export const CommentListBoxIcon = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  padding-right: 5px;
`;

export const CommentListBoxHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentListBoxInput = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const CommentListBoxView = styled.View`
  flex-direction: column;
`;

export const CommentText = styled.View`
  padding-left: 8px;
`;

export const CommentItem = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

export const ProfileImage = styled.View`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 1px solid ${GrayColor.GRAY_100};
  margin-right: 8px;
`;

export const CommentItemInfo = styled.View`
  width: 91%;
  flex-direction: column;
`;

export const CommentItemTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const CommentItemTitleLeft = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const commentItemTitleNameStyle = css`
  padding-right: 8px;
  border-right-width: 1px;
  border-style: solid;
  border-color: ${GrayColor.GRAY_100};
`;

export const commentItemTitleDateStyle = css`
  padding-left: 8px;
`;

export const CommentMoreButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const NoneItem = styled.View`
  flex: 1;
  align-items: flex-end;
`;
