import styled from '@emotion/native';

import { GrayColor, PrimaryColor } from 'src/utils/color';

export const SelectedTagsViewStyled = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${GrayColor.GRAY_0};
`;

export const SelectedTagsViewHeader = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const SelectedTagsViewTop = styled.View`
  align-items: flex-end;
  padding: 16px 0;
  padding-right: 16px;
`;

export const SelectedTagsViewCloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const SelectedTagsViewSubmitButton = styled.TouchableOpacity<{ selected: boolean }>`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? PrimaryColor.PRIMARY_500 : GrayColor.GRAY_200)};
`;
