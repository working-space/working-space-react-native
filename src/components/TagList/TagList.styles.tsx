import styled from '@emotion/native';

export const TagListWrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`;

export const TagListBox = styled.View`
  width: 100%;
  padding: 24px 0;
`;

export const TagListBoxIcon = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  padding-right: 5px;
`;

export const TagListBoxHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 24px;
`;

export const TagListBoxLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TagListSubmitButton = styled.TouchableOpacity``;

export const TagListBoxAllTags = styled.ScrollView`
  flex-direction: row;
  margin: 0 9px;
`;

export const NoneItem = styled.View`
  flex: 1;
  align-items: flex-end;
`;
