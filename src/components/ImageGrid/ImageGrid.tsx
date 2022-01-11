import React, { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { FBCollage } from 'react-native-fb-collage';

import CloseIcon from 'src/assets/icons/icon_close.svg';
import LocationWhiteIcon from 'src/assets/icons/icon_small_location_white.svg';
import SmallTagFillIcon from 'src/assets/icons/icon_small_tag_fill.svg';
import AutoFitImage from 'src/components/AutoFitImage/AutoFitImage';
import CustomModal from 'src/components/CustomModal/CustomModal';
import NoneImage from 'src/components/NoneImage/NoneImage';
import Typo from 'src/components/Typo/Typo';
import { Tag } from 'src/models/tag';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  ImageWrapper,
  ImageGridModal,
  CardImage,
  ImageGridModalHeader,
  TotalView,
  CloseButton,
  CardImageStyled,
  InfoBox,
  InfoBoxSubTitleView,
  InfoBoxSubInfo,
} from './ImageGrid.styles';

interface Props {
  name?: string;
  distance: string;
  tags: Tag[];
  images: string[];
}

const ImageGrid = ({ name, distance, tags, images }: Props) => {
  const [visibleInput, setVisibleInput] = useState<number>(-1);

  const handleCloseButton = useCallback(() => {
    setVisibleInput(-1);
  }, []);

  if (!images.length) {
    return (
      <ImageWrapper>
        <NoneImage />
      </ImageWrapper>
    );
  }

  return (
    <>
      <ImageWrapper>
        <FBCollage
          images={images}
          imageOnPress={(index) => {
            setVisibleInput(index);
          }}
          width={Dimensions.get('window').width}
          height={150}
          spacing={2}
          borderRadius={2}
        />
      </ImageWrapper>
      <CustomModal
        isVisible={visibleInput !== -1}
        backdropOpacity={1}
        onBackdropPress={() => handleCloseButton()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <ImageGridModal>
          <ImageGridModalHeader>
            <TotalView>
              <Typo type={FontType.BOLD_BODY_01} color={GrayColor.GRAY_0}>
                {visibleInput + 1} / {images.length}
              </Typo>
            </TotalView>
            <CloseButton onPress={handleCloseButton}>
              <CloseIcon fill={GrayColor.GRAY_0} />
            </CloseButton>
          </ImageGridModalHeader>
          <CardImageStyled>
            {images.map((image: string, index: number) => (
              <CardImage key={index}>
                <AutoFitImage source={{ uri: image }} />
              </CardImage>
            ))}
          </CardImageStyled>
          <InfoBox>
            <Typo type={FontType.BOLD_TITLE_01} color={GrayColor.GRAY_0}>
              {name}
            </Typo>
            <InfoBoxSubTitleView>
              <InfoBoxSubInfo start={true}>
                <LocationWhiteIcon fill={GrayColor.GRAY_0} />
                <Typo type={FontType.REGULAR_BODY_02} color={GrayColor.GRAY_0}>
                  {distance}
                </Typo>
              </InfoBoxSubInfo>
              <InfoBoxSubInfo>
                <SmallTagFillIcon fill={GrayColor.GRAY_0} />
                <Typo type={FontType.REGULAR_BODY_02} color={GrayColor.GRAY_0}>
                  태그 {tags.length}개
                </Typo>
              </InfoBoxSubInfo>
            </InfoBoxSubTitleView>
          </InfoBox>
        </ImageGridModal>
      </CustomModal>
    </>
  );
};

export default ImageGrid;
