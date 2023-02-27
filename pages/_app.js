import { useState } from "react"
import '@/styles/globals.css'
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";

import baseStyles from "/src/component/css/Base.module.css";
import { Navbar, NavLinks } from "/src/component/nav"
import { Drawer } from "/src/component/drawer"
// import Top from "../src/component/Top";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const navLinksData = [
  { href: "/about", text: "About" },
  { href: "/main", text: "ChatGPT" },
  { href: "/about", text: "Projects" },
]

export default function App({ Component, pageProps }) {

  const [visible, setVisible] = useState(false)

  return (
    <>
      <Drawer
        sidebarComponent={<NavLinks list={navLinksData} verticalNavLinks />}
        drawerOnHide={() => setVisible(false)}
        drawerVisible={visible}
        nav={
          <Navbar
            setVisible={setVisible}
            visible={visible}
            list={navLinksData}
            verticalNavLinks
            logo="NCHIME DEV"
          />
        }
        main={<Component {...pageProps} />}
      />
    </>
  )
}
