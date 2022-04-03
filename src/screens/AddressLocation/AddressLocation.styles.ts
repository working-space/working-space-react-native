import styled, { css } from '@emotion/native';
import { GrayColor, OpacityGrayColor, PrimaryColor } from 'src/utils/color';

export const mapViewStyle = css`
  width: 100%;
  height: 100%;
`;

export const typoStyle = css`
  margin-top: 8px;
`;

export const AddressLocationStyled = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const AddressLocationSafeArea = styled.SafeAreaView`
  background-color: ${GrayColor.GRAY_0};
  z-index: 2;
`;

export const MapContainer = styled.View`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const AddressContent = styled.View``;

export const MapSafeArea = styled.SafeAreaView`
  position: absolute;
  flex-direction: row;
  bottom: 0;
  right: 0;
  margin: 16px;
`;

export const FloatingActionButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${GrayColor.GRAY_0};
  box-shadow: 0px 4px 4px ${OpacityGrayColor.OPACITY_BLACK_25};
  border-radius: 40px;
`;

export const AddressTypoWrapper = styled.View`
  padding: 24px 16px 8px 16px;
`;

export const ButtonWrapper = styled.View`
  padding: 16px;
`;

export const AddressSubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  border-radius: 4px;
  background: ${PrimaryColor.PRIMARY_500};
`;
