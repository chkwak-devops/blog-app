import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Footer from "../src/component/Footer";
import Top from "../src/component/Top";


export default function App({ Component, pageProps }) {

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
