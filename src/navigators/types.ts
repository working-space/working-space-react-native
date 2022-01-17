export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Signup: {
    name: string;
    profileImageURL: string;
  };
  Detail: { cafeId: string };
  Map: undefined;
  Profile: undefined;
  Favorites: undefined;
  Comments: undefined;
  Bookmarks: undefined;
  Settings: undefined;
  Terms: { content: string };
};
