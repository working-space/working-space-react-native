import { useCallback, useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import { atom, useRecoilState } from 'recoil';

import Coordinate from 'src/types/coordinate';
import Status from 'src/types/status';

const androidPermissions = [PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
const iosPermissions = [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];

const geolocationState = atom<Coordinate | null>({
  key: 'geolocation',
  default: null,
});

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useRecoilState(geolocationState);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [permissionStatus, setPermissionStatus] = useState<Status>(Status.IDLE);

  const isError = status === Status.FAILURE;
  const isPermissionError = permissionStatus === Status.FAILURE;

  const getGeolocation = useCallback(async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setGeolocation({ latitude, longitude });
        setStatus(Status.SUCCESS);
      },
      () => setStatus(Status.FAILURE),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [setGeolocation]);

  const requestAndroidPermission = useCallback(
    async () =>
      requestMultiple(androidPermissions)
        .then(() => setPermissionStatus(Status.SUCCESS))
        .catch(() => setPermissionStatus(Status.FAILURE)),
    []
  );

  const requestIOSPermission = useCallback(
    async () =>
      requestMultiple(iosPermissions)
        .then(() => setPermissionStatus(Status.SUCCESS))
        .catch(() => setPermissionStatus(Status.FAILURE)),
    []
  );

  const fetchGeolocation = useCallback(async () => {
    await requestAndroidPermission();
    await requestIOSPermission();
    await getGeolocation();
  }, [getGeolocation, requestAndroidPermission, requestIOSPermission]);

  useEffect(() => {
    if (!geolocation || !geolocation.latitude || !geolocation.longitude) {
      fetchGeolocation();
    }
  }, [fetchGeolocation, geolocation]);

  return { geolocation, isError, isPermissionError };
};

export default useGeolocation;
