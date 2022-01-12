import React from 'react';
import { TextProps, ViewProps } from 'react-native';

import Typo from 'src/components/Typo/Typo';
import { SecondColor } from 'src/utils/color';
import { FontType } from 'src/utils/font';
import { ErrorViewStyled, HeadingStyled, MessageStyled, RetryButton } from './ErrorView.styles';

type Props = ViewProps;

const ErrorView = (props: Props) => <ErrorViewStyled {...props} />;

ErrorView.Heading = (props: TextProps) => (
  <HeadingStyled>
    <Typo type={FontType.BOLD_24} align="center" {...props} />
  </HeadingStyled>
);

ErrorView.Message = (props: TextProps) => (
  <MessageStyled>
    <Typo type={FontType.REGULAR_16} align="center" {...props} />
  </MessageStyled>
);

ErrorView.RetryButton = RetryButton;

ErrorView.RetryText = (props: TextProps) => (
  <Typo type={FontType.REGULAR_16} color={SecondColor.SECOND_600} {...props} />
);

export default ErrorView;
