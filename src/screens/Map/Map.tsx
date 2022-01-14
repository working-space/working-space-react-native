import React, { useRef } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import ListIcon from 'src/assets/icons/icon_list.svg';
import SmallPersonIcon from 'src/assets/icons/icon_small_person.svg';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import useGeocode from 'src/hooks/useGeocode';
import useGeolocation from 'src/hooks/useGeolocation';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';

import { MapStyled, mapViewStyle, SearchInput, IconWrapper, MapContainer } from './Map.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Map = ({ navigation }: Props) => {
  const mapRef = useRef(null);

  const { geolocation } = useGeolocation();
  const { geocode } = useGeocode(geolocation);

  return (
    <>
      <Header
        left={
          <Header.Button onPress={() => navigation.navigate('Main')}>
            <IconWrapper>
              <SmallPersonIcon />
            </IconWrapper>
          </Header.Button>
        }
        right={
          <Header.Button onPress={() => navigation.navigate('Main')}>
            <ListIcon />
          </Header.Button>
        }
      />
      <MapStyled>
        <SearchInput onPress={() => navigation.navigate('Main')}>
          <Typo type={FontType.REGULAR_14} color={GrayColor.GRAY_300}>
            현위치 : {geocode}
          </Typo>
        </SearchInput>
        <MapContainer>
          <MapView
            ref={mapRef}
            style={mapViewStyle}
            loadingEnabled={true}
            showsCompass={true}
            showsUserLocation={true}
            showsMyLocationButton={false}
            moveOnMarkerPress={false}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.498095,
              longitude: 127.02761,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009,
            }}
          />
        </MapContainer>
      </MapStyled>
    </>
  );
};

export default Map;
