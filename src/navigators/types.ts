export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Signup: {
    token: string;
    name: string;
    profileImageURL: string;
  };
  Detail: { cafeId: string };
};
