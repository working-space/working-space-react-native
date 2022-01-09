import React, { useRef, useState } from 'react';
import { View, Animated, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import DropDownArrowIcon from 'src/assets/icons/icon_dropdown_arrow.svg';
import MapIcon from 'src/assets/icons/icon_map.svg';
import SmallPersonIcon from 'src/assets/icons/icon_small_person.svg';
import CafeListItem from 'src/components/CafeListItem/CafeListItem';
import ErrorView from 'src/components/ErrorView/ErrorView';
import FilterIllust from 'src/components/FilterIllust/FilterIllust';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import FILTER from 'src/constants/filter';
import { Cafe } from 'src/models/cafe';
import { RootStackParamList } from 'src/navigators/types';
import sampleCafeList from 'src/screens/sampleCafeList';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  cafeListStyle,
  Dimmed,
  DimmedArea,
  FilterChangeButton,
  FilterChangeButtonText,
  FilterSelect,
  FilterSelectItem,
  IconWrapper,
  ListSeparator,
  MainStyled,
  ScrolledListHeader,
  SearchInput,
} from './Main.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({ navigation: { navigate } }: Props) => {
  const [currentFilter, setCurrentFilter] = useState(FILTER.NEAREST.id);
  const [isFilterSelectOpen, setFilterSelectOpen] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const geocode = '서울시';
  const isError = false;
  const permissionStatus = 'denied';

  const toggleFilterSelect = () => {
    setFilterSelectOpen((prevState) => !prevState);
  };

  const selectFilter = (filter: typeof currentFilter) => {
    setCurrentFilter(filter);
    setFilterSelectOpen(false);
  };

  const handleCardLinkClick = (cafe: Cafe) => {
    navigate('Detail', { cafeId: cafe.id });
  };

  return (
    <>
      <Header
        left={
          <Header.Button onPress={() => navigate('Main')}>
            <IconWrapper>
              <SmallPersonIcon />
            </IconWrapper>
          </Header.Button>
        }
        right={
          <>
            <FilterChangeButton onPress={toggleFilterSelect}>
              <FilterChangeButtonText>
                <Typo
                  type={isFilterSelectOpen ? FontType.BOLD_BODY_02 : FontType.REGULAR_BODY_02}
                  color={GrayColor.GRAY_400}
                >
                  {FILTER[currentFilter].name} 순
                </Typo>
              </FilterChangeButtonText>
              <DropDownArrowIcon />
            </FilterChangeButton>
            <Header.Button onPress={() => navigate('Main')}>
              <MapIcon />
            </Header.Button>
          </>
        }
        bottom={
          isFilterSelectOpen && (
            <FilterSelect>
              <FilterSelectItem
                active={currentFilter === FILTER.NEAREST.id}
                onPress={() => selectFilter(FILTER.NEAREST.id)}
              >
                <Typo type={currentFilter === FILTER.NEAREST.id ? FontType.BOLD_BODY_02 : FontType.REGULAR_BODY_02}>
                  {FILTER.NEAREST.name} 순
                </Typo>
              </FilterSelectItem>
              <FilterSelectItem
                active={currentFilter === FILTER.MANY_COMMENTS.id}
                onPress={() => selectFilter(FILTER.MANY_COMMENTS.id)}
              >
                <Typo
                  type={currentFilter === FILTER.MANY_COMMENTS.id ? FontType.BOLD_BODY_02 : FontType.REGULAR_BODY_02}
                >
                  {FILTER.MANY_COMMENTS.name} 순
                </Typo>
              </FilterSelectItem>
              <FilterSelectItem
                active={currentFilter === FILTER.MANY_FAVORITES.id}
                onPress={() => selectFilter(FILTER.MANY_FAVORITES.id)}
              >
                <Typo
                  type={currentFilter === FILTER.MANY_FAVORITES.id ? FontType.BOLD_BODY_02 : FontType.REGULAR_BODY_02}
                >
                  {FILTER.MANY_FAVORITES.name} 순
                </Typo>
              </FilterSelectItem>
            </FilterSelect>
          )
        }
      />
      {isFilterSelectOpen && (
        <Dimmed activeOpacity={1} onPress={toggleFilterSelect}>
          <DimmedArea />
        </Dimmed>
      )}
      <MainStyled>
        <View>
          <SearchInput onPress={() => navigate('Main')}>
            <Typo type={FontType.REGULAR_BODY_01} color={GrayColor.GRAY_300}>
              현위치 : {geocode}
            </Typo>
          </SearchInput>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ScrolledListHeader>
              <Typo type={FontType.BOLD_TITLE_01}>현위치에서 가장 {FILTER[currentFilter].name} 곳</Typo>
            </ScrolledListHeader>
          </Animated.View>
        </View>
        {isError ? (
          <ErrorView>
            <ErrorView.Heading>앗!</ErrorView.Heading>
            <ErrorView.Message>카페 목록을 불러오지 못했어요!</ErrorView.Message>
            {permissionStatus === 'denied' && (
              <ErrorView.Message>카페 목록을 불러오기 위해서{'\n'}위치 권한을 허용해주세요</ErrorView.Message>
            )}
            <ErrorView.RetryButton>
              <ErrorView.RetryText>다시 시도하기</ErrorView.RetryText>
            </ErrorView.RetryButton>
          </ErrorView>
        ) : (
          <FlatList
            contentContainerStyle={cafeListStyle}
            data={sampleCafeList}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <ListSeparator />}
            renderItem={({ item }) => {
              const { id, name, address } = item;
              const distance = '1m';

              const cafe = {
                id: id,
                title: name,
                distance,
                address: address,
                tags: [],
                badges: [],
              };

              return <CafeListItem data={cafe} hasBorder onPress={() => handleCardLinkClick(cafe)} />;
            }}
            ListHeaderComponent={<FilterIllust filter={currentFilter} />}
            onEndReachedThreshold={0.5}
          />
        )}
      </MainStyled>
    </>
  );
};

export default Main;
