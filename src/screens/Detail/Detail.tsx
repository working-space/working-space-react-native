import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TextInput, Share } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BackIcon from 'src/assets/icons/icon_back.svg';
import BookmarkIcon from 'src/assets/icons/icon_bookmark.svg';
import BookmarkFillIcon from 'src/assets/icons/icon_bookmark_fill.svg';
import CloseGrayIcon from 'src/assets/icons/icon_close_gray.svg';
import FavoriteIcon from 'src/assets/icons/icon_favorite.svg';
import FavoriteFillIcon from 'src/assets/icons/icon_favorite_fill.svg';
import ShareIcon from 'src/assets/icons/icon_share.svg';
import LocationGrayIcon from 'src/assets/icons/icon_small_location_gray.svg';
import SmallTagGrayIcon from 'src/assets/icons/icon_small_tag_gray.svg';
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
import { TagName } from 'src/models/tag';
import { RootStackParamList } from 'src/navigators/types';
import sampleCafeList from 'src/screens/sampleCafeList';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  LinkIconStyled,
  LinkIconItem,
  linkIconTextStyle,
  DetailStyled,
  DetailView,
  DetailTitleStyled,
  headTitleStyle,
  TitleInfo,
  TitleInfoItem,
  titleInfoItemTextStyle,
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
  const [preferredTags, setPreferredTags] = useState<TagName[]>([]);
  const { selectedTags, setSelectedTags, toggleTag } = useSelectedTags([]);
  const [currentCommentId, setCurrentCommentId] = useState<string | null>();
  const inputRef = useRef<TextInput>(null);

  const noneText = '정보없음';
  const comments = {
    totalCount: 1,
    data: [
      { id: '1', userId: 'jiwon', content: 'ㅎㅎㅎ', updatedAt: '2021.10.21 13:13' },
      { id: '2', userId: 'jiwon2', content: '잼따ㅎㅎㅎ', updatedAt: '2021.10.21 13:13' },
      { id: '3', userId: 'jiwon3', content: '굿ㅎㅎㅎ', updatedAt: '2021.10.21 13:13' },
    ],
  };

  useEffect(() => {
    sampleCafeList.map((value) => {
      if (value.id === cafeId) {
        setCafeData(value);
      }
    });
  }, [cafeId]);

  const handleLikeButtonPress = () => {
    setLikeState((prev) => !prev);
  };

  const handleBookmarkButtonPress = () => {
    setBookmarkState((prev) => !prev);
  };

  const handleShareButtonPress = async () => {
    try {
      const result = await Share.share({
        title: cafeData?.name ?? '',
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

  const handleCopyToClipboard = (address: string | null) => {};

  const handleSubmitButton = () => {
    setVisibleInput(null);
    setPreferredTags([...selectedTags]);
  };

  const handleSetTagsModal = () => {
    setVisibleInput('Tags');
  };

  const handleSetCommentText = (text: string) => {
    handleCloseButton();
  };

  const handleDeleteComment = () => {
    handleCloseButton();
  };

  const handleSetCommentTextModal = () => {
    setVisibleInput('Comments');
  };

  const handleCommentOptionModal = (commentId: string) => {
    setVisibleInput('CommentOption');
    setCurrentCommentId(commentId);
  };

  const handleCloseButton = useCallback(() => {
    setVisibleInput(null);
    setCurrentCommentId(null);
    setSelectedTags([...preferredTags]);
  }, [preferredTags, setSelectedTags]);

  if (!cafeData) {
    return (
      <>
        <Header
          showBorderBottom={true}
          left={
            <Header.Button onPress={goBack}>
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
          <Header.Button onPress={goBack}>
            <BackIcon />
          </Header.Button>
        }
        right={
          <LinkIconStyled>
            <LinkIconItem onPress={handleLikeButtonPress}>
              {likeState ? <FavoriteFillIcon width="24" height="24" /> : <FavoriteIcon width="24" height="24" />}
              <Typo type={FontType.BOLD_14} style={linkIconTextStyle}>
                {cafeData.likeCount}
              </Typo>
            </LinkIconItem>
            <LinkIconItem onPress={handleBookmarkButtonPress}>
              {bookmarkState ? <BookmarkFillIcon width="24" height="24" /> : <BookmarkIcon width="24" height="24" />}
            </LinkIconItem>
            <LinkIconItem onPress={handleShareButtonPress}>
              <ShareIcon width="24" height="24" />
            </LinkIconItem>
          </LinkIconStyled>
        }
      />
      <DetailView>
        <DetailTitleStyled>
          <Typo type={FontType.BOLD_24} style={headTitleStyle}>
            {cafeData.name}
          </Typo>
          <TitleInfo>
            <TitleInfoItem start={true}>
              <LocationGrayIcon fill={GrayColor.GRAY_400} />
              <Typo type={FontType.REGULAR_12} style={titleInfoItemTextStyle}>
                {cafeData.distance}
              </Typo>
            </TitleInfoItem>
            <TitleInfoItem>
              <SmallTagGrayIcon />
              <Typo type={FontType.REGULAR_12} style={titleInfoItemTextStyle}>
                태그 {cafeData.tags?.length ?? 0}개
              </Typo>
            </TitleInfoItem>
          </TitleInfo>
        </DetailTitleStyled>
        <ImageGrid name={cafeData.name} distance={'1km'} tags={cafeData.tags} images={cafeData.imageURLs} />
        <DetailInfoStyled>
          <DetailInfoBox>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_12} color={GrayColor.GRAY_300}>
                  주소
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.address === null ? (
                <Typo type={FontType.REGULAR_12}>{noneText}</Typo>
              ) : (
                <DetailInfoBoxCopy onPress={() => handleCopyToClipboard(cafeData.address)}>
                  <Typo type={FontType.REGULAR_12}>{cafeData.address}</Typo>
                </DetailInfoBoxCopy>
              )}
            </DetailInfoBoxItem>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_12} color={GrayColor.GRAY_300}>
                  영업시간
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.hours === null ? (
                <Typo type={FontType.REGULAR_12}>{noneText}</Typo>
              ) : (
                <DetailInfoBoxStyled>
                  {cafeData.hours?.map((hour, index) => (
                    <Typo type={FontType.REGULAR_12} key={index}>
                      {hour}
                    </Typo>
                  ))}
                </DetailInfoBoxStyled>
              )}
            </DetailInfoBoxItem>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_12} color={GrayColor.GRAY_300}>
                  휴무일
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.closed === null ? (
                <Typo type={FontType.REGULAR_12}>{noneText}</Typo>
              ) : (
                <Typo type={FontType.REGULAR_12}>{cafeData.closed}</Typo>
              )}
            </DetailInfoBoxItem>
            <DetailInfoBoxItem>
              <DetailInfoBoxTitle>
                <Typo type={FontType.BOLD_12} color={GrayColor.GRAY_300}>
                  전화번호
                </Typo>
              </DetailInfoBoxTitle>
              {cafeData.phone === null ? (
                <Typo type={FontType.REGULAR_12}>{noneText}</Typo>
              ) : (
                <Typo type={FontType.REGULAR_12}>{cafeData.phone}</Typo>
              )}
            </DetailInfoBoxItem>
          </DetailInfoBox>
        </DetailInfoStyled>
        <DetailLocationStyled>
          <DetailLocationBox>
            <Typo type={FontType.BOLD_16}>위치</Typo>
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
        onBackdropPress={handleCloseButton}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <SelectTagModal>
          <SelectTagModalHeader>
            <SelectTagModalTop>
              <CloseButton onPress={handleCloseButton}>
                <CloseGrayIcon />
              </CloseButton>
            </SelectTagModalTop>
            <SelectTagModalBottom>
              <Typo type={FontType.BOLD_18}>작업공간으로{'\n'}적절한 태그를 선택해주세요!</Typo>
            </SelectTagModalBottom>
          </SelectTagModalHeader>
          <SetTags preferTags={selectedTags} onToggleTag={toggleTag} />
          <SelectTagModalSubmitButton
            onPress={handleSubmitButton}
            selected={preferredTags.length > 0 || selectedTags.length > 0}
          >
            <Typo type={FontType.BOLD_14} color={GrayColor.GRAY_0}>
              {preferredTags.length > 0 || selectedTags.length > 0
                ? `태그 ${selectedTags ? selectedTags.length : preferredTags.length}개 선택! 평가 등록하기`
                : '태그가 선택되지 않았어요.'}
            </Typo>
          </SelectTagModalSubmitButton>
        </SelectTagModal>
      </CustomModal>
      <CustomModal
        isVisible={visibleInput === 'Comments'}
        backdropOpacity={0.3}
        onBackdropPress={handleCloseButton}
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
        onBackdropPress={handleCloseButton}
        animationIn="fadeIn"
        animationOut="fadeOut"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <CommentOptionStyled>
          <CommentOptionItem onPress={handleDeleteComment}>
            <Typo type={FontType.REGULAR_14}>삭제하기</Typo>
          </CommentOptionItem>
        </CommentOptionStyled>
      </CustomModal>
    </DetailStyled>
  );
};

export default Detail;
