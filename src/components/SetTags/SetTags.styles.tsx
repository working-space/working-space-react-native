import styled from '@emotion/native';

export const AllTags = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditTags = styled.View<{ index: number; allLength: number }>`
  width: 96.6%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ index, allLength }) => (index === allLength - 1 ? '0' : '32px')};
`;
