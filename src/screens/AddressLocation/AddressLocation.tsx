import React, { useRef } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NaverMapView, { Marker } from 'react-native-nmap';

import BackIcon from 'src/assets/icons/icon_back.svg';
import EmptyIcon from 'src/assets/icons/icon_empty.svg';
import LocateActiveIcon from 'src/assets/icons/icon_locate_active.svg';
import mapPickerSelectImage from 'src/assets/images/image_mappicker_select.png';
import Header from 'src/components/Header/Header';
import Typo from 'src/components/Typo/Typo';
import useGeolocation from 'src/hooks/useGeolocation';
import { RootStackParamList } from 'src/navigators/types';
import { GrayColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import {
  mapViewStyle,
  AddressLocationStyled,
  AddressLocationSafeArea,
  FloatingActionButton,
  MapContainer,
  MapSafeArea,
  AddressContent,
  AddressSubmitButton,
  AddressTypoWrapper,
  ButtonWrapper,
  typoStyle,
} from './AddressLocation.styles';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const AddressLocation = ({ navigation: { goBack } }: Props) => {
  const mapRef = useRef<NaverMapView>(null);
  const { geolocation } = useGeolocation();

  return (
    <AddressLocationStyled>
      <AddressLocationSafeArea>
        <Header
          left={
            <Header.Button onPress={goBack}>
              <BackIcon width={24} height={24} />
            </Header.Button>
          }
          center={<Typo type={FontType.REGULAR_16}>지도에서 위치 확인</Typo>}
          right={
            <Header.Button>
              <EmptyIcon width={24} height={24} />
            </Header.Button>
          }
        />
      </AddressLocationSafeArea>
      <MapContainer>
        {geolocation ? (
          <NaverMapView
            ref={mapRef}
            style={mapViewStyle}
            zoomControl={false}
            liteModeEnabled={true}
            tiltGesturesEnabled={false}
            stopGesturesEnabled={false}
            zoomGesturesEnabled={false}
            rotateGesturesEnabled={false}
            scrollGesturesEnabled={false}
            center={{ ...geolocation, zoom: 16 }}
          >
            <Marker coordinate={geolocation} image={mapPickerSelectImage} />
          </NaverMapView>
        ) : (
          <MapContainer />
        )}
        <MapSafeArea>
          <FloatingActionButton>
            <LocateActiveIcon width={24} height={24} />
          </FloatingActionButton>
        </MapSafeArea>
      </MapContainer>
      <AddressContent>
        <AddressLocationSafeArea>
          <AddressTypoWrapper>
            <Typo type="BOLD_18" style={typoStyle}>
              대략적인 주소
            </Typo>
            <Typo type="REGULAR_11" color={GrayColor.GRAY_300} style={typoStyle}>
              서울시 서초구 양재천로 131 4층(상세주소)
            </Typo>
          </AddressTypoWrapper>
          <ButtonWrapper>
            <AddressSubmitButton>
              <Typo type="BOLD_14" color={GrayColor.GRAY_0}>
                이 위치로 주소 설정
              </Typo>
            </AddressSubmitButton>
          </ButtonWrapper>
        </AddressLocationSafeArea>
      </AddressContent>
    </AddressLocationStyled>
  );
};

export default AddressLocation;
