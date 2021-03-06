import React, { useRef, useState } from 'react';
import { View, Animated, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import MapIcon from 'src/assets/icons/icon_map.svg';
import MoreIcon from 'src/assets/icons/icon_more.svg';
import PersonWhiteIcon from 'src/assets/icons/icon_person_white.svg';
import SearchIcon from 'src/assets/icons/icon_search.svg';
import CafeListItem from 'src/components/CafeListItem/CafeListItem';
import ErrorView from 'src/components/ErrorView/ErrorView';
import FilterIllust from 'src/components/FilterIllust/FilterIllust';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import FILTER from 'src/constants/filter';
import useGeolocation from 'src/hooks/useGeolocation';
import { Cafe } from 'src/models/cafe';
import { RootStackParamList } from 'src/navigators/types';
import sampleCafeList from 'src/screens/sampleCafeList';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  cafeListStyle,
  Dimmed,
  DimmedArea,
  FilterSelect,
  FilterSelectItem,
  IconCircle,
  ListSeparator,
  MainStyled,
  MainContent,
  MainSafeArea,
  ScrolledListHeader,
  SearchInput,
  SearchInputRightIcon,
} from './Main.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({ navigation: { navigate } }: Props) => {
  const [currentFilter, setCurrentFilter] = useState(FILTER.NEAREST.id);
  const [isFilterSelectOpen, setFilterSelectOpen] = useState(false);

  const { isPermissionError } = useGeolocation();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const isError = false;

  const toggleFilterSelect = () => {
    setFilterSelectOpen((prevState) => !prevState);
  };

  const selectFilter = (filter: typeof currentFilter) => {
    setCurrentFilter(filter);
    setFilterSelectOpen(false);
  };

  const handleCardLinkPress = (cafe: Cafe) => {
    navigate('Detail', { cafeId: cafe.id });
  };

  return (
    <MainStyled>
      <MainSafeArea>
        <Header
          left={
            <Header.Button onPress={() => navigate('Profile')}>
              <IconCircle>
                <PersonWhiteIcon />
              </IconCircle>
            </Header.Button>
          }
          center={
            <Header.Button onPress={() => navigate('Address')}>
              <Typo type={FontType.BOLD_12}>????????? ????????? 10-234</Typo>
              <Typo.RightIcon>
                <MoreIcon />
              </Typo.RightIcon>
            </Header.Button>
          }
          right={
            <Header.Button onPress={() => navigate('Map')}>
              <MapIcon width="24" height="24" />
            </Header.Button>
          }
          bottom={
            isFilterSelectOpen && (
              <FilterSelect>
                <FilterSelectItem
                  active={currentFilter === FILTER.NEAREST.id}
                  onPress={() => selectFilter(FILTER.NEAREST.id)}
                >
                  <Typo type={currentFilter === FILTER.NEAREST.id ? FontType.BOLD_12 : FontType.REGULAR_12}>
                    {FILTER.NEAREST.name} ???
                  </Typo>
                </FilterSelectItem>
                <FilterSelectItem
                  active={currentFilter === FILTER.MANY_COMMENTS.id}
                  onPress={() => selectFilter(FILTER.MANY_COMMENTS.id)}
                >
                  <Typo type={currentFilter === FILTER.MANY_COMMENTS.id ? FontType.BOLD_12 : FontType.REGULAR_12}>
                    {FILTER.MANY_COMMENTS.name} ???
                  </Typo>
                </FilterSelectItem>
                <FilterSelectItem
                  active={currentFilter === FILTER.MANY_FAVORITES.id}
                  onPress={() => selectFilter(FILTER.MANY_FAVORITES.id)}
                >
                  <Typo type={currentFilter === FILTER.MANY_FAVORITES.id ? FontType.BOLD_12 : FontType.REGULAR_12}>
                    {FILTER.MANY_FAVORITES.name} ???
                  </Typo>
                </FilterSelectItem>
              </FilterSelect>
            )
          }
        />
      </MainSafeArea>
      <MainContent>
        {isFilterSelectOpen && (
          <Dimmed activeOpacity={1} onPress={toggleFilterSelect}>
            <DimmedArea />
          </Dimmed>
        )}
        <View>
          <SearchInput onPress={() => navigate('Search')}>
            <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_300}>
              ?????? ?????? ????????? ??????????????????!
            </Typo>
            <SearchInputRightIcon>
              <SearchIcon width="24" height="24" />
            </SearchInputRightIcon>
          </SearchInput>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ScrolledListHeader>
              <Typo type={FontType.BOLD_18}>??????????????? ?????? {FILTER[currentFilter].name} ???</Typo>
            </ScrolledListHeader>
          </Animated.View>
        </View>
        {isError ? (
          <ErrorView>
            <ErrorView.Heading>???!</ErrorView.Heading>
            <ErrorView.Message>?????? ????????? ???????????? ????????????!</ErrorView.Message>
            {isPermissionError && (
              <ErrorView.Message>?????? ????????? ???????????? ?????????{'\n'}?????? ????????? ??????????????????</ErrorView.Message>
            )}
            <ErrorView.RetryButton>
              <ErrorView.RetryText>?????? ????????????</ErrorView.RetryText>
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
                id,
                name,
                distance,
                address,
                tags: [],
                likeCount: 0,
                comments: { totalCount: 0, data: [] },
              };

              return <CafeListItem data={cafe} hasBorder onPress={() => handleCardLinkPress(cafe)} />;
            }}
            ListHeaderComponent={<FilterIllust filter={currentFilter} />}
            onEndReachedThreshold={0.5}
          />
        )}
      </MainContent>
    </MainStyled>
  );
};

export default Main;
