import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { FBCollage } from 'react-native-fb-collage';
import Swiper from 'react-native-swiper';

import CloseWhiteIcon from 'src/assets/icons/icon_close_white.svg';
import LocationWhiteIcon from 'src/assets/icons/icon_small_location_white.svg';
import SmallTagWhiteIcon from 'src/assets/icons/icon_small_tag_white.svg';
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
  TotalView,
  CloseButton,
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

  const handleCloseButton = () => {
    setVisibleInput(-1);
  };

  const renderPagination = (index: number, total: number) => {
    return (
      <TotalView>
        <Typo type={FontType.BOLD_14} color={GrayColor.GRAY_0}>
          {index + 1} / {total}
        </Typo>
      </TotalView>
    );
  };

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
        onBackdropPress={handleCloseButton}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
      >
        <ImageGridModal>
          <CloseButton onPress={handleCloseButton}>
            <CloseWhiteIcon />
          </CloseButton>
          <Swiper index={visibleInput} renderPagination={renderPagination}>
            {images.map((image: string, index: number) => (
              <CardImage key={index}>
                <AutoFitImage source={{ uri: image }} />
              </CardImage>
            ))}
          </Swiper>
          <InfoBox>
            <Typo type={FontType.BOLD_18} color={GrayColor.GRAY_0}>
              {name}
            </Typo>
            <InfoBoxSubTitleView>
              <InfoBoxSubInfo start={true}>
                <LocationWhiteIcon />
                <Typo type={FontType.REGULAR_12} color={GrayColor.GRAY_0}>
                  {distance}
                </Typo>
              </InfoBoxSubInfo>
              <InfoBoxSubInfo>
                <SmallTagWhiteIcon />
                <Typo type={FontType.REGULAR_12} color={GrayColor.GRAY_0}>
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
