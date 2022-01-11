import React from 'react';
import Modal, { ModalProps } from 'react-native-modal';

import { ModalStyled } from './CustomModal.styles';

type CustomModalProps = Pick<
  ModalProps,
  | 'isVisible'
  | 'backdropOpacity'
  | 'onBackdropPress'
  | 'onShow'
  | 'animationIn'
  | 'animationOut'
  | 'hideModalContentWhileAnimating'
  | 'useNativeDriver'
> & {
  children: React.ReactNode;
};

const CustomModal = ({ children, ...props }: CustomModalProps) => {
  return (
    <Modal style={ModalStyled} {...props}>
      {children}
    </Modal>
  );
};

export default CustomModal;