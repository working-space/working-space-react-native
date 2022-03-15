import React from 'react';
import Modal, { ModalProps } from 'react-native-modal';

import { modalStyle } from './CustomModal.styles';

type CustomModalProps = Pick<
  ModalProps,
  | 'isVisible'
  | 'backdropOpacity'
  | 'onShow'
  | 'animationIn'
  | 'animationOut'
  | 'hideModalContentWhileAnimating'
  | 'useNativeDriver'
> & {
  children: React.ReactNode;
  onModalClose: () => void;
};

const CustomModal = ({ children, onModalClose, ...props }: CustomModalProps) => {
  return (
    <Modal style={modalStyle} onBackdropPress={onModalClose} onBackButtonPress={onModalClose} {...props}>
      {children}
    </Modal>
  );
};

export default CustomModal;
