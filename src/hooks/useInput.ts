import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setFocus] = useState(false);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onFocus = () => setFocus(true);

  const onBlur = () => setFocus(false);

  return { value, isFocus, setValue, onChangeText, onFocus, onBlur };
};

export default useInput;
