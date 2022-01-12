import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import DropdownIcon from 'src/assets/icons/icon_dropdown.svg';
import OptionIcon from 'src/assets/icons/icon_option.svg';
import SmallPersonFillIcon from 'src/assets/icons/icon_small_person_fill.svg';
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
  CommentItemTitleName,
  CommentItemTitleDate,
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
  onMoreCommentsButtonClick?: () => void;
}

const CommentList = ({
  comments,
  commentsCount,
  hasNextComments,
  userComments,
  onSetCommentTextModal,
  onCommentOptionModal,
  onMoreCommentsButtonClick,
}: Props) => {
  const handleCommentTextModal = () => {
    onSetCommentTextModal();
  };

  const handleCommentOptionModal = (commentId: string) => {
    onCommentOptionModal(commentId);
  };
  const handleMoreCommentsButtonClick = useCallback(() => {
    onMoreCommentsButtonClick?.();
  }, [onMoreCommentsButtonClick]);

  return (
    <CommentListWrapper>
      <CommentListBox>
        <CommentListBoxHeader>
          <Typo type={FontType.BOLD_TITLE_02}>댓글</Typo>
          <CommentListBoxIcon>
            <SmallPersonFillIcon />
          </CommentListBoxIcon>
          <Typo type={FontType.REGULAR_BODY_01} color={GrayColor.GRAY_200}>
            {commentsCount}
          </Typo>
        </CommentListBoxHeader>
        <CommentListBoxInput onPress={handleCommentTextModal}>
          <ProfileImage>
            <SmallPersonFillIcon />
          </ProfileImage>
          <CommentText>
            <Typo type={FontType.REGULAR_BODY_01} color={GrayColor.GRAY_300}>
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
                      <SmallPersonFillIcon />
                    </ProfileImage>
                    <CommentItemInfo>
                      <CommentItemTitle>
                        <CommentItemTitleLeft>
                          <Typo type={FontType.BOLD_BODY_02} style={CommentItemTitleName}>
                            {comment.userId}
                          </Typo>
                          <Typo type={FontType.REGULAR_CAPTION} color={GrayColor.GRAY_300} style={CommentItemTitleDate}>
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
                      <Typo type={FontType.REGULAR_BODY_02}>{comment.content}</Typo>
                    </CommentItemInfo>
                  </CommentItem>
                );
              })}
            </CommentListBoxView>
            {hasNextComments && (
              <CommentMoreButton onPress={handleMoreCommentsButtonClick}>
                <DropdownIcon />
                <Typo type={FontType.REGULAR_CAPTION} color={GrayColor.GRAY_300}>
                  더보기
                </Typo>
              </CommentMoreButton>
            )}
          </>
        ) : (
          <NoneItem>
            <NoneImage />
            <Typo type={FontType.REGULAR_BODY_01} color={GrayColor.GRAY_200} align={Align.CENTER}>
              첫 댓글을 작성해보세요!
            </Typo>
          </NoneItem>
        )}
      </CommentListBox>
    </CommentListWrapper>
  );
};

export default CommentList;
