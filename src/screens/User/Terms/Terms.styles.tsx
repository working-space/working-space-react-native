import styled from '@emotion/native';

import { GrayColor } from 'src/utils/color';

export const TermsStyled = styled.SafeAreaView`
  flex: 1;
  background-color: ${GrayColor.GRAY_0};
`;

export const TermsView = styled.ScrollView`
  flex: 1;
  margin-top: 56px;
  padding: 16px;
`;
