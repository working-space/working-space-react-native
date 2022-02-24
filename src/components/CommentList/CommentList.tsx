import React from 'react';
import { TouchableOpacity } from 'react-native';

import DropdownGrayIcon from 'src/assets/icons/icon_dropdown_gray.svg';
import OptionIcon from 'src/assets/icons/icon_option.svg';
import PersonGrayIcon from 'src/assets/icons/icon_person_gray.svg';
import NoneImage from 'src/assets/images/none-image.svg';
import Typo from 'src/components/Typo/Typo';
import { Comments, Comment } from 'src/models/comment';
import { GrayColor } from 'src/utils/color';
import { Align, FontType } from 'src/utils/font';
import {
  CommentListWrapper,
  CommentListBox,
  CommentListBoxIcon,
  CommentListBoxHeader,
  CommentListBoxInput,
  CommentListBoxView,
  CommentItem,
  CommentItemInfo,
  CommentMoreButton,
  CommentItemTitle,
  CommentItemTitleLeft,
  commentItemTitleNameStyle,
  commentItemTitleDateStyle,
  ProfileImage,
  CommentText,
  NoneItem,
} from './CommentList.styles';

interface Props {
  comments: Comments;
  commentsCount: number;
  hasNextComments: boolean;
  userComments: Comment[];
  onSetCommentTextModal: () => void;
  onCommentOptionModal: (commentId: string) => void;
  onMoreCommentsButtonPress?: () => void;
}

const CommentList = ({
  comments,
  commentsCount,
  hasNextComments,
  userComments,
  onSetCommentTextModal,
  onCommentOptionModal,
  onMoreCommentsButtonPress,
}: Props) => {
  const handleCommentTextModal = () => {
    onSetCommentTextModal();
  };

  const handleCommentOptionModal = (commentId: string) => {
    onCommentOptionModal(commentId);
  };
  const handleMoreCommentsButtonPress = () => {
    onMoreCommentsButtonPress?.();
  };

  return (
    <CommentListWrapper>
      <CommentListBox>
        <CommentListBoxHeader>
          <Typo type={FontType.BOLD_16}>댓글</Typo>
          <CommentListBoxIcon>
            <PersonGrayIcon width="16" height="16" />
          </CommentListBoxIcon>
          <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_200}>
            {commentsCount}
          </Typo>
        </CommentListBoxHeader>
        <CommentListBoxInput onPress={handleCommentTextModal}>
          <ProfileImage>
            <PersonGrayIcon width="16" height="16" />
          </ProfileImage>
          <CommentText>
            <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_300}>
              댓글 입력하기
            </Typo>
          </CommentText>
        </CommentListBoxInput>
        {comments.data.length > 0 ? (
          <>
            <CommentListBoxView>
              {comments.data.map((comment, i) => {
                return (
                  <CommentItem key={i}>
                    <ProfileImage>
                      <PersonGrayIcon width="16" height="16" />
                    </ProfileImage>
                    <CommentItemInfo>
                      <CommentItemTitle>
                        <CommentItemTitleLeft>
                          <Typo type={FontType.BOLD_12} style={commentItemTitleNameStyle}>
                            {comment.userId}
                          </Typo>
                          <Typo type={FontType.REGULAR_11} color={GrayColor.GRAY_300} style={commentItemTitleDateStyle}>
                            {comment.updatedAt}
                          </Typo>
                        </CommentItemTitleLeft>
                        {userComments.length > 0 &&
                          userComments.map((userComment) => {
                            return (
                              comment.id === userComment.id && (
                                <TouchableOpacity
                                  key={userComment.id}
                                  onPress={() => handleCommentOptionModal(userComment.id)}
                                >
                                  <OptionIcon />
                                </TouchableOpacity>
                              )
                            );
                          })}
                      </CommentItemTitle>
                      <Typo type={FontType.REGULAR_12}>{comment.content}</Typo>
                    </CommentItemInfo>
                  </CommentItem>
                );
              })}
            </CommentListBoxView>
            {hasNextComments && (
              <CommentMoreButton onPress={handleMoreCommentsButtonPress}>
                <DropdownGrayIcon />
                <Typo type={FontType.REGULAR_11} color={GrayColor.GRAY_300}>
                  더보기
                </Typo>
              </CommentMoreButton>
            )}
          </>
        ) : (
          <NoneItem>
            <NoneImage />
            <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_200} align={Align.CENTER}>
              첫 댓글을 작성해보세요!
            </Typo>
          </NoneItem>
        )}
      </CommentListBox>
    </CommentListWrapper>
  );
};

export default CommentList;
