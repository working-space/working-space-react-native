import React, { useRef } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NaverMapView, { Marker } from 'react-native-nmap';

import ListIcon from 'src/assets/icons/icon_list.svg';
import MoreIcon from 'src/assets/icons/icon_more.svg';
import PersonWhiteIcon from 'src/assets/icons/icon_person_white.svg';
import mapPickerImage from 'src/assets/images/image_mappicker.png';
import mapPickerSelectImage from 'src/assets/images/image_mappicker_select.png';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import useGeolocation from 'src/hooks/useGeolocation';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';

import { MapStyled, SearchInput, IconWrapper, MapViewContainer, MapSafeArea, mapViewStyle } from './Map.styles';

const GANGNAM_STATION_COORDS = {
  latitude: 37.498095,
  longitude: 127.02761,
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Map'>;
}

const Map = ({ navigation }: Props) => {
  const mapRef = useRef<NaverMapView>(null);

  useGeolocation();

  return (
    <MapStyled>
      <MapSafeArea>
        <Header
          left={
            <Header.Button onPress={() => navigation.navigate('Main')}>
              <IconWrapper>
                <PersonWhiteIcon />
              </IconWrapper>
            </Header.Button>
          }
          center={
            <Header.Button onPress={() => navigation.navigate('Profile')}>
              <Typo type={FontType.BOLD_12}>관악구 신림동 10-234</Typo>
              <Typo.RightIcon>
                <MoreIcon />
              </Typo.RightIcon>
            </Header.Button>
          }
          right={
            <Header.Button onPress={() => navigation.navigate('Main')}>
              <ListIcon width="24" height="24" />
            </Header.Button>
          }
        />
        <SearchInput onPress={() => navigation.navigate('Search')}>
          <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_300}>
            찾고 있는 카페를 검색해보세요!
          </Typo>
        </SearchInput>
      </MapSafeArea>
      <MapViewContainer>
        <NaverMapView
          ref={mapRef}
          style={mapViewStyle}
          showsMyLocationButton={true}
          center={{ ...GANGNAM_STATION_COORDS, zoom: 16 }}
        >
          <Marker coordinate={GANGNAM_STATION_COORDS} image={mapPickerSelectImage} />
          <Marker coordinate={GANGNAM_STATION_COORDS} image={mapPickerImage} />
        </NaverMapView>
      </MapViewContainer>
    </MapStyled>
  );
};

export default Map;
