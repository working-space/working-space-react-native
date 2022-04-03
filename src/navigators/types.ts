export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Signup: {
    name: string;
    profileImageURL: string;
  };
  Search: undefined;
  Address: undefined;
  AddressSearch: undefined;
  AddressLocation: undefined;
  Detail: { cafeId: string };
  Map: undefined;
  Profile: undefined;
  Favorites: undefined;
  Comments: undefined;
  Bookmarks: undefined;
  Settings: undefined;
  Terms: { content: string };
};
