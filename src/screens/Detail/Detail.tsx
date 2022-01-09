import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TextInput, Share } from 'react-native';
import { css } from '@emotion/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import BookmarkIcon from 'src/assets/icons/icon_bookmark.svg';
import BookmarkFillIcon from 'src/assets/icons/icon_bookmark_fill.svg';
import CloseIcon from 'src/assets/icons/icon_close.svg';
import FavoriteIcon from 'src/assets/icons/icon_favorite.svg';
import FavoriteFillIcon from 'src/assets/icons/icon_favorite_fill.svg';
import ShareIcon from 'src/assets/icons/icon_share.svg';
import LocationGrayIcon from 'src/assets/icons/icon_small_location_gray.svg';
import SmallTagIcon from 'src/assets/icons/icon_small_tag_fill.svg';
import CommentList from 'src/components/CommentList/CommentList';
import CustomModal from 'src/components/CustomModal/CustomModal';
import CustomTextInput from 'src/components/CustomTextInput/CustomTextInput';
import Header from 'src/components/Header/Header';
import ImageGrid from 'src/components/ImageGrid/ImageGrid';
import LoadingBar from 'src/components/Loading/Loading';
import SetTags from 'src/components/SetTags/SetTags';
import TagList from 'src/components/TagList/TagList';
import Typo from 'src/components/Typo/Typo';
import useSelectedTags from 'src/hooks/useSelectedTags';
import { CafeDetail } from 'src/models/cafe';
import { Tag } from 'src/models/tag';
import { RootStackParamList } from 'src/navigators/types';
import sampleCafeList from 'src/screens/sampleCafeList';
import { GrayColor, PrimaryColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  LinkIconStyled,
  LinkIconItem,
  LinkIconText,
  DetailStyled,
  DetailView,
  DetailTitleStyled,
  HeadTitle,
  TitleInfo,
  TitleInfoItem,
  TitleInfoItemText,
  DetailInfoStyled,
  DetailInfoBox,
  DetailInfoBoxItem,
  DetailInfoBoxTitle,
  DetailInfoBoxStyled,
  DetailInfoBoxCopy,
  DetailLocationStyled,
  DetailLocationBox,
  LocationMap,
  SelectTagModal,
  SelectTagModalHeader,
  SelectTagModalTop,
  SelectTagModalBottom,
  SelectTagModalSubmitButton,
  CloseButton,
  CommentOptionStyled,
  CommentOptionItem,
} from './Detail.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail = ({ navigation: { goBack }, route }: Props) => {
  const { cafeId } = route.params;
  const [cafeData, setCafeData] = useState<CafeDetail>();
  const [likeState, setLikeState] = useState(false);
  const [bookmarkState, setBookmarkState] = useState(false);

  const [visibleInput, setVisibleInput] = useState<'Tags' | 'Comments' | 'CommentOption' | null>(null);
  const [preferredTags, setPreferredTags] = useState<Tag[]>([]);
  const [currentCommentId, setCurrentCommentId] = useState<string | null>();
  const { selectedTags, setSelectedTags, toggleTag } = useSelectedTags([]);
  const inputRef = useRef<TextInput>(null);

  const noneText = '정보없음';
  const comments = {
    totalCount: 1,
    data: [{ id: '1', userId: 'jiwon', content: 'ㅎㅎㅎ', updatedAt: '2021.10.21 13:13' }],
  };

  useEffect(() => {
    sampleCafeList.map((value) => {
      if (value.id === cafeId) {
        setCafeData(value);
      }
    });
  }, [cafeId]);

  useEffect(() => {
    console.log(preferredTags);
  }, [preferredTags]);

  const handleLikeButtonClick = () => {
    setLikeState((prev) => !prev);
  };

  const handleBookmarkButtonClick = () => {
    setBookmarkState((prev) => !prev);
  };

  const handleShareButtonClick = async () => {
    try {
      const result = await Share.share({
        title: cafeData?.name,
        message: '작업하기 좋은 카페를 추천합니다!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyToClipboard = (address: string | null) => {
    console.log('copy: ', address);
  };

  const handleSetTagsModal = () => {
    setVisibleInput('Tags');
  };

  const handleSetCommentText = (text: string) => {
    handleCloseButton();
    console.log(text);
  };

  const handleDeleteComment = () => {
    handleCloseButton();
    console.log(currentCommentId);
  };

  const handleSetCommentTextModal = () => {
    setVisibleInput('Comments');
  };

  const handleCommentOptionModal = (commentId: string) => {
    setVisibleInput('CommentOption');
    setCurrentCommentId(commentId);
  };

  const handleSubmitButton = () => {
    setVisibleInput(null);
    setPreferredTags([...selectedTags]);
  };

  const handleCloseButton = useCallback(() => {
    setVisibleInput(null);
    setCurrentCommentId(null);
    setSelectedTags([...preferredTags]);
  }, [preferredTags, setSelectedTags]);

  if (cafeData === undefined) {
    return (
      <>
        <Header
          showBorderBottom={true}
          left={
            <Header.Button onPress={() => goBack()}>
              <BackIcon />
            </Header.Button>
          }
        />
        <LoadingBar />
      </>
    );
  }

  return (
    <DetailStyled>
      <Header
        showBorderBottom={true}
        left={
          <Header.Button onPress={() => goBack()}>
            <BackIcon />
          </Header.Button>
        }
        right={
          <LinkIconStyled>
            <LinkIconItem onPress={handleLikeButtonClick}>
              {likeState ? <FavoriteFillIcon width="24" height="24" /> : <FavoriteIcon width="24" height="24" />}
              <Typo type={FontType.BOLD_BODY_01} style={LinkIconText}>
                {cafeData.likeCount}
              </Typo>
            </LinkIconItem>
            <LinkIconItem onPress={handleBookmarkButtonClick}>
              {bookmarkState ? <BookmarkFillIcon width="24" height="24" /> : <BookmarkIcon width="24" height="24" />}
            </LinkIconItem>
            <LinkIconItem onPress={handleShareButtonClick}>
              <ShareIcon width="24" height="24" />
            </LinkIconItem>
          </LinkIconStyled>
        }
      />
      <DetailView>
        <DetailTitleStyled>
          <Typo type={FontType.BOLD_HEAD} style={HeadTitle}>
            {cafeData.name}
          </Typo>
          <TitleInfo>
            <TitleInfoItem start={true}>
              <LocationGrayIcon fill={GrayColor.GRAY_400} />
              <Typo type={FontType.REGULAR_BODY_02} style={TitleInfoItemText}>
                {cafeData.distance}
              </Typo>
            </TitleInfoItem>
            <TitleInfoItem>
              <SmallTagIcon fill={GrayColor.GRAY_400} />
              <Typo type={FontType.REGULAR_BODY_02} style={TitleInfoItemText}>
                태그 {cafeData.tags?.length ?? 0}개
              </Typo>
            </TitleInfoItem>
          </TitleInfo>
        </DetailTitleStyled>
        {/* TODO: 이미지 슬라이드 애니메이션 구현 */}
        <ImageGrid name={cafeData.name} distance={'1km'} tags={cafeData.tags} images={cafeData.imageURLs} />
        <DetailInfoStyled>
          <DetailInfoBox>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_BODY_02} color={GrayColor.GRAY_300}>
                  주소
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.address === '' ? (
                <Typo type={FontType.REGULAR_BODY_02}>{noneText}</Typo>
              ) : (
                <DetailInfoBoxCopy onPress={() => handleCopyToClipboard(cafeData.address)}>
                  <Typo type={FontType.REGULAR_BODY_02}>{cafeData.address}</Typo>
                </DetailInfoBoxCopy>
              )}
            </DetailInfoBoxItem>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_BODY_02} color={GrayColor.GRAY_300}>
                  영업시간
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.hours === null ? (
                <Typo type={FontType.REGULAR_BODY_02}>{noneText}</Typo>
              ) : (
                <DetailInfoBoxStyled>
                  {cafeData.hours?.map((hour, index) => (
                    <Typo type={FontType.REGULAR_BODY_02} key={index}>
                      {hour}
                    </Typo>
                  ))}
                </DetailInfoBoxStyled>
              )}
            </DetailInfoBoxItem>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_BODY_02} color={GrayColor.GRAY_300}>
                  휴무일
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.closed === null ? (
                <Typo type={FontType.REGULAR_BODY_02}>{noneText}</Typo>
              ) : (
                <Typo type={FontType.REGULAR_BODY_02}>{cafeData.closed}</Typo>
              )}
            </DetailInfoBoxItem>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_BODY_02} color={GrayColor.GRAY_300}>
                  전화번호
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.phone === null ? (
                <Typo type={FontType.REGULAR_BODY_02}>{noneText}</Typo>
              ) : (
                <Typo type={FontType.REGULAR_BODY_02}>{cafeData.phone}</Typo>
              )}
            </DetailInfoBoxItem>
          </DetailInfoBox>
        </DetailInfoStyled>
        <DetailLocationStyled>
          <DetailLocationBox>
            <Typo type={FontType.BOLD_TITLE_02}>위치</Typo>
            {/* TODO : 지도 뷰 적용 */}
            <LocationMap />
          </DetailLocationBox>
        </DetailLocationStyled>
        <TagList tags={cafeData.tags} preferTags={preferredTags} onSetTagsModal={handleSetTagsModal} />
        <CommentList
          comments={comments}
          commentsCount={1}
          hasNextComments={false}
          userComments={[{ id: '1', userId: 'jiwon', content: 'ㅎㅎㅎ', updatedAt: '2021.10.21 13:13' }]}
          onSetCommentTextModal={handleSetCommentTextModal}
          onCommentOptionModal={handleCommentOptionModal}
        />
      </DetailView>
      <CustomModal
        isVisible={visibleInput === 'Tags'}
        backdropOpacity={1}
        onBackdropPress={() => handleCloseButton()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        {/* TODO: 태그 등록 점검 */}
        <SelectTagModal>
          <SelectTagModalHeader>
            <SelectTagModalTop>
              <CloseButton onPress={handleCloseButton}>
                <CloseIcon fill={GrayColor.GRAY_400} />
              </CloseButton>
            </SelectTagModalTop>
            <SelectTagModalBottom>
              <Typo type={FontType.BOLD_TITLE_01}>작업공간으로{'\n'}적절한 태그를 선택해주세요!</Typo>
            </SelectTagModalBottom>
          </SelectTagModalHeader>
          <SetTags preferTags={selectedTags} onToggleTag={toggleTag} />
          <SelectTagModalSubmitButton
            onPress={handleSubmitButton}
            style={css`
              background-color: ${preferredTags.length > 0 && selectedTags.length > 0
                ? PrimaryColor.PRIMARY_500
                : GrayColor.GRAY_200};
            `}
          >
            <Typo type={FontType.BOLD_BODY_01} color={GrayColor.GRAY_0}>
              {preferredTags.length > 0 && selectedTags.length > 0
                ? `태그 ${selectedTags ? selectedTags.length : preferredTags.length}개 선택! 평가 등록하기`
                : '태그가 선택되지 않았어요.'}
            </Typo>
          </SelectTagModalSubmitButton>
        </SelectTagModal>
      </CustomModal>
      {/* TODO: 백그라운드 클릭 이벤트, 키보드 올라오지 않는 이슈 점검 */}
      <CustomModal
        isVisible={visibleInput === 'Comments'}
        backdropOpacity={0.3}
        onBackdropPress={() => handleCloseButton()}
        onShow={() => inputRef.current?.focus()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <CustomTextInput type="comment" onSetInputText={handleSetCommentText} inputRef={inputRef} />
      </CustomModal>
      <CustomModal
        isVisible={visibleInput === 'CommentOption'}
        backdropOpacity={0.3}
        onBackdropPress={() => handleCloseButton()}
        animationIn="fadeIn"
        animationOut="fadeOut"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <CommentOptionStyled>
          <CommentOptionItem onPress={handleDeleteComment}>
            <Typo type={FontType.REGULAR_BODY_01}>삭제하기</Typo>
          </CommentOptionItem>
        </CommentOptionStyled>
      </CustomModal>
    </DetailStyled>
  );
};

export default Detail;
