import "../app/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => {
      setIsPageLoading(true);
    };
    const routeEventEnd = () => {
      setIsPageLoading(false);
    };

    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);
    return () => {
      Router.events.off('routeChangeStart', routeEventStart);
      Router.events.off('routeChangeComplete', routeEventEnd);
      Router.events.off('routeChangeError', routeEventEnd);
    };

  }, []);


  return (
    <GoogleOAuthProvider clientId="116249514998-0lm7l4n7lehr36hs65ekgg5kadvh2g7s.apps.googleusercontent.com">
      <Provider store={store}>
        <Toaster position="bottom-left" />
        <Component {...pageProps} isPageLoading={isPageLoading} />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
