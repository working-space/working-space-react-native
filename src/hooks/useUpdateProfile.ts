import { useCallback, useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';

export default function useUpdateProfile() {
  const [profileImage, setProfileImage] = useState('');
  const [profileName, setProfileName] = useState('');

  const updateProfileImage = useCallback(async () => {
    await ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else {
          const imageURL = response.assets?.[0]?.uri ?? '';
          setProfileImage(imageURL);
        }
      }
    );
  }, []);

  return {
    profileImage,
    setProfileImage,
    updateProfileImage,
    profileName,
    setProfileName,
  };
}
