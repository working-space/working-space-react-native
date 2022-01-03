import React, { memo } from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';

import CommentIcon from 'src/assets/icons/icon_comment.svg';
import EditIcon from 'src/assets/icons/icon_edit.svg';
import FavoriteIcon from 'src/assets/icons/icon_favorite.svg';
import LocationIcon from 'src/assets/icons/icon_small_location_fill.svg';
import Typo from 'src/components/Typo/Typo';
import TAG from 'src/constants/tag';
import Cafe from 'src/models/cafe';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  Address,
  Badge,
  BadgeList,
  Distance,
  Info,
  InfoCount,
  InfoList,
  ItemHeader,
  ItemHeaderRight,
  ItemStyled,
  Tag,
  TagEmpty,
  TagIcon,
  tagListStyle,
  TagSeparator,
  TagSeparatorContainer,
} from './CafeListItem.styles';

interface Props extends TouchableOpacityProps {
  data: Cafe;
  hasBorder?: boolean;
}

const CafeListItem = memo(({ data, hasBorder = false, ...props }: Props) => {
  const { title, distance, address, tags, badges, favoriteCount, commentCount } = data;

  return (
    <ItemStyled hasBorder={hasBorder} {...props}>
      <BadgeList>
        {badges &&
          badges.length > 0 &&
          badges.map((badge) => (
            <Badge key={badge}>
              <Typo type={FontType.BOLD_CAPTION} color={GrayColor.GRAY_0}>
                {badge}
              </Typo>
            </Badge>
          ))}
      </BadgeList>
      <ItemHeader>
        <Typo type={FontType.BOLD_TITLE_01}>{title}</Typo>
        <ItemHeaderRight>
          {distance && (
            <>
              <LocationIcon />
              <Distance>
                <Typo type={FontType.REGULAR_BODY_02}>{distance}</Typo>
              </Distance>
            </>
          )}
        </ItemHeaderRight>
      </ItemHeader>
      <Address>
        <Typo type={FontType.REGULAR_CAPTION} color={GrayColor.GRAY_300}>
          {address}
        </Typo>
      </Address>
      {tags && tags.length > 0 ? (
        <FlatList
          horizontal
          contentContainerStyle={tagListStyle}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <TagSeparatorContainer>
              <TagSeparator />
            </TagSeparatorContainer>
          )}
          data={tags}
          keyExtractor={(tag) => TAG[tag].name}
          renderItem={({ item }) => (
            <Tag>
              <TagIcon>{TAG[item].icon}</TagIcon>
              <Typo type={FontType.REGULAR_CAPTION}>{TAG[item].name}</Typo>
            </Tag>
          )}
        />
      ) : (
        <TagEmpty>
          <EditIcon />
          <Typo type={FontType.REGULAR_CAPTION} color={GrayColor.GRAY_300}>
            지금 첫번째 태그를 등록해보세요
          </Typo>
        </TagEmpty>
      )}
      <InfoList>
        <Info>
          <FavoriteIcon />
          <InfoCount>
            <Typo type={FontType.REGULAR_BODY_02}>{favoriteCount !== undefined ? favoriteCount : 0}</Typo>
          </InfoCount>
        </Info>
        <Info>
          <CommentIcon />
          <InfoCount>
            <Typo type={FontType.REGULAR_BODY_02}>{commentCount !== undefined ? commentCount : 0}</Typo>
          </InfoCount>
        </Info>
      </InfoList>
    </ItemStyled>
  );
});

export default CafeListItem;
