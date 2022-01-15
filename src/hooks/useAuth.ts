import { atom, selector, useRecoilValue, useRecoilState } from 'recoil';

const tokenState = atom<string | null>({
  key: 'token',
  default: null,
});

const loginState = selector({
  key: 'loginState',
  get: ({ get }) => (get(tokenState) ? true : false),
});

const useAuth = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const isLoggedIn = useRecoilValue(loginState);

  const fetchToken = (accessToken: string) => {
    setToken(accessToken);
  };

  return { token, fetchToken, isLoggedIn };
};

export default useAuth;
