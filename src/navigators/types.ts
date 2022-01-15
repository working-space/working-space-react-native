export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Signup: {
    name: string;
    profileImageURL: string;
  };
  Detail: { cafeId: string };
};
