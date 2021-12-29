import { useRouter } from 'next/router';
import React, {
  ComponentType,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import GlobalStyle from '../styles/globalStyles';

type Props = {
  Component?: ComponentType;
  pageProps?: Record<string, any>;
};

const MyApp: FunctionComponent<Props> = ({ Component, pageProps }: Props) => {
  const [authorized, setAuthorized] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/login', '/register'];
    const path = url.split('?')[0];
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <GlobalStyle />
      {authorized && <Component {...pageProps} />}
    </>
  );
};

export default MyApp;

// https://github.com/cornflourblue/next-js-11-registration-login-example/blob/master/pages/_app.js
