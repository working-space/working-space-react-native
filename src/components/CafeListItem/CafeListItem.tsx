import React, { memo } from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';

import CommentIcon from 'src/assets/icons/icon_comment.svg';
import EditIcon from 'src/assets/icons/icon_edit.svg';
import FavoriteIcon from 'src/assets/icons/icon_favorite.svg';
import LocationIcon from 'src/assets/icons/icon_small_location_fill.svg';
import TAG from 'src/constants/tag';
import Cafe from 'src/models/cafe';
import {
  Address,
  Badge,
  BadgeList,
  BadgeText,
  Distance,
  Info,
  InfoCount,
  InfoList,
  ItemHeader,
  ItemHeaderRight,
  ItemStyled,
  Tag,
  TagEmpty,
  TagEmptyText,
  TagIcon,
  tagListStyle,
  TagName,
  TagSeparator,
  TagSeparatorContainer,
  Title,
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
              <BadgeText>{badge}</BadgeText>
            </Badge>
          ))}
      </BadgeList>
      <ItemHeader>
        <Title>{title}</Title>
        <ItemHeaderRight>
          {distance && (
            <>
              <LocationIcon />
              <Distance>{distance}</Distance>
            </>
          )}
        </ItemHeaderRight>
      </ItemHeader>
      <Address>{address}</Address>
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
              <TagName>{TAG[item].name}</TagName>
            </Tag>
          )}
        />
      ) : (
        <TagEmpty>
          <EditIcon />
          <TagEmptyText>지금 첫번째 태그를 등록해보세요</TagEmptyText>
        </TagEmpty>
      )}
      <InfoList>
        <Info>
          <FavoriteIcon />
          <InfoCount>{favoriteCount !== undefined ? favoriteCount : 0}</InfoCount>
        </Info>
        <Info>
          <CommentIcon />
          <InfoCount>{commentCount !== undefined ? commentCount : 0}</InfoCount>
        </Info>
      </InfoList>
    </ItemStyled>
  );
});

export default CafeListItem;
