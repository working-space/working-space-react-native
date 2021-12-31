import React from 'react';
import { ViewProps } from 'react-native';

import { ErrorViewStyled, Heading, Message, RetryButton, RetryText } from './ErrorView.styles';

type Props = ViewProps;

const ErrorView = (props: Props) => <ErrorViewStyled {...props} />;

ErrorView.Heading = Heading;
ErrorView.Message = Message;
ErrorView.RetryButton = RetryButton;
ErrorView.RetryText = RetryText;

export default ErrorView;
