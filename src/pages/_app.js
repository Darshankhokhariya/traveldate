import Nav from "@/component/navbar/Nav";
import "../app/globals.css";
import Footer from "@/component/footer/Footer";
import Copyright from "@/component/Rights/Copyright";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Toaster } from "react-hot-toast";
import Navbar from "@/component/navbar/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="116249514998-0lm7l4n7lehr36hs65ekgg5kadvh2g7s.apps.googleusercontent.com">
      <Provider store={store}>
        <Toaster position="bottom-left" />
        <Component {...pageProps} />
        {/* <Footer /> */}
        <Copyright />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
