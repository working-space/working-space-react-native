import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Coordinate from 'src/types/coordinate';
import Status from 'src/types/status';

interface LocalityInfo {
  order: number;
  adminLevel?: number;
  name: string;
  description: string;
  isoName?: string;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: number;
}

interface GeocodeAPIResponse {
  latitude: number;
  longitude: number;
  lookupSource: string;
  plusCode: string;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  localityInfo: {
    administrative: LocalityInfo[];
  };
}

const GEOCODE_API_URL = ({ latitude, longitude }: Coordinate) =>
  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ko`;

const useGeocode = (coordinate: Coordinate | null) => {
  const [geocode, setGeocode] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const isError = status === Status.FAILURE;

  const getGeocode = useCallback(async () => {
    if (!coordinate) return;

    try {
      const response = await axios.get<GeocodeAPIResponse>(GEOCODE_API_URL(coordinate));
      const addressComponents = response.data.localityInfo.administrative;

      const validAddressComponents = addressComponents.filter(({ order }) => order >= 4).map(({ name }) => name);
      const address = validAddressComponents.reduce(
        (acc, currentValue, index) => `${acc}${index > 0 && currentValue ? ' ' : ''}${currentValue}`,
        ''
      );

      setGeocode(address);
    } catch (error) {
      setStatus(Status.FAILURE);
    }
  }, [coordinate]);

  useEffect(() => {
    if (!coordinate || !coordinate.latitude || !coordinate.longitude) return;

    getGeocode();
  }, [coordinate, getGeocode]);

  return { geocode, isError };
};

export default useGeocode;
